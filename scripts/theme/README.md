# scripts/theme — 和菓子テーマの素材生成

ベンダー（元ゲーム）の画像・音を、自前のコードで描いた仮置き素材に置き換える。
低品質でよい。議論の叩き台であり、後から見直す前提。

## 必要なもの

- Python 3、Pillow、numpy
- ffmpeg（libmp3lame）、git、npm
- git タグ `vendor-original-assets`（元素材そのもの。`git show` で読む。push しておくこと）

## 使い方

```bash
python3 scripts/theme/extract_layout.py      # 元素材から layout.json（矩形・可視範囲）を作る
python3 scripts/theme/generate.py            # 画像を全部生成
python3 scripts/theme/generate.py --audio    # 画像 + 音 + アイコン
python3 scripts/theme/generate.py --audio-only
python3 scripts/theme/generate.py --only 'regex'   # 一部だけ
```

`status.json` に、置き換えた数と、元のまま残した数が出る。

## 方針

- 元素材と同じ矩形・同じ可視範囲に描く。ベンダーのJSON/JSは触らない（ミックス方式）
- ルールを書いていないフレームは元のまま残り、`status.json` に出る
- フォントは Zen Maru Gothic（OFL-1.1）
- 構成：`wagashi/rules_*.py` が種類別の描画ルール、`audio.py` が音の合成、`shell.py` がアイコン
