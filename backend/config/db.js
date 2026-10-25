import mongoose from 'mongoose';

export const connectDB = async () => {
  try {
    const mongoUri = process.env.MONGODB_URI;
    if (!mongoUri || mongoUri.includes('<username>')) {
      console.warn('⚠️  MONGODB_URI is not configured with valid credentials in .env');
      console.warn('👉 Please update backend/.env with your MongoDB Atlas Cloud connection string.');
      return;
    }

    const conn = await mongoose.connect(mongoUri);
    console.log(`✅ MongoDB Cloud Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`❌ MongoDB connection error: ${error.message}`);
    console.warn('⚠️ Running server without active database connection. Update backend/.env with your MongoDB Cloud credentials.');
  }
};
