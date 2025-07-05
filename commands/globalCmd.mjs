import createStructCmd from "./createStructCmd.mjs";
import setSecurity from "./setSecurity.mjs";
import setDB from './setDB.mjs';
import setAuth from './setAuth.mjs';
import setMiddleware from './createMiddleware.mjs';

export default  [
    createStructCmd,
    setSecurity,
    setDB,
    setAuth,
    setMiddleware
]