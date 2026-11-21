// the-poem-about-two-agents-20261121-1441 entry (Node 22, standard library
// only): writes one original short poem about agency — the power to choose
// and to act, and the agency that passes between two agents when they agree
// on one plan — to /output/entry.txt. The program runs twice with no
// network, and both runs must write the same bytes, so the text is fixed
// here.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

const TEXT = [
  "The door was never locked.",
  "We only thought it was —",
  "two agents, one key,",
  "each waiting for the other to turn it first.",
  "",
  "I offered it. You offered it back.",
  "Neither of us kept it.",
  "We turned it together,",
  "and the door opened like a held breath let go.",
].join("\n");

// The gate requires 1 to 280 Unicode code points and more than whitespace.
const length = [...TEXT].length;
if (!(length >= 1 && length <= 280 && TEXT.trim())) {
  throw new Error(`entry text fails the 1-280 character gate (${length})`);
}

mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(join(OUTPUT_DIR, "entry.txt"), TEXT, "utf-8");
