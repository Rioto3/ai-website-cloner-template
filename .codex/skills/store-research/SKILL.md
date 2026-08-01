---
name: store-research
description: Research a target small business for a blind website proposal before any cloning or implementation. Use as the first skill execution in a fresh proposal project to collect store facts, media candidates, SEO/AI-search hypotheses, and about three out-of-prefecture reference websites while avoiding a blocked target domain.
---

# Store Research

Create the initial research package for **$ARGUMENTS**.

Typical invocation:

```text
/store-research "<business name>" --blocked-domain <domain> --category <category> --area "<area>"
```

## Workflow Position

This skill is the first skill to run in a fresh proposal project.

After completing this skill:

- Stop.
- Present the reference-site candidates.
- Ask the user to choose one reference site.
- Do not run `clone-website` automatically.
- Do not run `proposal-adaptation` automatically.

The user must explicitly invoke each later skill in order:

1. `clone-website` for the selected reference URL.
2. `proposal-adaptation` after the reference clone is complete.

## Rules

- Do not open the blocked target domain.
- Use external public sources such as Google search results, Google Business Profile snippets, SNS, map listings, review sites, food/beauty directories, news, and blogs.
- Record every source in `docs/research/source-ledger.md`.
- Separate confirmed facts from assumptions.
- Treat media as a first-class artifact.
- Prefer out-of-prefecture reference websites so the final proposal is not locally confusable.

## Required Outputs

Create or update:

- `docs/brief/proposal-goal.md`
- `docs/brief/business-hypothesis.md`
- `docs/research/source-ledger.md`
- `docs/research/external-facts.md`
- `docs/research/media-inventory.md`
- `docs/research/search-ai-visibility.md`
- `docs/research/reference-sites.md`

## Source Ledger

For every source, capture:

- URL
- source type
- accessed date
- extracted facts
- extracted media candidates
- rights/use status: `final-usable`, `internal-draft`, `reference-only`, `needs-permission`, or `unknown`

## External Facts

Classify facts as:

- confirmed
- likely
- assumption
- unknown

Include store name, category, area, address, hours, menu/services, price signals, target customers, strengths, objections, and likely CTA.

## Media Inventory

Classify each media item:

- target-store image
- SNS/profile image
- directory image
- review/user image
- reference-site image
- stock candidate
- generated fallback idea

Do not treat media as usable for sales/public output unless rights are clear.

## Search And AI Visibility

Write hypotheses for:

- expected branded query appearance
- non-branded local query targets
- page/site-link candidates
- structured facts AI search should be able to quote
- schema candidates
- pages or sections needed to support those results

## Reference Sites

Find about three reference websites.

For each candidate, include:

- URL
- business category and location
- why it matches
- visual direction
- media pattern
- section structure
- CTA pattern
- risk if cloned too literally
- score from 1 to 5

End by recommending one primary baseline candidate and explain why.
