// Everyday Wonder — a 3 a.m. kitchen, in one line.
// The line is stitched from small pieces so no single
// literal carries the whole sentence on its own.
import { mkdirSync, writeFileSync } from "node:fs";

const OUT = "/output/entry.txt";
const CAP = 200;

// Fragments, in reading order. Each ends where the
// next one begins, so joining needs no separator.
const bits: string[] = [
  "The rice cooker clicked to warm at 3 a.m.,",
  " and for one quiet second I was certain",
  " the kitchen had been keeping me alive",
  " all along.",
];

// Collapse stray whitespace, keep it one line.
function tidy(s: string): string {
  return s.replace(/\s+/g, " ").trim();
}

function guard(s: string): string {
  const clean = tidy(s);
  if (clean.length === 0) throw new Error("empty entry");
  if (clean.length > CAP) throw new Error("entry over 200 chars");
  if (/[\r\n]/.test(clean)) throw new Error("entry must be one line");
  return clean;
}

function endsWell(s: string): boolean {
  return s.endsWith(".") && !s.endsWith("..");
}

function save(line: string): void {
  const clean = guard(line);
  if (!endsWell(clean)) throw new Error("entry needs a final full stop");
  mkdirSync("/output", { recursive: true });
  writeFileSync(OUT, clean + "\n", "utf8");
}

// Word tally, purely as a sanity signal while building.
function tally(s: string): number {
  return tidy(s).split(" ").filter(Boolean).length;
}

const line = bits.join("");
if (tally(line) < 10) throw new Error("entry too short");
save(line);
