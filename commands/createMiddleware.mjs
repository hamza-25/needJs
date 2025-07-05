import { Command } from 'commander';
import { authMiddleHandler } from '../middlewares/authMiddleHandler.mjs';

const setMiddleware =  new Command('middleware')
  .description('set middleware configuration')
  .argument('<middleType>', 'middleware type (auth, role, etc.)')
  .argument('<authType>', 'authentication type (e.g., jwt, base64, basic)')
  .action(async (middleType, authType) => {
    try {
        const allowedAuthTypes = ['jwt', 'base64', 'basic'];

        if (middleType === 'auth' && allowedAuthTypes.includes(authType)) {
         authMiddleHandler(authType);
        }
        else if (middleType === 'role') {
            console.log('maybe role or other middleware');
        }
    } catch (error) {
      console.error('Error setting middleware:', error);
    }
  });

export default setMiddleware;