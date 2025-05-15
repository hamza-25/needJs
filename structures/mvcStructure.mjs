import { mkdir, access} from 'fs/promises';
import { constants} from 'fs';

const createMvcStructure = async (rootPath) => {
    const structureFolders = ['/controllers/', '/models/', '/views/', '/routes/', '/services/', '/middlewares/', '/config/', '/utils/', '/tests/', '/public/', '/public/css/', '/public/js/', '/public/images/', '/public/fonts/', '/public/uploads/', '/public/videos/'];

    for (const folder of structureFolders){
        const folderPath = `${rootPath}${folder}`;
        try {
            await access(folderPath, constants.F_OK);
            console.log(`${folder} Directory already exists`);
        } catch (error) {
            await mkdir(folderPath, { recursive: true });
        }
    }

}

export default createMvcStructure;

