#!/usr/bin/env node

import "tslib"
import figlet from "figlet";
import { Command } from "commander";
import { createCommand, publishCommand } from "./commands";

const program = new Command();
program.description("appinton-cli is a cli tool for appinton");
program.version("0.1.0");

program.option("-v, --verbose", "verbose logging");

program.addCommand(createCommand);
program.addCommand(publishCommand);

async function main() {
  console.log(figlet.textSync("appinton-cli "));
  await program.parseAsync();
}

main();
