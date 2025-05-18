import { Command } from 'commander';
import createMvcStructureSsr from '../structures/mvcStructureSsr.mjs';
import availabaleStructure from '../structures/availabaleStructure.mjs';

const createStructCmd =  new Command('struct')
  .description('create a structure type (Basic, MVC, Modular, etc.)')
  .argument('<structureType>', 'structure type to create')
  .option('--style <style>', 'Style to use (rest, graphql, ssr)', 'ssr')
  .action((structureType, options) => {
    const rootPath = process.cwd();

    if (!(availabaleStructure.includes(structureType))) {
      console.error(`Invalid structure type. Available types are: ${availabaleStructure.join(', ')}`);
      process.exit(1);
    }
    if (structureType === 'mvc' && (options.style == 'ssr' || options.style == '')) {
      console.log(`Creating ${structureType} structure...`);
      createMvcStructureSsr(rootPath)
    }
  });

  export default createStructCmd;