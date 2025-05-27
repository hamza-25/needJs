import { Command } from 'commander';
import consoleStyle from '../utils/consoleStyle.mjs';
import fs from 'fs';
import path from 'path';
import securityContent from '../content/securityContent.mjs';

const setDB =  new Command('db')
  .description('set database connection and configuration')
  .argument('<dbType>', 'database type (e.g., mongodb, mysql, postgres)')
  .action((dbType) => {
    try {

    } catch (error) {
        
    }
});

export default setDB;