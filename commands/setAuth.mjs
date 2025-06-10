import { Command } from 'commander';
import consoleStyle from '../utils/consoleStyle.mjs';
import { dirExistOrCreate } from '../utils/dirExistOrCreate.mjs';
import path from 'path';
import { appendTextToFile, createFile } from '../utils/createFile.mjs';
import { authJwtEnvContent, authJwtRegisterContent, authJwtLoginContent } from '../content/authJwtContent.mjs';


const setAuth =  new Command('auth')
  .description('set authentication and authorization configuration')
  .argument('<authType>', 'authentication type (e.g., jwt, oauth2)')
  .action(async (authType) => {
    try {
        const rootDir = process.cwd();

        // add .env for authentication configuration
        const envDir = path.join(rootDir, '.env');
        appendTextToFile(envDir, authJwtEnvContent(), 'utf8');
        console.log(`Note Packages: make sure you have already installed these packages ${consoleStyle(`express jsonwebtoken bcryptjs cookie-parser dotenv`, `green`, true)}`);
        console.log(`Note Security: ${consoleStyle(`please change your 'JWT_SECRET' and 'JWT_EXPIRES_IN' on ${envDir}`, `red`, true)}`);

        // add authJwtRegisterContent to controllers/auth.js
        const authControllerPath = path.join(rootDir, 'controllers');
        await dirExistOrCreate(authControllerPath);
        // await createFile('auth.js');
        const authFilePath = path.join(authControllerPath, 'auth.js')
        await appendTextToFile(authFilePath, `${authJwtRegisterContent()} ${authJwtLoginContent()}`, 'utf8');
        console.log(`check alignement: ${consoleStyle(`change BLOCK 1, 2 and 3 to align your db setup, default Mongoose.\npath: ${authFilePath}`, 'yellow', true)}`);
    } catch (error) {
        console.error(error);
    }
});

export default setAuth;