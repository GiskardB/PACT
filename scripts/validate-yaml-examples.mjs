// Parse every ```yaml fenced block in SPECIFICATION.md and fail on invalid YAML.
import { readFileSync } from "node:fs";
import { load } from "js-yaml";

const text = readFileSync("SPECIFICATION.md", "utf8");
const blocks = [...text.matchAll(/```yaml\n([\s\S]*?)```/g)].map((m) => m[1]);

const failures = [];
blocks.forEach((block, i) => {
  try {
    load(block);
  } catch (e) {
    failures.push([i, e]);
  }
});

console.log(`Checked ${blocks.length} YAML examples in SPECIFICATION.md`);
for (const [i, e] of failures) {
  console.log(`--- block ${i} is invalid YAML ---\n${e}\n`);
}

process.exit(failures.length ? 1 : 0);
