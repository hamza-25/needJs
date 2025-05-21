import { mkdir, access} from 'fs/promises';
import { constants} from 'fs';
import { createFile } from '../utils/createFile.mjs';
import { indexContent } from '../content/indexContent.mjs';
import { envContent } from '../content/envContent.mjs';
import { gitIgnoreContent } from '../content/gitIgnoreContent.mjs';


const createMvcStructure = async (rootPath, options={style: 'ssr'}) => {
    const structureFolders = {
        'ssr': ['/controllers/', '/models/', '/views/', '/routes/', '/services/', '/middlewares/', '/config/', '/utils/', '/tests/', '/public/', '/public/css/', '/public/js/', '/public/images/', '/public/fonts/', '/public/uploads/', '/public/videos/'],
        'graphql': ['/resolvers/', '/models/', '/schemas/', '/services/', '/middlewares/', '/config/', '/utils/', '/tests/'],
        'rest': ['/controllers/', '/models/', '/routes/', '/services/', '/middlewares/', '/config/', '/utils/', '/tests/'],
    };

    if(!(options.style in structureFolders)){
        console.error(`Invalid style type. Available types are: ${Object.keys(structureFolders).join(', ')}`);
        process.exit(1);
    }
    
    for (const folder of structureFolders[options.style]) {
        const folderPath = `${rootPath}${folder}`;
        try {
            await access(folderPath, constants.F_OK);
            console.log(`${folder} Directory already exists`);
        } catch (error) {
            await mkdir(folderPath, { recursive: true });
        }
    }
    await createFile(`.env`, envContent());
    await createFile(`index.js`, indexContent());
    await createFile(`.gitignore`, gitIgnoreContent());
    await createFile(`README.md`, `# Project Title\n\n## Description\n\n## Installation\n\n## Usage\n\n## License\n`);


}

export default createMvcStructure;

