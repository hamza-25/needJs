import { Command } from 'commander';
import path from 'path';

const setMiddleware =  new Command('middleware')
  .description('set middleware configuration')
  .argument('<middleType>', 'authentication type (e.g., jwt, oauth2)')
  .action(async (middleType) => {
    try {
        const absRootPath = process.cwd();
        const absFolderMiddlPath = path.join(absRootPath, 'middlewares');

        

    } catch (error) {
      console.error('Error setting middleware:', error);
    }
  });

export default setMiddleware;