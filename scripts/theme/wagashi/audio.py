"""Synthesises the sound effects and the BGM (numpy only) and encodes them to mp3 with ffmpeg.

Each file keeps the name and the duration of the original, because the engine loads them by name and some
of its timings depend on their length. Everything is generated from scratch: plucked strings, chimes, noise.
"""
import io
import os
import subprocess
import tempfile
import wave

import numpy as np

SR = 44100
ASSET_SOUND = "public/game/magicslide/assets/commons/sound"
ORIG_REF = "vendor-original-assets"

# a pentatonic (miyako-bushi-like) scale around D: D E G A B C -> used for chimes and the BGM
D4, E4, F4, G4, A4, B4, C5, D5 = 293.66, 329.63, 349.23, 392.00, 440.00, 493.88, 523.25, 587.33
PENTA = [D4, F4, G4, A4, C5, D5]


def t_axis(dur):
    return np.arange(int(SR * dur)) / SR


def env_exp(n, decay):
    t = np.arange(n) / SR
    return np.exp(-t * decay)


def fade(x, a=0.004, b=0.01):
    n = len(x)
    ia, ib = min(n, int(SR * a)), min(n, int(SR * b))
    if ia:
        x[:ia] *= np.linspace(0, 1, ia)
    if ib:
        x[-ib:] *= np.linspace(1, 0, ib)
    return x


def pluck(freq, dur, decay=6.0, bright=0.5):
    t = t_axis(dur)
    x = np.sin(2 * np.pi * freq * t) + bright * np.sin(2 * np.pi * freq * 2 * t) * np.exp(-t * decay * 1.5) + 0.25 * bright * np.sin(2 * np.pi * freq * 3 * t) * np.exp(-t * decay * 2)
    return fade(x * np.exp(-t * decay))


def chime(freq, dur, decay=5.0):
    t = t_axis(dur)
    x = np.sin(2 * np.pi * freq * t) + 0.5 * np.sin(2 * np.pi * freq * 2.76 * t) * np.exp(-t * decay * 1.5) + 0.3 * np.sin(2 * np.pi * freq * 5.4 * t) * np.exp(-t * decay * 2.5)
    return fade(x * np.exp(-t * decay))


def sweep(f0, f1, dur, decay=8.0, shape="sine"):
    t = t_axis(dur)
    f = f0 + (f1 - f0) * (t / max(dur, 1e-6))
    ph = 2 * np.pi * np.cumsum(f) / SR
    x = np.sin(ph) if shape == "sine" else np.sign(np.sin(ph)) * 0.5
    return fade(x * np.exp(-t * decay))


def noise(dur, seed=1, lp=None, decay=0.0):
    rng = np.random.default_rng(seed)
    x = rng.uniform(-1, 1, int(SR * dur))
    if lp:
        k = max(1, int(SR / lp))
        x = np.convolve(x, np.ones(k) / k, mode="same")
    if decay:
        x = x * env_exp(len(x), decay)
    return fade(x)


def place(buf, x, at, gain=1.0):
    i = int(at * SR)
    n = max(0, min(len(x), len(buf) - i))
    if n > 0:
        buf[i : i + n] += x[:n] * gain
    return buf


def render(dur, parts):
    buf = np.zeros(int(SR * dur))
    for x, at, gain in parts:
        place(buf, x, at, gain)
    return buf


def bgm(dur):
    """An 8-second loop: a gentle plucked melody over a soft drone, in a pentatonic scale."""
    buf = np.zeros(int(SR * dur))
    beat = dur / 16
    melody = [0, 2, 3, 4, 3, 2, 0, None, 1, 2, 3, 5, 4, 3, 2, None]
    for i, m in enumerate(melody):
        if m is not None:
            place(buf, pluck(PENTA[m] * (1 if i < 12 else 1), 0.7, 5.0), i * beat, 0.28)
    for i in (0, 4, 8, 12):
        place(buf, pluck(PENTA[0] / 2, 1.6, 2.5, 0.3), i * beat, 0.3)
    t = t_axis(dur)
    buf += 0.05 * np.sin(2 * np.pi * (PENTA[0] / 2) * t)
    buf[-int(SR * 0.05):] *= np.linspace(1, 0, int(SR * 0.05))
    return buf


