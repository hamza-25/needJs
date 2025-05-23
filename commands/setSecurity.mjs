import { Command } from 'commander';
import consoleStyle from '../utils/consoleStyle.mjs';
import fs from 'fs';
import path from 'path';
import securityContent from '../content/securityContent.mjs';

const setSecurity =  new Command('security')
  .description('set security helmet, cors, cors-parser, hpp, xss-clean, etc.')
  .argument('[entryPoint]', 'entry point to set security default is index.js')
  .action((entryPoint) => {
    try {
      const rootPath = process.cwd();
      const entryFile = entryPoint || 'index.js';


      let msg = consoleStyle('\'npm i helmet cors cors-parser hpp xss-clean\'', 'green', true);

      let content = fs.readFileSync(path.join(rootPath, entryFile), 'utf-8');
      const match = content.match(/^\s*const\s+app\s*=\s*express\s*\(\s*\)\s*;/m);

      if (!match){
        msg = consoleStyle(`✖ Could not find "const app = express();" in index.js`, 'red', true);
        console.error(msg);
        process.exit(1);
      }

      console.log(`Setting security...`);
      console.log(`Note: make sure you ran this command. ${msg}`);

      const staticContent = securityContent();

      const originalLine = match[0];

      const before = staticContent[0];
      const after = staticContent[1];

      // Replace only the matched line with before + line + after
      const updated = content.replace(originalLine, `${before}${originalLine}${after}`);

      // Write back to index.js
      fs.writeFileSync(entryFile, updated, 'utf8');

      msg = consoleStyle(`✔ Successfully injected content around express() declaration.`, 'green', true);
      console.log(msg);
    } catch (error) {
      const msg = consoleStyle(error, 'red', true);
      // const msg = consoleStyle(`✖ Failed to set security entry point not found.`, 'red', true);
      console.error(msg);
    }
  });

export default setSecurity;