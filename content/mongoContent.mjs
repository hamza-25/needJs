export const mongoContent = () => {
    return `
const mongoose = require('mongoose');

const host = process.env.DB_HOST || 'localhost';
const user = process.env.DB_USER || 'root';
const password = process.env.DB_PASSWORD || '';
const port = process.env.DB_PORT || '27017';
const dbName = process.env.DB_NAME || 'mydb';

const connectMongo = async () => {
  try {
    await mongoose.connect(\`mongodb://\${host}:\${port}/\${dbName}\`, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      // user: user,        // optional if using auth
      // pass: password         // optional if using auth
    });
    console.log('✅ MongoDB connected');
  } catch (err) {
    console.error('❌ MongoDB connection error:', err);
  }
};

module.exports = connectMongo;
    
`;
}



// import mongoose from 'mongoose';

// const host = process.env.DB_HOST || 'localhost';
// const user = process.env.DB_USER || 'root';
// const password = process.env.DB_PASSWORD || '';
// const port = process.env.DB_PORT || '27017';
// const dbName = process.env.DB_NAME || 'mydb';

// const connectMongo = async () => {
//   try {
//     await mongoose.connect(\`mongodb://${host}:${port}/${dbName}\`, {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//       // user: user,        // optional if using auth
//       // pass: password         // optional if using auth
//     });
//     console.log('✅ MongoDB connected');
//   } catch (err) {
//     console.error('❌ MongoDB connection error:', err);
//   }
// };

// export default connectMongo;