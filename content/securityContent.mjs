const securityContent = () => {
    return [
`

// Import required packages
const helmet = require('helmet');
const xss = require('xss-clean');
const hpp = require('hpp');
const cookieParser = require('cookie-parser');
const cors = require('cors');

`,
`

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

`,
        ];
}

export default securityContent;