# PACT — Agent Contract Specification

**The open contract for AI agents.**

> A lightweight semantic specification for AI agent capabilities, cognition and contracts.

PACT answers: **what is this agent, what can it do, what kind of cognition does it
provide, and under what basic contract can it operate?**

It is not an agent runtime, framework, orchestration engine, agent-to-agent protocol,
tool protocol, governance framework, registry, or LLM API. It is a small, human-readable,
vendor-neutral description layer designed to compose with other agent standards, not
replace them — **A2A** (Agent2Agent Protocol, agent-to-agent interop), **MCP** (Model
Context Protocol, tools/resources/prompts), **ANP/ADP** (Agent Network Protocol / Agent
Description Protocol, decentralized identity and discovery), and whatever governance
layer a platform already has (see [§17](SPECIFICATION.md#17-relationship-with-agent-manifest)
on why PACT calls that role "Agent Manifest" without naming one specific standard). The
core design principle:

> The specification must be easier to understand and implement than the problem it describes.

**Read the specification: [SPECIFICATION.md](SPECIFICATION.md)** (has a
[table of contents](SPECIFICATION.md#contents) for the 50 short sections)

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
unresolved. The intended path is community review and feedback from independent
implementations — not a big-bang 1.0 written in isolation.

PACT is not tied to any one implementation, framework or vendor — see
[§28, No Required Framework](SPECIFICATION.md#28-no-required-framework) and
[§40, What Makes PACT Different](SPECIFICATION.md#40-what-makes-pact-different).

## Implementations

[§46, Reference Implementations](SPECIFICATION.md#46-reference-implementations) lists
known implementations and, non-normatively, what building each one fed back into this
specification. Nothing in PACT requires any of them — the section exists as portability
evidence (§44), and grows as more implementations show up.

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md) for how to propose changes, and
[GOVERNANCE.md](GOVERNANCE.md) for how decisions get made. Current maintainers are listed
in [MAINTAINERS.md](MAINTAINERS.md).

## License

MIT — see [LICENSE](LICENSE).
