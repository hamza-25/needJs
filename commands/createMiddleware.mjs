import { Command } from 'commander';
import { authMiddleHandler } from '../middlewares/authMiddleHandler.mjs';
import { roleMiddlewareHandler } from '../middlewares/roleMiddlewareHandler.mjs';

const setMiddleware =  new Command('middleware')
  .description('set middleware configuration')
  .argument('<middleType>', 'middleware type (auth, role, etc.)')
  .argument('<authType>', 'authentication type (e.g., jwt, base64, basic)')
  .action(async (middleType, options) => {
    try {
        const allowedAuthTypes = ['jwt', 'basic'];

        if (middleType === 'auth' && allowedAuthTypes.includes(options)) {
         authMiddleHandler(options);
        }
        else if (middleType === 'role' && options.includes(':')) {
          roleMiddlewareHandler(options);
        } else {
          console.log(`Unsupported middleware args`);
          process.exit(1);
        }
    } catch (error) {
      console.error('Error setting middleware:', error);
    }
  });

export default setMiddleware;