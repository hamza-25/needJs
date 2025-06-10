import { Command } from 'commander';
import consoleStyle from '../utils/consoleStyle.mjs';
import { dirExistOrCreate } from '../utils/dirExistOrCreate.mjs';
import path from 'path';
import { createFile } from '../utils/createFile.mjs';

const setAuth =  new Command('auth')
  .description('set authentication and authorization configuration')
  .argument('<authType>', 'authentication type (e.g., jwt, oauth2)')
  .action(async (authType) => {
    try {

       console.log(authType);

    } catch (error) {
        console.error(error);
    }
});

export default setAuth;