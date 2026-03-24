import { describe, expect, it } from "vitest";
import { runCli } from "../src/cli.js";

/** stdoutをキャプチャしてrunCliを実行 */
async function capture(options: Parameters<typeof runCli>[0]): Promise<string> {
  const chunks: string[] = [];
  const write = (s: string) => {
    chunks.push(s);
  };
  await runCli({ ...options, write, noDelay: true });
  return chunks.join("");
}

describe("default mode", () => {
  it("contains ASCII art", async () => {
    const output = await capture({});
    expect(output).toContain("just-two");
  });

  it("contains ✨ Result with ASCII art 2", async () => {
    const output = await capture({});
    expect(output).toContain("✨ Result:");
    expect(output).toContain("222222222222222");
  });

  it("contains computation trace", async () => {
    const output = await capture({});
    expect(output).toContain("input.a = 1");
    expect(output).toContain("input.b = 1");
    expect(output).toContain("operation = ADD");
  });
});

describe("--verbose mode", () => {
  it("contains step logs", async () => {
    const output = await capture({ verbose: true });
    expect(output).toContain("[step 1/7]");
    expect(output).toContain("[step 7/7]");
  });

  it("contains 🍪 Result with ASCII art 2", async () => {
    const output = await capture({ verbose: true });
    expect(output).toContain("🍪 Result:");
    expect(output).toContain("222222222222222");
  });

  it("contains a tsukkomi element", async () => {
    const output = await capture({ verbose: true });
    expect(output).toContain("why?");
  });
});

describe("--quantum mode", () => {
  it("contains multiple states", async () => {
    const output = await capture({ quantum: true });
    expect(output).toContain("State A:");
    expect(output).toContain("State B:");
    expect(output).toContain("State C:");
  });

  it("ends with 2", async () => {
    const output = await capture({ quantum: true });
    const lines = output.trimEnd().split("\n");
    expect(lines[lines.length - 1].trim()).toBe("2");
  });

  it("contains wavefunction collapse", async () => {
    const output = await capture({ quantum: true });
    expect(output).toContain("Collapsing wavefunction");
  });
});

describe("--enterprise mode", () => {
  it("contains retry logs", async () => {
    const output = await capture({ enterprise: true });
    expect(output).toContain("Retrying");
  });

  it("contains distributed system logs", async () => {
    const output = await capture({ enterprise: true });
    expect(output).toContain("[enterprise]");
  });

  it("falls back to local and outputs 2", async () => {
    const output = await capture({ enterprise: true });
    expect(output).toContain("Fallback to local computation");
    const lines = output.trimEnd().split("\n");
    expect(lines[lines.length - 1].trim()).toBe("2");
  });
});

describe("--silent mode", () => {
  it("outputs only 2", async () => {
    const output = await capture({ silent: true });
    expect(output.trim()).toBe("2");
  });
});
