import { writeFile, access } from 'fs/promises';
import { constants } from 'fs';

export const createFile = async (fileName, content='') => {
    const filePath = `${process.cwd()}/${fileName}`;
    try {
        await access(filePath, constants.F_OK);
        console.log(`${filePath} File already exists`);
    } catch (error) {
        await writeFile(filePath, content, 'utf8');
        console.log(`File created: ${filePath}`);
    }
}