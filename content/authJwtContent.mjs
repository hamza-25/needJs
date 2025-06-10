// jsonwebtoken bcryptjs cookie-parser cors dotenv

export const authJwtRegisterContent = () => {
    return `
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
// BLOCK 1: align with your db setup
const User = require('../models/User');
// end BLOCK 1

// Generate JWT Token
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN
  });
};

// Register a new user
exports.register = async (req, res) => {
  try {
    const { firstName, lastName, email, password } = req.body;

    // Check if user already exists
    // BLOCK 2: please align with your db setup.
    const existingUser = await User.findOne({ email });
    //end BLOCK 2
    if (existingUser) {
      return res.status(400).json({
        status: 'error',
        message: 'User with this email or username already exists'
      });
    }
    
    // hash password
    const hashedPassword = await bcrypt.hash(password, 12);

    // Create new user
    // BLOCK 3: please align with your db setup.
    const user = await User.create({ firstName, lastName, email, password: hashedPassword });
    // end BLOCK 3

    // Generate JWT token
    const token = generateToken(user._id);
    
    // Set cookie options
    const cookieOptions = {
      maxAge: process.env.JWT_COOKIE_EXPIRES,
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict'
    };
    
    // Send token in HTTP-only cookie
    res.cookie('jwt', token, cookieOptions);
    
    // Remove password from output
    user.password = undefined;
    
    res.status(201).json({
      status: 'success',
      token,
      data: {
        user
      }
    });
  } catch (err) {
    res.status(400).json({
      status: 'error',
      message: err.message
    });
  }
};    
`;
}

export const authJwtLoginContent = () => {
    return `
exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    
    // Check if email and password exist
    if (!email || !password) {
      return res.status(400).json({
        status: 'error',
        message: 'Please provide email and password'
      });
    }
    
    // Check if user exists and password is correct
    // Bloc 1: please align with your db setup.
    const user = await User.findOne({ email }).select('+password');
    // end Bloc 1
    
    // hash password and compare
    const passMatch = await bcrypt.compare(password, user.password);

    if (!user || !passMatch) {
      return res.status(401).json({
        status: 'error',
        message: 'Incorrect email or password'
      });
    }
    
    // Generate JWT token
    const token = generateToken(user._id);
    
    // Set cookie options
    const cookieOptions = {
      maxAge: process.env.JWT_COOKIE_EXPIRES,,
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict'
    };
    
    // Send token in HTTP-only cookie
    res.cookie('jwt', token, cookieOptions);
    
    // Remove password from output
    user.password = undefined;
    
    res.status(200).json({
      status: 'success',
      token,
      data: {
        user
      }
    });
  } catch (err) {
    res.status(400).json({
      status: 'error',
      message: err.message
    });
  }
};    
`;
}

export const authJwtEnvContent = () => {
    return`
\nJWT_SECRET=e16d34c5e52446672524eb1b7b60007a1322d696daaae6e410b96a82e339ddaf04f2bae1b718a2d2b4171d721891b78c612aea89aa4df1d8cc91484b1f4e1f27
JWT_EXPIRES_IN=1d
NODE_ENV=development\n
`;
}

export const authJwtRoutesContent = () => {
    return `
const express = require('express');
const router = express.Router();
const { register, login } = require('../controllers/authController');

// Register route
router.post('/register',/*please add express validators here,*/ register);

// Login route
router.post('/login',/*please add express validators here,*/ login);

module.exports = router;    
`;
}

export const authJwtEntryPointContent = () => {
    return `
\tconst cookieParser = require('cookie-parser');
\tconst authRoutes = require('./routes/authRoutes');
\trequire('dotenv').config();
\t
\tapp.use(cookieParser());
\t
\tapp.use('/auth', authRoutes);
`;
}