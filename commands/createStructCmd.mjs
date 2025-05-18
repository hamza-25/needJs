import { Command } from 'commander';
import createMvcStructure from '../structures/mvcStructure.mjs';
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

    console.log(`Creating ${structureType} structure style ${options.style} in ${rootPath}`);

    if(structureType === 'mvc'){
      if( options.style == 'ssr' || options.style == ''){
        createMvcStructure(rootPath);
      }else if (options.style == 'rest'){
        createMvcStructure(rootPath, options.style);
      }
      else if (options.style == 'graphql'){
        createMvcStructure(rootPath, options.style);
      }
    }else if (structureType === 'mvp'){
      if( options.style == 'ssr' || options.style == ''){
        console.log('Creating mvc structure with ssr style');
      }else if (options.style == 'rest'){
        console.log('Creating mvc structure with rest style');
      }
      else if (options.style == 'graphql'){
        console.log('Creating mvc structure with graphql style');
      }
    } 
  
  });

  export default createStructCmd;