import { describe, expect, it } from "vitest";
import { add, justTwo } from "../src/index.js";

describe("justTwo", () => {
  it("returns 2", () => {
    expect(justTwo()).toBe(2);
  });
});

describe("add", () => {
  it("returns 2 for 1 + 1", () => {
    expect(add(1, 1)).toBe(2);
  });

  it("returns correct sum for other inputs", () => {
    expect(add(2, 3)).toBe(5);
    expect(add(0, 0)).toBe(0);
    expect(add(-1, 1)).toBe(0);
  });
});
