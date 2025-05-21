export const indexContent = () => {
    return `
const express = require('express');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 8000;

// == Config ==
    // Example: app.set('view engine', 'ejs'); 
// == End Config ==


// == Security ==
   
// == End Security ==


// == Parsers ==
app.use(express.json());
app.use(express.urlencoded({ extended: true })); 
// == End Parsers ==

// == Routes ==
   // app.use('/', (req, res) => {
   //    res.send('Hello World');});
// End == Routes ==




app.listen(PORT, () => {
  console.log(\`Server is running on http://localhost:${PORT}\`);})
`;
}