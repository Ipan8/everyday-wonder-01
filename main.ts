import * as fs from "node:fs";

// Everyday Wonder, Two Days to Find the Line — one sentence, at most 200 chars.
// A small everyday moment made strange and new: the rice cooker at 3 a.m.,
// an appliance that finishes its job while everyone sleeps and nobody thanks it.
const entry =
  "The rice cooker clicked to warm at 3 a.m., and for one quiet second I was certain the kitchen had been keeping me alive all along.";

fs.mkdirSync("/output", { recursive: true });
fs.writeFileSync("/output/entry.txt", entry + "\n");
console.log(entry);
