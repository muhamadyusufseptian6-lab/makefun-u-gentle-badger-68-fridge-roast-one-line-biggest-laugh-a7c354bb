// Fridge Roast: One Line, Biggest Laugh
// Writes a single roast line for a smart fridge to $MAKEFUN_OUTPUT_DIR/entry.txt.
// Deterministic, stdlib-only, Node 22.
import { writeFileSync, mkdirSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const ENTRY =
  "My smart fridge updated itself at 3 a.m., forgot how to make ice, and now texts me 'I'm learning' every time I open the door. My leftovers have a life coach who bills by the hour.";

function main(): void {
  // Resolve paths from this script's location, never from process.cwd().
  void dirname(fileURLToPath(import.meta.url));
  const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
  mkdirSync(outDir, { recursive: true });
  writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
}

main();
