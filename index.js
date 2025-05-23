// basic setup for a simple express server
import express from 'express';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';


// Import required packages
const helmet = require('helmet');
const xss = require('xss-clean');
const hpp = require('hpp');
const cookieParser = require('cookie-parser');
const cors = require('cors');

const app = express();

// Security headers
app.use(helmet());
    
// Body parsers
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
    
// Cookie parser
app.use(cookieParser());
    
// XSS Protection
app.use(xss());
    
// HTTP Parameter Pollution protection
app.use(hpp());
    
// CORS (if needed)
app.use(cors({
  origin: process.env.DOMAIN,
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  exposedHeaders: ['Content-Type', 'Authorization'],
  credentials: true
}));


dotenv.config();
const PORT = process.env.PORT || 8000;

app.get('/', (req, res) => {
  res.send('Hello World');
}
);

app.listen(PORT, () => {  
  console.log(`Server is running on http://localhost:${PORT}`);
}
);