import { mkdir, access} from 'fs/promises';
import { constants} from 'fs';
import { createFile } from '../utils/createFile.mjs';


const createMvcStructure = async (rootPath, style='ssr') => {
    const structureFolders = {
        'basic': ['/controllers/', '/models/', '/routes/', '/services/', '/middlewares/', '/config/'],
        'ssr': ['/controllers/', '/models/', '/views/', '/routes/', '/services/', '/middlewares/', '/config/', '/utils/', '/tests/', '/public/', '/public/css/', '/public/js/', '/public/images/', '/public/fonts/', '/public/uploads/', '/public/videos/'],
        'rest': ['/resolvers/', '/models/', '/schemas/', '/services/', '/services/', '/middlewares/', '/config/', '/utils/'],
        'graphql': ['/controllers/', '/models/', '/routes/', '/services/', '/middlewares/', '/config/', '/utils/', '/tests/'],
    };

    for (const folder of structureFolders[style]) {
        const folderPath = `${rootPath}${folder}`;
        try {
            await access(folderPath, constants.F_OK);
            console.log(`${folder} Directory already exists`);
        } catch (error) {
            await mkdir(folderPath, { recursive: true });
        }
    }
    await createFile(`index.js`);
    await createFile(`.env`);
    await createFile(`.gitignore`, `node_modules\n.env\n.DS_Store\n.vscode\n.idea\n*.log\n*.tmp\n`);
    await createFile(`README.md`, `# Project Title\n\n## Description\n\n## Installation\n\n## Usage\n\n## License\n`);


}

export default createMvcStructure;

