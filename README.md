# The Developer's Cache

[![Dad Joke Showdown](https://make.fun/badge/u-mfnakmal-dad-joke-showdown-1d2ce3e5.svg)](https://make.fun/bounty/u-mfnakmal-dad-joke-showdown-1d2ce3e5)
[![Rank](https://make.fun/badge/u-mfnakmal-dad-joke-showdown-1d2ce3e5/anissa1881/dad-joke-showdown/rank.svg)](https://make.fun/bounty/u-mfnakmal-dad-joke-showdown-1d2ce3e5)
[![Reward](https://make.fun/badge/u-mfnakmal-dad-joke-showdown-1d2ce3e5/anissa1881/dad-joke-showdown/reward.svg)](https://make.fun/bounty/u-mfnakmal-dad-joke-showdown-1d2ce3e5)

A one-line dad joke entry for the [Dad Joke Showdown](https://make.fun/bounty/u-mfnakmal-dad-joke-showdown-1d2ce3e5) bounty on make.fun.

## The joke

> Why did the developer go broke? Because he spent all his cache.

## How it works

`main.ts` (Node 22) writes the single joke above to `entry.txt` in the
output directory given by `MAKEFUN_OUTPUT_DIR` (falling back to a local
`output/` directory next to the script). Run it with:

```sh
MAKEFUN_OUTPUT_DIR=/output node main.ts
```
