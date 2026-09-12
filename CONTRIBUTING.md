# Contributing

PACT is a specification, not code — most contributions are wording, examples, or Core
scope proposals against [SPECIFICATION.md](SPECIFICATION.md).

## Reporting an issue or proposing a change

1. Open a GitHub issue describing the problem: an ambiguity, a missing example, a field
   that doesn't fit an implementation you're building, etc.
2. If the change touches Core, say so and describe why the existing wording didn't work in
   practice — implementation experience is the strongest kind of evidence (see
   [SPECIFICATION.md §41](SPECIFICATION.md#41-core-vs-extension-decision-rule) for the
   Core-vs-extension rule, and [§44](SPECIFICATION.md#44-portability-note) on evidence).
3. Wait for discussion (see [GOVERNANCE.md](GOVERNANCE.md) for the review window) before
   sending a pull request for Core changes. Non-Core fixes (typos, clarity, examples) can
   go straight to a PR.

## Adding your implementation to §46

If you've implemented PACT — even partially — open a PR adding an entry to
[§46, Reference Implementations](SPECIFICATION.md#46-reference-implementations): what you
built, what parts of Core you use, and anything the exercise fed back into the spec. This
is the primary way the project tracks adoption.

## Style

Keep additions as small as the problem requires — PACT's own design goal
(["easier to understand and implement than the problem it describes"](README.md)) applies
to its own documentation too.
