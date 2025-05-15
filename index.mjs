#!/usr/bin/env node

import { Command } from 'commander';
import { fileURLToPath } from 'url';
import path from 'path';
import createMvcStructure from './structures/mvcStructure.mjs';
import availabaleStructure from './structures/availabaleStructure.mjs';

const __filename = fileURLToPath(import.meta.url);

// Get the directory name from that path
const __dirname = path.dirname(__filename);


const program = new Command();

program
  .name('needJs')
  .description('A CLI application built with Commander.js')
  .version('1.0.0')
  .option('-v, --verbose', 'enable verbose output');

program
  .command('struct <structureType>')
  .description('create a structure type (Basic, MVC, Modular, Service-Based,  etc.)')
  .action(async (structureType) => {
    // Check if the structureType is valid
    if( !(availabaleStructure.includes(structureType))){
      console.error(`Invalid structure type. Available types are: ${availabaleStructure.join(', ')}`);
      process.exit(1);
    };
    console.log(`Creating ${structureType} structure...`);
    createMvcStructure(__dirname);
  });
  
program.parse();
// Access the options
const options = program.opts();
