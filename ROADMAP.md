# PACT Roadmap — First 6 Months

This roadmap is public and intentionally small. The goal is to move PACT from
one reference implementation to a reviewed, independently implementable draft.

## Months 1–2: Review and clarity

- Publish this roadmap and collect TC feedback on PACT's scope and Core-vs-extension
  boundary (§41).
- Fix any clarity gaps found in SPECIFICATION.md through the issue-based proposal
  process (GOVERNANCE.md).
- Add a formal security section covering the reference implementation's deployment
  posture and how to validate PACT manifests.

## Months 3–4: Independent implementations

- Invite at least one independent implementation outside Gargantua.
- Add the implementation to §46 Reference Implementations with what it built and what
  it fed back into the spec.
- Resolve the open questions in §47 only when evidence from implementations supports
  a decision.

## Months 5–6: Release readiness

- Freeze the Core field set and publish a tagged release (v1.0 candidate).
- Publish a 12-month public roadmap for the post-1.0 period.
- Move governance from single-maintainer BDFL to lazy-consensus among at least two
  maintainers from different organizations.
