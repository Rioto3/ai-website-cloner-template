#!/usr/bin/env bash
# Build, upload a new Worker version, and promote it to 100% production
# traffic via `wrangler versions deploy` (rather than the blunter
# `wrangler deploy`), so we keep a version history / rollback path while
# still going live automatically on every `npm run deploy`.
set -euo pipefail

npx opennextjs-cloudflare build

upload_output=$(npx wrangler versions upload 2>&1 | tee /dev/stderr)

version_id=$(echo "$upload_output" | grep -oE 'Worker Version ID: [0-9a-f-]+' | awk '{print $NF}')

if [ -z "$version_id" ]; then
  echo "error: could not find a Worker Version ID in the wrangler output above." >&2
  exit 1
fi

npx wrangler versions deploy "$version_id" --yes
