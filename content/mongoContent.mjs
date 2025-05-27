export const mongoContent = () => {
    return `
const mongoose = require('mongoose');

const host = process.env.DB_HOST || 'localhost';
const port = process.env.DB_PORT || '27017';
const dbName = process.env.DB_NAME || 'mydb';

const connectMongo = async () => {
  try {
    await mongoose.connect(\`mongodb://${host}:${port}/${dbName}\`, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
    console.log('MongoDB connected');
  } catch (err) {
    console.error('MongoDB connection error:', err);
  }
};

module.exports = connectMongo;
    
`;
}