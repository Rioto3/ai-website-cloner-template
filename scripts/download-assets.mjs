#!/usr/bin/env node
// Mirrors game + shell assets for the Magic Slide clone.
// Usage: node scripts/download-assets.mjs <url-list-file>
// Each line: a full URL. Files under the kantangame magicslide game dir are
// mirrored into public/game/magicslide/ preserving relative paths (query strings stripped).
// Other URLs land in public/images/<basename>.
import { readFileSync, mkdirSync, writeFileSync, existsSync } from 'node:fs';
import { dirname, join } from 'node:path';

const GAME_PREFIX = 'https://img.kantangame.com/game/plus/sync/game/magicslide_20260604/';
const OUT_GAME = 'public/game/magicslide';
const OUT_MISC = 'public/images';

const listFile = process.argv[2];
if (!listFile) { console.error('usage: node scripts/download-assets.mjs <url-list-file>'); process.exit(1); }

const urls = [...new Set(
  readFileSync(listFile, 'utf8').split('\n').map(l => l.trim()).filter(l => l.startsWith('http'))
)];

function localPathFor(url) {
  const clean = url.split('?')[0];
  if (clean.startsWith(GAME_PREFIX)) return join(OUT_GAME, clean.slice(GAME_PREFIX.length));
  return join(OUT_MISC, clean.split('/').pop());
}

let ok = 0, skipped = 0, failed = [];
async function fetchOne(url) {
  const dest = localPathFor(url);
  if (existsSync(dest)) { skipped++; return; }
  try {
    const res = await fetch(url, { headers: { Referer: 'https://game.hiroba.dpoint.docomo.ne.jp/' } });
    if (!res.ok) throw new Error('HTTP ' + res.status);
    const buf = Buffer.from(await res.arrayBuffer());
    mkdirSync(dirname(dest), { recursive: true });
    writeFileSync(dest, buf);
    ok++;
  } catch (e) {
    failed.push(url + '  (' + e.message + ')');
  }
}

const BATCH = 4;
for (let i = 0; i < urls.length; i += BATCH) {
  await Promise.all(urls.slice(i, i + BATCH).map(fetchOne));
  if ((i / BATCH) % 10 === 0) process.stdout.write(`\r${Math.min(i + BATCH, urls.length)}/${urls.length}`);
}
console.log(`\ndownloaded: ${ok}, already present: ${skipped}, failed: ${failed.length}`);
failed.forEach(f => console.log('FAILED:', f));
