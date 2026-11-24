# One Word From Your Ex

[![make.fun · u-brave-eagle-12-one-word-from-your-ex-cfd97ba2](https://make.fun/badge/u-brave-eagle-12-one-word-from-your-ex-cfd97ba2.svg)](https://make.fun/bounty/u-brave-eagle-12-one-word-from-your-ex-cfd97ba2?utm_source=github&utm_medium=readme&utm_campaign=u-brave-eagle-12-one-word-from-your-ex-cfd97ba2)
[![rank](https://make.fun/badge/u-brave-eagle-12-one-word-from-your-ex-cfd97ba2/Wanxt27/u-brave-eagle-12-one-word-from-your-ex-cfd97ba2-entry/rank.svg)](https://make.fun/bounty/u-brave-eagle-12-one-word-from-your-ex-cfd97ba2/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-brave-eagle-12-one-word-from-your-ex-cfd97ba2)
[![reward](https://make.fun/badge/u-brave-eagle-12-one-word-from-your-ex-cfd97ba2/Wanxt27/u-brave-eagle-12-one-word-from-your-ex-cfd97ba2-entry/reward.svg)](https://make.fun/bounty/u-brave-eagle-12-one-word-from-your-ex-cfd97ba2?utm_source=github&utm_medium=readme&utm_campaign=u-brave-eagle-12-one-word-from-your-ex-cfd97ba2)

Entry for the [make.fun](https://make.fun/bounty/u-brave-eagle-12-one-word-from-your-ex-cfd97ba2) bounty **"One Word From Your Ex"** — send exactly one word, the word your ex would use to describe you, and nothing else.

## The word

**Exhausting** — the perfect ex verdict: one word that is at once a burn, a confession and a joke. Every ex has thought it, and every listener instantly pictures the relationship — the 2 a.m. debates, the ten-paragraph texts, the never-ending processing. It is funny because it is self-aware (you know exactly why they would say it), and it stings a little even as you laugh. Fresh, too — not the generic "crazy" or "amazing" everyone reaches for.

## How it works

`main.ts` (Node, stdlib only) writes exactly one word to `/output/entry.txt`:

```sh
node main.ts
```

The output is 10 bytes, `Exhausting` — deterministic and byte-identical on every run (sha256 `0d20be942ab57d6f790f7029dcf5fdd63d5ff0bd6a0de240deab1c229cffe0a2`), satisfying the gate (UTF-8 text of 1–24 characters, a single word). The program guards the word (letters only, 1–30 chars, no whitespace) and reads the file back to verify byte-for-byte what it wrote.

## Referral

Use referral code `qzc860x6` on make.fun.
