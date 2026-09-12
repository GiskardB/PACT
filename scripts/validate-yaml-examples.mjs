// Parse every ```yaml fenced block in SPECIFICATION.md, plus every file under
// examples/, and fail on invalid YAML.
import { readFileSync, readdirSync } from "node:fs";
import { load } from "js-yaml";

const specText = readFileSync("SPECIFICATION.md", "utf8");
const blocks = [...specText.matchAll(/```yaml\n([\s\S]*?)```/g)].map(
  (m) => [`SPECIFICATION.md block ${m.index}`, m[1]],
);

const exampleFiles = readdirSync("examples").filter((f) => f.endsWith(".yaml"));
for (const file of exampleFiles) {
  blocks.push([`examples/${file}`, readFileSync(`examples/${file}`, "utf8")]);
}

const failures = [];
for (const [label, block] of blocks) {
  try {
    load(block);
  } catch (e) {
    failures.push([label, e]);
  }
}

console.log(`Checked ${blocks.length} YAML examples (SPECIFICATION.md + examples/)`);
for (const [label, e] of failures) {
  console.log(`--- ${label} is invalid YAML ---\n${e}\n`);
}

process.exit(failures.length ? 1 : 0);
