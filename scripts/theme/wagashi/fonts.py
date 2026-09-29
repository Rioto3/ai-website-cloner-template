"""Finds (or fetches) the Zen Maru Gothic fonts (SIL Open Font License 1.1) used for baked-in text."""
import glob, os, subprocess, tarfile, tempfile

HERE = os.path.dirname(os.path.abspath(__file__))
CACHE = os.path.join(HERE, "..", ".cache")
NAMES = {"bold": "ZenMaruGothic_700Bold.ttf", "black": "ZenMaruGothic_900Black.ttf", "medium": "ZenMaruGothic_500Medium.ttf"}


def _find(name):
    for root in (os.environ.get("THEME_FONT_DIR", ""), CACHE):
        if not root:
            continue
        hits = glob.glob(os.path.join(root, "**", name), recursive=True)
        if hits:
            return hits[0]
    return None


def font_path(weight="bold"):
    name = NAMES[weight]
    p = _find(name)
    if p:
        return p
    os.makedirs(CACHE, exist_ok=True)
    with tempfile.TemporaryDirectory() as tmp:
        subprocess.run(["npm", "pack", "@expo-google-fonts/zen-maru-gothic", "--silent"], cwd=tmp, check=True, capture_output=True)
        tgz = glob.glob(os.path.join(tmp, "*.tgz"))[0]
        with tarfile.open(tgz) as t:
            t.extractall(CACHE)
    return _find(name)
