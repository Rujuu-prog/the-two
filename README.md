# just-two

[日本語](README.ja.md)

![math: correct](https://img.shields.io/badge/math-correct-brightgreen)
![enterprise: ready](https://img.shields.io/badge/enterprise-ready-blue)
![quantum: safe](https://img.shields.io/badge/quantum-safe-blueviolet)
![dependencies: 0](https://img.shields.io/badge/dependencies-0-brightgreen)
![1 + 1: 2](https://img.shields.io/badge/1%20%2B%201-2-yellow)

> The most over-engineered way to calculate 1 + 1.

## Why?

Developers have been computing `1 + 1` by hand for decades — with no logging, no audit trail, and absolutely no enterprise support. This is unacceptable.

`just-two` solves a problem nobody asked for, with an infrastructure nobody needs.

Because `1 + 1` deserves better.

## Quick Start

```bash
npx just-two
```

That's it. You don't need to understand it. You just need to trust it.

## Demo

```
[just-two] Booting addition engine v2.0...
[just-two] Seeding entropy...
[just-two] Loading constants: π, e, φ, 2 (cached)
[just-two] Selecting algorithm: naive_addition (fallbacks: quantum, enterprise)
[just-two] Warming up CPU... done (0.42s)
[just-two] Running computation...

┌─ Computation Trace ────────────────────
│ input.a = 1
│ input.b = 1
│ operation = ADD
│ safety = ON
│ integrity = VERIFIED
└───────────────────────────────────────

✨ Result: 2
```

## Modes

| Flag | Mode | What happens |
|------|------|-------------|
| *(none)* | Default | Serious-looking computation with fake logs |
| `--verbose` | Verbose | Unnecessarily detailed 7-step process |
| `--quantum` | Quantum | Schrödinger mode. The answer exists in superposition until observed |
| `--enterprise` | Enterprise | Distributed cluster, 128 nodes, timeout, retry, fallback to local |
| `--silent` | Silent | Just prints `2`. For cowards |

```bash
npx just-two --quantum
```

```
   ~ Schrödinger Mode ~

[quantum] Initializing superposition...
[quantum] 1 + 1 exists in multiple states

State A: 2
State B: 10
State C: undefined

Observing result...
Collapsing wavefunction...

2
```

## API

For those who need `2` programmatically:

```js
import { justTwo, add } from "just-two";

justTwo(); // => 2 (the answer, always)
add(1, 1); // => 2 (in case you didn't believe the first one)
```

### `justTwo()`

Returns `2`. No arguments. No options. No room for doubt.

### `add(a, b)`

Computes the sum of two numbers. Technically supports inputs other than `1` and `1`, but why would you do that?

## Benchmarks

| Method | Time | Correct | Enterprise-Ready | Quantum-Safe |
|--------|------|---------|------------------|--------------|
| Mental math | ~0.1s | Usually | No | No |
| Calculator | ~1s | Yes | No | No |
| Python | ~0.3s | Yes | No | No |
| Excel | ~3s | Depends | Debatable | No |
| **just-two** | **~1s** | **Always** | **Yes** | **Yes** |
| **just-two --enterprise** | **~3s** | **Eventually** | **Absolutely** | **Yes** |

## FAQ

**Does it support subtraction?**
No. Scope creep is the enemy of great software.

**Is it production-ready?**
It's been production-ready since day one. The question is: are *you*?

**Why not just use a calculator?**
Calculators don't have quantum mode.

**Is this a joke?**
The only joke here is computing `1 + 1` without proper enterprise infrastructure.

## Features

- **Zero dependencies** — the only thing in this project that's not over-engineered
- **Enterprise-grade addition** — finally, `1 + 1` with the infrastructure it deserves
- **Quantum-safe computation** — because the future is uncertain, but `2` is not
- **TypeScript** — even jokes deserve type safety
- **100% test pass rate** — which, honestly, is suspicious

## License

MIT — use it however you want. We're not responsible for what happens when you add numbers without enterprise support.
