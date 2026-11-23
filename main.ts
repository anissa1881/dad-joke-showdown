// The Developer's Cache — Dad Joke Showdown entry.
// Writes one dad joke to entry.txt in the output directory
// given by MAKEFUN_OUTPUT_DIR (or a local output dir next to
// this script when the variable is unset).

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const JOKE = "Why did the developer go broke? Because he spent all his cache.";

// The gate allows 1–200 characters; refuse to write anything longer.
if (JOKE.length === 0 || JOKE.length > 200) {
  throw new Error(`Joke is ${JOKE.length} characters; must be 1–200.`);
}

const scriptDir = dirname(fileURLToPath(import.meta.url));
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? join(scriptDir, "output");

mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), JOKE + "\n", "utf8");
