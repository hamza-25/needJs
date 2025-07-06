#!/usr/bin/env node


import { Command } from 'commander';
import commands from './commands/globalCmd.mjs';

const program = new Command();

program
  .name('needjs-cli')
  .description('A CLI application built with Commander.js')
  .version('1.1.9')
  .option('-v, --verbose', 'enable verbose output');

commands.forEach((cmd) => program.addCommand(cmd));
  
program.parse();