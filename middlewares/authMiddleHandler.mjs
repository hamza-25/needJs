import path from 'path';
import { dirExistOrCreate } from '../utils/dirExistOrCreate.mjs';
import { createFile } from '../utils/createFile.mjs';
import { middleAuthJwtContent } from '../content/middleAuthJwtContent.mjs';
import { middleAuthbase64Content } from '../content/middleAuthBase64Content.mjs';

export const authMiddleHandler = (authType) => {

    const absRootPath = process.cwd();
    const absFolderMiddlPath = path.join(absRootPath, 'middlewares');

    dirExistOrCreate(absFolderMiddlPath);

    if (authType === 'jwt') {
        createFile('middlewares/isAuth.js', middleAuthJwtContent());
    } else if (authType === 'basic') {
        createFile('middlewares/isAuth.js', middleAuthbase64Content());
    }
}