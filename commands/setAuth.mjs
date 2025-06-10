import { Command } from 'commander';
import consoleStyle from '../utils/consoleStyle.mjs';
import { dirExistOrCreate } from '../utils/dirExistOrCreate.mjs';
import path from 'path';
import { appendTextToFile } from '../utils/createFile.mjs';
import { authJwtEnvContent } from '../content/authJwtContent.mjs';


const setAuth =  new Command('auth')
  .description('set authentication and authorization configuration')
  .argument('<authType>', 'authentication type (e.g., jwt, oauth2)')
  .action(async (authType) => {
    try {
        const rootDir = process.cwd();
        const envDir = path.join(rootDir, '.env');
        // add .env for authentication configuration
        appendTextToFile(envDir, authJwtEnvContent(), 'utf8');
        console.log(`Note: ${consoleStyle(`please change your 'JWT_SECRET' and 'JWT_EXPIRES_IN' on ${envDir}`, `red`, true)}`);

    } catch (error) {
        console.error(error);
    }
});

export default setAuth;