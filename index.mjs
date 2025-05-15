#!/usr/bin/env node

import { Command } from 'commander';

const program = new Command();

program
  .name('needJs')
  .description('A CLI application built with Commander.js')
  .version('1.0.0')
  .option('-v, --verbose', 'enable verbose output');

program
  .command('struct <structureType>')
  .description('create a structure type (MVC, MVVM,etc.)')
  .action((structureType) => {
    console.log(structureType);
  });
  
program.parse();
// Access the options
const options = program.opts();
