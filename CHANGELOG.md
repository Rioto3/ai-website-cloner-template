# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Changed
- Rolled back an original-IP reskin attempt ("ミツモリ村") and a from-scratch game engine
  rewrite; archived the design docs and rationale in `docs/archive/2026-09-mitsumori-ip-poc/`
  and reverted to the faithful witch-clone baseline
- Detached from the generic "clone any website" template: removed the `/clone-website` skill,
  the generic inspection guide, and multi-agent-platform scaffolding — this repo is now scoped
  to this one game
- Repositioned the project as a self-hosted, ad-free reference build of the cloned game,
  deployed as a single Cloudflare Worker

## [0.1.0] - 2026-07-07

### Added
- Faithful clone of the target puzzle game's shell UI (header, side panels, modals, result
  panel) in Next.js, ported from the original site's markup/CSS
- Full self-hosting of the game runtime (162 files: PixiJS, Howler, sprite atlases, sounds,
  JSON manifests, language packs) with zero third-party requests during play
- Native re-implementation of the parent/game `postMessage` protocol (start / end / save /
  getdata / ad) in `GameCenter.tsx`, replacing the vendor's backend and ad network
