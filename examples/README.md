# Examples

Three manifests, in increasing order of completeness. Every field they use is Core —
nothing here needs an extension.

| File | Shows | Spec sections |
|------|-------|----------------|
| [`1-minimal.yaml`](1-minimal.yaml) | The smallest useful manifest: identity, one capability, one interface. | [§4](../SPECIFICATION.md#4-minimal-manifest) |
| [`2-typical.yaml`](2-typical.yaml) | A realistic manifest: what the agent can reason about (`cognition`) and what it's allowed to do (`contract`), without every optional field. | [§11](../SPECIFICATION.md#11-cognition-self-declaration), [§14](../SPECIFICATION.md#14-contract) |
| [`3-extended.yaml`](3-extended.yaml) | Every optional Core field in one document, for reference. | [§5](../SPECIFICATION.md#5-extended-manifest) |

For a field-by-field walkthrough that introduces one concept at a time, see
[§23, Progressive Complexity](../SPECIFICATION.md#23-progressive-complexity) in the
specification.
