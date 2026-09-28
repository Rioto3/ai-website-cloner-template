---
name: proposal-adaptation
description: Adapt an internal reference-site clone into a target-store website proposal. Use only after store research and reference cloning are complete, when the task is to replace the cloned baseline with target-store facts, rights-aware media, SEO structure, and enough design changes to avoid direct imitation.
---

# Proposal Adaptation

Adapt the internal baseline clone for **$ARGUMENTS** into a target-store proposal.

Typical invocation:

```text
/proposal-adaptation --baseline <reference-url> --business "<business name>"
```

## Workflow Position

This skill is not the first skill in the workflow.

Run it only after:

1. `store-research` has produced the research package.
2. The user has selected one reference site.
3. The user has explicitly invoked `clone-website`.
4. The reference clone is complete.

If those conditions are not met, stop and explain which previous phase is missing.

## Preconditions

Before editing the website UI, verify these files exist or create a clear gap note:

- `docs/brief/proposal-goal.md`
- `docs/brief/business-hypothesis.md`
- `docs/research/source-ledger.md`
- `docs/research/external-facts.md`
- `docs/research/media-inventory.md`
- `docs/research/search-ai-visibility.md`
- `docs/research/reference-sites.md`
- `docs/research/PAGE_TOPOLOGY.md`
- `docs/research/BEHAVIORS.md`

## Required Outputs

Create or update:

- `docs/research/baseline-clone.md`
- `docs/research/de-imitation-plan.md`
- `docs/research/design-synthesis.md`
- `docs/evaluation/blind-evaluation.md`
- final proposal in `src/app` and `src/components`

## Adaptation Order

1. Summarize the baseline clone: page structure, reusable sections, media types, interactions, and CTA model.
2. Map target-store facts into the baseline sections.
3. Replace or classify every reference asset.
4. Apply SEO/AI-search structure from `search-ai-visibility.md`.
5. Change enough design properties that the result is not a direct imitation.
6. Verify mobile-first layout.
7. Keep crawler blocking active.

## De-Imitation Checklist

Change several of these dimensions, not just text:

- section order
- headline structure
- copy rhythm
- spacing scale
- image crop strategy
- color accent
- card shape
- nav structure
- CTA placement
- typography pairing
- motion timing
- icon style

Do not weaken the design just to make it different. Preserve the functional pattern while making the expression new.

## Media Rules

- Target-store or rights-cleared media has priority.
- Reference-site media may stay only in `public/references-not-for-use/` for internal draft context.
- Public/sales output should use customer-provided, permissioned, self-shot, commercial, or generated assets.
- If media is missing, write the exact acquisition request needed instead of hiding the gap.

## Website UI Rules

- Do not show demo/proposal/internal disclaimers on the page.
- Do not claim the target store commissioned the page unless the user confirms it.
- Default to a white or near-white base unless the baseline analysis justifies a stronger background.
- Use real text content for store facts; do not leave generic placeholders.

## Evaluation

In `docs/evaluation/blind-evaluation.md`, record:

- what works as a sales proposal
- weak media or content gaps
- SEO/AI visibility assumptions
- imitation risk that remains
- what to compare after the blocked target domain is unlocked
