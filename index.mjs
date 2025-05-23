#!/usr/bin/env node


import { Command } from 'commander';
import commands from './commands/globalCmd.mjs';

const program = new Command();

program
  .name('needJs')
  .description('A CLI application built with Commander.js')
  .version('1.0.0')
  .option('-v, --verbose', 'enable verbose output');

commands.forEach((cmd) => program.addCommand(cmd));
  
program.parse();