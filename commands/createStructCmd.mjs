import { Command } from 'commander';
import createMvcStructure from '../structures/mvcStructure.mjs';
import availabaleStructure from '../structures/availabaleStructure.mjs';

const createStructCmd =  new Command('struct')
  .description('create a structure type (Basic, MVC, Modular, etc.)')
  .argument('<structureType>', 'structure type to create')
  .action((structureType) => {
    const rootPath = process.cwd();

    if (!(availabaleStructure.includes(structureType))) {
      console.error(`Invalid structure type. Available types are: ${availabaleStructure.join(', ')}`);
      process.exit(1);
    }
    console.log(`Creating ${structureType} structure...`);
    createMvcStructure(rootPath)
  });

  export default createStructCmd;