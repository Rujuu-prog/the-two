import {
  ALGORITHM_SELECTION,
  DEFAULT_ART,
  ENTERPRISE_ART,
  LOADING_CONSTANTS,
  pick,
  RESULT_ART,
  VERBOSE_ART,
  WARMUP_MESSAGES,
} from "./content.js";

export interface CliOptions {
  verbose?: boolean;
  quantum?: boolean;
  enterprise?: boolean;
  silent?: boolean;
  /** stdout出力先（テスト用） */
  write?: (s: string) => void;
  /** 遅延スキップ（テスト用） */
  noDelay?: boolean;
}

function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function randomDelay(): number {
  return 500 + Math.random() * 400;
}

export async function runCli(options: CliOptions = {}): Promise<void> {
  const print = options.write ?? ((s: string) => process.stdout.write(s));
  const delay = options.noDelay
    ? async () => {}
    : (ms?: number) => sleep(ms ?? randomDelay());

  if (options.silent) {
    print("2\n");
    return;
  }

  if (options.verbose) {
    await runVerbose(print, delay);
    return;
  }

  if (options.quantum) {
    await runQuantum(print, delay);
    return;
  }

  if (options.enterprise) {
    await runEnterprise(print, delay);
    return;
  }

  await runDefault(print, delay);
}

async function runDefault(
  print: (s: string) => void,
  delay: (ms?: number) => Promise<void>,
): Promise<void> {
  print(DEFAULT_ART);
  print("\n");
  print("[the-two] Booting addition engine v2.0...\n");
  await delay();
  print("[the-two] Seeding entropy...\n");
  print(`[the-two] ${pick(LOADING_CONSTANTS)}\n`);
  print(`[the-two] ${pick(ALGORITHM_SELECTION)}\n`);
  print(`[the-two] ${pick(WARMUP_MESSAGES)}\n`);
  await delay();
  print("[the-two] Running computation...\n");
  print("\n");
  print("┌─ Computation Trace ────────────────────\n");
  print("│ input.a = 1\n");
  print("│ input.b = 1\n");
  print("│ operation = ADD\n");
  print("│ safety = ON\n");
  print("│ integrity = VERIFIED\n");
  print("└───────────────────────────────────────\n");
  print("\n");
  print("✨ Result: \n");
  print(RESULT_ART);
}

async function runVerbose(
  print: (s: string) => void,
  delay: (ms?: number) => Promise<void>,
): Promise<void> {
  print("[the-two] Verbose mode enabled\n");
  print(VERBOSE_ART);
  print("\n");

  const steps = [
    "[step 1/7] Parsing input...",
    "[step 2/7] Validating operands...",
    "[step 3/7] Allocating memory (16MB)... why?",
    "[step 4/7] Running addition algorithm...",
    "[step 5/7] Verifying result integrity...",
    "[step 6/7] Optimizing output (no-op)...",
    "[step 7/7] Cleaning up...",
  ];

  for (const step of steps) {
    print(`${step}\n`);
    await delay(80);
  }

  print("\nDetailed Result Report:\n");
  print("- a: 1\n");
  print("- b: 1\n");
  print("- operation: ADD\n");
  print("- confidence: 100%\n");
  print("\n🍪 Result: \n");
  print(RESULT_ART);
}

async function runQuantum(
  print: (s: string) => void,
  delay: (ms?: number) => Promise<void>,
): Promise<void> {
  print("   ~ Schrödinger Mode ~\n");
  print("\n");
  print("[quantum] Initializing superposition...\n");
  await delay();
  print("[quantum] 1 + 1 exists in multiple states\n");
  print("\n");
  print("State A: 2\n");
  print("State B: 10\n");
  print("State C: undefined\n");
  print("\n");
  print("Observing result...\n");
  await delay();
  print("\n");
  print("Collapsing wavefunction...\n");
  await delay();
  print("\n");
  print("2\n");
}

async function runEnterprise(
  print: (s: string) => void,
  delay: (ms?: number) => Promise<void>,
): Promise<void> {
  print(ENTERPRISE_ART);
  print("\n");
  print("[enterprise] Booting distributed addition cluster...\n");
  await delay();
  print("[enterprise] Region: ap-northeast-1\n");
  print("[enterprise] Scaling nodes... (x128)\n");
  await delay();
  print("[enterprise] Connecting to addition-service...\n");
  await delay();
  print("[enterprise] ERROR: timeout\n");

  for (let i = 1; i <= 3; i++) {
    print(`Retrying... (${i}/3)\n`);
    await delay(200);
  }

  print("\n");
  print("[enterprise] Fallback to local computation\n");
  print("\n");
  print("2\n");
}
