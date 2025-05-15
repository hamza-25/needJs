#!/usr/bin/env node

import { Command } from 'commander';

const program = new Command();

program
  .name('needjs')
  .description('A CLI application built with Commander.js')
  .version('1.0.0')
  .option('-d, --debug', 'output extra debugging information')
  .option('-f, --file <path>', 'specify the file to process')
  .option('-t, --timeout <seconds>', 'specify the timeout in seconds', '60');
// Access the options
const options = program.opts();

// build command line arguments
program
  .command('structure')
  .description('Generate a project structure, including a README file')
  .option('-t, --type <type>', 'specify the type of project (e.g., mvc, api)')
  .action(() => {
    console.log('Generating project structure...');
    // console.log(`Project type: ${options.type}`);
  });
