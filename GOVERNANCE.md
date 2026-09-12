# Governance

PACT is currently maintained under a **single-maintainer (BDFL) model** while the
specification is young and has one implementation. This is expected to evolve into a
small maintainer group as independent implementations and contributors show up — see
[MAINTAINERS.md](MAINTAINERS.md) for who holds that role today.

## Decision process

- Any change to Core (the fields and sections listed as Core in the specification) is
  proposed as a GitHub issue *before* a pull request, describing the problem and the
  proposed change.
- The issue stays open for public comment for at least 7 days, or longer if discussion is
  active.
- The maintainer makes the final call, weighing feedback from the issue thread. Silence is
  not consent — an issue with no comments still needs an explicit decision, not a timeout
  merge.
- Non-Core changes (examples, wording clarity, typo fixes, new non-normative sections such
  as §46 Reference Implementations) can go straight to pull request.

## Path to multi-maintainer

Once a second independent implementation and its author are active in the project, they
are invited to become a co-maintainer. Beyond two maintainers, decisions move from single
sign-off to lazy consensus among maintainers (no objection within 7 days = approved),
matching typical open source foundation practice.

## Scope

This document governs the specification repository only (`GiskardB/PACT`). It has no
authority over any implementation's own governance (e.g. Gargantua's).
