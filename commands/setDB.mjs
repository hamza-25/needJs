import { Command } from 'commander';
import consoleStyle from '../utils/consoleStyle.mjs';
import { dirExistOrCreate } from '../utils/dirExistOrCreate.mjs';
import path from 'path';
import { createFile } from '../utils/createFile.mjs';
import { mongoContent } from '../content/mongoContent.mjs';
import { sequelizeContent } from '../content/sequelizeContent.mjs';


const setDB =  new Command('db')
  .description('set database connection and configuration')
  .argument('<dbType>', 'database type (e.g., mongodb, mysql, postgres)')
  .argument('[dialect]', 'database name (optional)')
  .action(async (dbType, dialect) => {
    try {

        const configDir = path.join(process.cwd(), 'config');
        await dirExistOrCreate(configDir);

        // const dbTypes = [`mongodb`, `sequelize`];
        const dbTypes = {
            'sequelize': ['mysql', 'postgres', 'sqlite', 'mariadb', 'mssql', 'oracle'],
            'mongodb': ''
        };

        const drivers = {
            'mysql': 'mysql2',
            'postgres': 'pg, pg-hstore',
            'sqlite': 'sqlite3',
            'mariadb': 'mariadb',
            'mssql': 'mssql',
            'oracle': 'oracledb'};

        if (!(dbType in dbTypes)){
            console.log(consoleStyle(`Invalid database type: ${dbType}. Supported types are: ${Object.keys(dbTypes).join(', ')}`));
            process.exit(1);
        }

        if (dbType === 'sequelize' ) {
            if (!(dbTypes['sequelize'].includes(dialect))) {
                console.log(consoleStyle(`Invalid dialect: ${dialect}. Supported dialects for sequelize are: ${dbTypes['sequelize'].join(', ')}`));
                process.exit(1);
            }
            console.log(`Setting up sequelize connection...`);
            await createFile(`config/sequelize.js`, sequelizeContent(dialect));
            console.log(`✅ make sure you have ran the command: ${consoleStyle(`\'npm install sequelize\' and also driver ${drivers[dialect]}`, `green`, true)}`);

        } else if (dbType == 'mongodb') {
            console.log(`Setting up MongoDB connection...`);
            await createFile(`config/mongoDb.js`, mongoContent());
            console.log(`✅ make sure you have ran the command: ${consoleStyle(`\'npm install mongoose\'`, `green`, true)}`);
        }


    } catch (error) {
        console.error(error);
    }
});

export default setDB;