export const middleAuthbase64Content = () => {
    return `
const User = require('../models/User'); // adjust path to your User model
const bcrypt = require('bcryptjs');

const isAuth = async (req, res, next) => {
  const authHeader = req.headers['authorization'];
  if (!authHeader.startsWith('Basic ')) {
    return res.status(401).json({ message: 'Access denied. No token provided.' });
  }
  const emailPassword = Buffer.from(authHeader.split(' ')[1], 'base64').toString('utf8');
  const [email, password] = userPassword.split(':'); 
  try {
    // Check if user exists in DB
    const user = await User.findOne({email});

    // Check if password matches
    const isMatch = await bcrypt.compare(password, user.password);

    if (!user && !isMatch) {
      return res.status(401).json({ message: 'Invalid credentials.' });
    }

    req.user = user;
    next();
  } catch (err) {
    return res.status(403).json({ message: 'Invalid or expired token.' });
  }
};

module.exports = isAuth;
    `;
}