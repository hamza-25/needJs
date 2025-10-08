import { Command } from 'commander';
import consoleStyle from '../utils/consoleStyle.mjs';
import { dirExistOrCreate } from '../utils/dirExistOrCreate.mjs';
import path from 'path';
import { appendTextToFile, createFile } from '../utils/createFile.mjs';
import { authJwtEnvContent, authJwtRegisterContent, authJwtLoginContent, authJwtRoutesContent, authJwtEntryPointContent } from '../content/authJwtContent.mjs';
import { userModelContent} from '../content/userModelContent.mjs';

const setAuth =  new Command('auth')
  .description('set authentication and authorization configuration')
  .argument('<authType>', 'authentication type (e.g., jwt, oauth2)')
  .action(async (authType) => {
    if (authType !== 'jwt') {
      console.error(`Unsupported authentication type: ${authType}. Currently, only 'jwt' is supported.`);
      process.exit(1);
    }
    try {
        const rootDir = process.cwd();

        // add .env for authentication configuration
        const envDir = path.join(rootDir, '.env');
        appendTextToFile(envDir, authJwtEnvContent(), 'utf8');
        console.log(`Reminder: ${consoleStyle(`npm express jsonwebtoken bcryptjs cookie-parser dotenv`, `green`, true)}`);
        console.log(`Note Security: ${consoleStyle(`please change your 'JWT_SECRET' and 'JWT_EXPIRES_IN' on ${envDir}`, `red`, true)}`);

        // add authJwtRegisterContent to controllers/auth.js
        const authControllerPath = path.join(rootDir, 'controllers');
        await dirExistOrCreate(authControllerPath);
        // await createFile('auth.js');
        const authFilePath = path.join(authControllerPath, 'authController.js')
        await appendTextToFile(authFilePath, `${authJwtRegisterContent()} ${authJwtLoginContent()}`, 'utf8');
        console.log(`check alignement: ${consoleStyle(`change BLOCK 1, 2 and 3 to align your db setup, default Mongoose.\npath: ${authFilePath}`, 'yellow', true)}`);

        // add authJwtRegisterContent to routes/auth.js
        const authRoutesPath = path.join(rootDir, 'routes');
        await dirExistOrCreate(authRoutesPath);
        await appendTextToFile(path.join(authRoutesPath, 'authRoutes.js'), authJwtRoutesContent(), 'utf8');

        // add user model
        const modelsPath = path.join(rootDir, 'models');
        await dirExistOrCreate(modelsPath);
        await appendTextToFile(path.join(modelsPath, 'User.js'), userModelContent(), 'utf8');

        // add route to main index.js
        console.log(`please add this content to your main index.js file:\n${authJwtEntryPointContent()}`);

    } catch (error) {
        console.error(error);
    }
});

export default setAuth;