def design(name, dur):
    n = name.replace(".mp3", "")
    if n == "bgm":
        return bgm(dur)
    if n == "se_select":
        return render(dur, [(pluck(PENTA[3], dur, 22), 0, 0.7)])
    if n == "se_button":
        return render(dur, [(pluck(PENTA[2], dur, 26), 0, 0.7)])
    if n == "se_buttonpull":
        return render(dur, [(pluck(PENTA[1], dur, 22), 0, 0.7)])
    if n == "se_drop":
        return render(dur, [(sweep(220, 110, dur, 14), 0, 0.8), (noise(0.03, 3, 2500, 60), 0, 0.4)])
    if n == "se_push":
        return render(dur, [(noise(dur, 5, 900, 6), 0, 0.5), (sweep(300, 180, dur, 8), 0, 0.3)])
    if n == "se_page":
        return render(dur, [(noise(dur, 6, 1800, 7), 0, 0.5)])
    if n == "se_break":
        parts = [(noise(0.25, 7, 3000, 12), 0, 0.5)]
        for k, f in enumerate([PENTA[3], PENTA[4], PENTA[5], PENTA[5] * 1.5]):
            parts.append((chime(f, 0.55, 6), 0.05 + 0.07 * k, 0.4))
        return render(dur, parts)
    if n == "se_stonebreak":
        return render(dur, [(noise(dur, 8, 1200, 10), 0, 0.7), (sweep(160, 70, min(dur, 0.25), 14), 0, 0.6)])
    if n == "se_combo":
        return render(dur, [(chime(f, 0.4, 7), 0.09 * k, 0.5) for k, f in enumerate([PENTA[2], PENTA[4], PENTA[5]])])
    if n == "se_bestscore":
        return render(dur, [(chime(f, 0.6, 5), 0.11 * k, 0.5) for k, f in enumerate([PENTA[2], PENTA[3], PENTA[4], PENTA[5], PENTA[5] * 1.5])])
    if n == "se_bubble":
        parts = []
        for k in range(6):
            parts.append((sweep(500 + 80 * k, 900 + 100 * k, 0.09, 30), 0.11 * k + (k % 2) * 0.03, 0.45))
        return render(dur, parts)
    if n in ("se_sky", "se_wind", "se_slicewind"):
        return render(dur, [(noise(dur, 9 + len(n), 700 + 400 * (n == "se_slicewind"), 1.5), 0, 0.45)])
    if n == "se_slice":
        return render(dur, [(sweep(2200, 900, dur, 22), 0, 0.5), (noise(dur, 11, 6000, 30), 0, 0.3)])
    if n == "se_thnder":
        return render(dur, [(noise(dur, 12, 4000, 5), 0, 0.5), (sweep(90, 45, dur, 4, "square"), 0, 0.4)])
    if n == "se_charge":
        return render(dur, [(sweep(200, 1400, dur, 0.3), 0, 0.4)])
    if n == "se_gacha":
        parts = []
        for k in range(8):
            parts.append((pluck(PENTA[k % 6] * 2, 0.16, 12), 0.07 * k, 0.35))
        return render(dur, parts)
    if n == "se_rare":
        return render(dur, [(chime(f, 0.7, 4), 0.05 * k, 0.4) for k, f in enumerate([PENTA[4], PENTA[5], PENTA[5] * 1.5, PENTA[5] * 2])])
    if n in ("se_jardrop", "se_podpush"):
        return render(dur, [(sweep(320, 140, dur, 12), 0, 0.7)])
    if n == "se_coincollect":
        return render(dur, [(chime(PENTA[5] * 2, 0.15, 12), 0, 0.5), (chime(PENTA[5] * 3, dur, 8), 0.06, 0.4)])
    if n == "se_target":
        return render(dur, [(chime(PENTA[4], 0.5, 6), 0, 0.5), (chime(PENTA[5], dur, 5), 0.12, 0.5)])
    return render(dur, [(pluck(PENTA[2], dur, 10), 0, 0.5)])


def original_duration(name):
    data = subprocess.run(["git", "show", "%s:%s/%s" % (ORIG_REF, ASSET_SOUND, name)], capture_output=True, check=True).stdout
    with tempfile.NamedTemporaryFile(suffix=".mp3") as f:
        f.write(data)
        f.flush()
        out = subprocess.run(["ffprobe", "-v", "error", "-show_entries", "format=duration", "-of", "csv=p=0", f.name], capture_output=True, check=True, text=True).stdout
    return float(out.strip())


def to_mp3(x, path):
    x = x / max(1e-6, np.max(np.abs(x))) * 0.8
    pcm = (np.clip(x, -1, 1) * 32000).astype("<i2")
    stereo = np.repeat(pcm[:, None], 2, axis=1)
    with tempfile.NamedTemporaryFile(suffix=".wav") as w:
        with wave.open(w.name, "wb") as f:
            f.setnchannels(2)
            f.setsampwidth(2)
            f.setframerate(SR)
            f.writeframes(stereo.tobytes())
        subprocess.run(["ffmpeg", "-y", "-loglevel", "error", "-i", w.name, "-codec:a", "libmp3lame", "-b:a", "128k", path], check=True)


def generate(root):
    names = subprocess.run(["git", "ls-tree", "--name-only", ORIG_REF, ASSET_SOUND + "/"], cwd=root, capture_output=True, check=True, text=True).stdout.split()
    out_dir = os.path.join(root, ASSET_SOUND)
    os.makedirs(out_dir, exist_ok=True)
    n = 0
    for full in names:
        name = os.path.basename(full)
        dur = original_duration(name)
        to_mp3(design(name, dur), os.path.join(out_dir, name))
        n += 1
    return n
