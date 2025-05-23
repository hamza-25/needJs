import { Command } from 'commander';
import consoleStyle from '../utils/consoleStyle.mjs';

const setSecurity =  new Command('security')
  .description('set security helmet, cors, cors-parser, hpp, xss-clean, etc.')
  .argument('[entryPoint]', 'entry point to set security default is index.js')
  .action((entryPoint) => {
    const rootPath = process.cwd();
    const entryFile = entryPoint || 'index.js';
    console.log(entryFile);
    console.log(`Setting security...`);
    const msg = consoleStyle('\'npm i helmet cors cors-parser hpp xss-clean\'', 'green', true);
    console.log(`Note: make sure you ran this command. ${msg}`);
  });

export default setSecurity;