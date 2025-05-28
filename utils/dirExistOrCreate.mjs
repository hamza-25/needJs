import { mkdir, access } from 'fs/promises';
import { constants } from 'fs';

export const dirExistOrCreate = async (dirPath) => {
    try {
        await access(dirPath, constants.F_OK);
    } catch (error) {
        await mkdir(dirPath, { recursive: true });
        console.log(`Directory created: ${dirPath}`);
    }
}