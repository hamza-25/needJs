import { createFile } from '../utils/createFile.mjs';
import { dirExistOrCreate } from '../utils/dirExistOrCreate.mjs';
import path from 'path';
import { roleMiddlewareContent} from '../content/roleMiddlewareContent.mjs';

export const roleMiddlewareHandler = async (roleValue) => {
    try {
        const absRootPath = process.cwd();

        const absMiddlePath = path.join(absRootPath, 'middlewares');

        const [columnName, expectedValue] = roleValue.split(':');

        await dirExistOrCreate(absMiddlePath);

        await createFile(`middlewares/${columnName}.js`, roleMiddlewareContent(columnName, expectedValue));
    } catch (error) {
        console.error('Error in roleMiddlewareHandler:', error);
        process.exit(1);
    }
}