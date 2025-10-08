import { writeFile, access } from 'fs/promises';
import { constants } from 'fs';
import fs from 'fs/promises';


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


export const appendTextToFile = async (filePath, content='', options='utf8') => {
    try{
       await fs.appendFile(filePath, content, options); 
    } catch (error) {
        console.error(`Error appending to file ${filePath}:`, error);
    }
}