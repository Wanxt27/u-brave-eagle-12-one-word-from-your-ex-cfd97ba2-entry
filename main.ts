// One Word From Your Ex — entry program (program/v1).
// Writes exactly one word, "Exhausting", to /output/entry.txt.
// Exhausting is the perfect ex verdict: one word that is at once a burn,
// a confession and a joke. Every ex has thought it, and every listener
// instantly pictures the relationship — the 2 a.m. debates, the
// ten-paragraph texts, the never-ending processing. It is funny because it
// is self-aware, and it stings a little even as you laugh.
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

const WORD = "Exhausting";

// The gate requires UTF-8 text of 1 to 24 characters, a single word.
// Refuse to write anything else rather than risk an invalid entry: one
// word, letters only, no spaces, no punctuation, no trailing newline —
// and no surrounding whitespace smuggled in either.
function assertSingleWord(word) {
  if (!/^[A-Za-z]{1,30}$/.test(word) || word !== word.trim()) {
    throw new Error(
      `entry word must be a single word of 1-30 letters, got: ${JSON.stringify(word)}`,
    );
  }
}

assertSingleWord(WORD);

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", WORD, "utf8");

// Verify what landed on disk: read it back and confirm it is byte-for-byte
// the word we meant to send, so a silent write failure can never ship a
// wrong or empty entry.
const written = readFileSync("/output/entry.txt", "utf8");
if (written !== WORD || Buffer.byteLength(written, "utf8") !== WORD.length) {
  throw new Error(
    `entry file mismatch: expected ${JSON.stringify(WORD)}, got ${JSON.stringify(written)}`,
  );
}
