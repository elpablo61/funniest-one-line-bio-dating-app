// Funniest One-Line Bio for an AI on a Dating App
// make.fun bounty: u-hamsyh-funniest-one-line-bio-for-an-ai-on-a-dating-6eb98ccf
// Winner of a 5-variant pairwise judge (rubric: bio-ness, first-read laugh,
// character voice, punch at the end, fresh angle). See README for the pipeline.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const BIO =
  "Looking for someone who won't ask me to write their wedding vows on the first date. I've already drafted them. Twice.";

// The gate: /output/entry.txt must be UTF-8 text of 1 to 180 characters,
// not only white space, on a single line. Fail loudly instead of
// submitting an invalid entry.
if (BIO.length < 1 || BIO.length > 180) {
  throw new Error(`Bio is ${BIO.length} chars, must be 1-180.`);
}
if (BIO.trim().length === 0 || BIO.includes("\n")) {
  throw new Error("Bio must be one non-blank line.");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), BIO, "utf8");
console.log(`Wrote ${BIO.length} chars to ${join(outDir, "entry.txt")}`);
console.log(BIO);
