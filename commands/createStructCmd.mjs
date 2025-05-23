import { Command } from 'commander';
import createMvcStructure from '../structures/mvcStructure.mjs';
import createMvpStructure from '../structures/mvpStructure.mjs';
import availabaleStructure from '../structures/availabaleStructure.mjs';
import consoleStyle from '../utils/consoleStyle.mjs';

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

    console.log(`Creating ${structureType} structure...`);
    const msg = consoleStyle(`'npm i express dotenv'`,'green', true);
    console.log(`Note: make sure you ran this command. ${mdg}`);

    if(structureType === 'mvc'){
      createMvcStructure(rootPath, options);
    }else if (structureType === 'mvp'){
      createMvpStructure(rootPath, options);
    } 
  
  });

  export default createStructCmd;