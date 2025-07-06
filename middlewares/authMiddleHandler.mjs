import path from 'path';
import { dirExistOrCreate } from '../utils/dirExistOrCreate.mjs';
import { createFile } from '../utils/createFile.mjs';
import { middleAuthJwtContent } from '../content/middleAuthJwtContent.mjs';
import { middleAuthbase64Content } from '../content/middleAuthBase64Content.mjs';
import consoleStyle from '../utils/consoleStyle.mjs'; 

export const authMiddleHandler = async (authType) => {

    const absRootPath = process.cwd();
    const absFolderMiddlPath = path.join(absRootPath, 'middlewares');

    await dirExistOrCreate(absFolderMiddlPath);

    console.log(`Reminder: ${consoleStyle(`npm install jsonwebtoken bcryptjs`, `green`, true)}`);

    if (authType === 'jwt') {
        await createFile('middlewares/isAuth.js', middleAuthJwtContent());
    } else if (authType === 'basic') {
        await createFile('middlewares/isAuth.js', middleAuthbase64Content());
    } else {
        console.log(`Unsupported authentication type: ${authType}. Currently, only 'jwt' and 'basic' are supported.`);
        process.exit(1);
    } 
}