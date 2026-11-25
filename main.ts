// Writes the Monday review to entry.txt for the make.fun run.
// Monday was an unwanted update; this script is a wanted one-liner.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const outputPath = process.env.MAKEFUN_OUTPUT_DIR || "/output";
const review =
  "Monday was a software update nobody asked for: it took all morning, changed nothing, and somehow made everything slower.";

mkdirSync(outputPath, { recursive: true });
writeFileSync(join(outputPath, "entry.txt"), review);
console.log("Monday review written to " + join(outputPath, "entry.txt"));
