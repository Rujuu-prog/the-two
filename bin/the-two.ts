#!/usr/bin/env node
import { runCli } from "../src/cli.js";

const args = process.argv.slice(2);

runCli({
  verbose: args.includes("--verbose"),
  quantum: args.includes("--quantum"),
  enterprise: args.includes("--enterprise"),
  silent: args.includes("--silent"),
}).catch(() => process.exit(1));
