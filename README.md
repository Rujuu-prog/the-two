# just-two

> The most over-engineered way to calculate 1 + 1.

## Usage

```bash
npx just-two
```

### Output

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

```bash
npx just-two --verbose     # Unnecessarily detailed step-by-step
npx just-two --quantum     # Schrödinger mode 🐱
npx just-two --enterprise  # Distributed cluster with retries
npx just-two --silent      # Just 2
```

## API

```js
import { justTwo, add } from 'just-two'

justTwo() // => 2
add(1, 1) // => 2
```

## Features

- Enterprise-ready
- Quantum-safe
- Blazing fast (sometimes)
- Zero dependencies
