import { Command } from 'commander';
import consoleStyle from '../utils/consoleStyle.mjs';
import { dirExistOrCreate } from '../utils/dirExistOrCreate.mjs';
import path from 'path';


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
            'sequelize': ['mysql', 'pg', 'sqlite', 'mariadb'],
            'mongodb': []
        };

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

        } else if (dbType === 'mongodb') {
            console.log(`Setting up MongoDB connection...`);
        }


    } catch (error) {
        console.error(error);
    }
});

export default setDB;