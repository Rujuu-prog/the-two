import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/index.ts", "bin/the-two.ts"],
  format: ["esm"],
  dts: { entry: ["src/index.ts"] },
  clean: true,
  splitting: true,
});
