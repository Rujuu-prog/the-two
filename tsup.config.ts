import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/index.ts", "bin/just-two.ts"],
  format: ["esm"],
  dts: { entry: ["src/index.ts"] },
  clean: true,
  splitting: true,
});
