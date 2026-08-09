#!/usr/bin/env node

import path from "node:path";
import { checkIntake, generateIntake, IntakeError } from "./lib/bake-intake.mjs";

function usage() {
  console.error("Usage: pnpm bake:intake <generate|check> <bake-directory>");
}

async function main() {
  const [command, bakeDirectory, ...extra] = process.argv.slice(2);
  if (!command || !bakeDirectory || extra.length > 0 || !["generate", "check"].includes(command)) {
    usage();
    process.exitCode = 2;
    return;
  }

  const options = { projectRoot: process.cwd(), bakeDirectory };
  if (command === "generate") {
    const result = await generateIntake(options);
    console.log(
      result.changed
        ? `Generated ${path.relative(process.cwd(), result.outputPath)}`
        : `Current ${path.relative(process.cwd(), result.outputPath)}`,
    );
    return;
  }

  const result = await checkIntake(options);
  if (!result.fresh) {
    console.error(
      `Stale ${path.relative(process.cwd(), result.outputPath)}; run: pnpm bake:intake generate ${bakeDirectory}`,
    );
    process.exitCode = 1;
    return;
  }
  console.log(`Current ${path.relative(process.cwd(), result.outputPath)}`);
}

main().catch((error) => {
  if (error instanceof IntakeError) {
    console.error(`Error: ${error.message}`);
    process.exitCode = 1;
    return;
  }
  throw error;
});
