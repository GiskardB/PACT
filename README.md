# PACT — Agent Contract Specification

**The open contract for AI agents.**

> A lightweight semantic specification for AI agent capabilities, cognition and contracts.

PACT answers: **what is this agent, what can it do, what kind of cognition does it
provide, and under what basic contract can it operate?**

It is not an agent runtime, framework, orchestration engine, agent-to-agent protocol,
tool protocol, governance framework, registry, or LLM API. It is a small, human-readable,
vendor-neutral description layer designed to compose with A2A, MCP, ANP/ADP, Agent
Manifest and other standards — not replace them. The core design principle:

> The specification must be easier to understand and implement than the problem it describes.

**Read the specification: [SPECIFICATION.md](SPECIFICATION.md)**

---

## Why

Most agent-description effort today either reinvents governance (duplicating what
Agent-Manifest-style specs already do well) or skips semantics entirely (an agent is
just an A2A/MCP endpoint with no portable way to say what it *is*). PACT stays
deliberately small: metadata, identity, purpose, capabilities, cognition, contract,
interfaces — nothing else, with explicit rules for what does and doesn't belong in Core
([§41](SPECIFICATION.md#41-core-vs-extension-decision-rule)).

A minimal manifest:

```yaml
apiVersion: pact/v1
kind: Agent

metadata:
  name: architecture-agent
  version: 1.0.0

capabilities:
  - architecture-analysis

interfaces:
  - protocol: a2a
    endpoint: https://example.com/a2a
```

## Status

**Draft, v0.4 — not a finalized industry standard.** See
[§50, Draft Status](SPECIFICATION.md#50-draft-status) for what that means in practice,
and [§47, Open Questions](SPECIFICATION.md#47-open-questions) for what's still
unresolved. The intended path is community review and implementation feedback, then an
eventual proposal to [AAIF](https://aaif.dev) — not a big-bang 1.0 written in isolation.

## Reference implementation

**[Gargantua](https://github.com/GiskardB/gargantua)** carries `cognition`, `contract`
and `interfaces` as real, tested fields on its own agent manifest — the "Agent Manifest"
layer in PACT's own ecosystem diagram — and projects a standalone PACT Core document
live at `GET /.well-known/pact.json` on every running agent. What that implementation
experience fed back into this specification (wire-format pitfalls, an authoring-UX
lesson, evidence for one of the open questions) is in
[§46, Reference Implementations](SPECIFICATION.md#46-reference-implementations).

## License

MIT — see [LICENSE](LICENSE).
