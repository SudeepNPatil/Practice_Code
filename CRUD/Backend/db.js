import mongoose from 'mongoose';

async function db() {
  try {
    const connection = await mongoose.connect(
      'mongodb://localhost:27017/student'
    );

    console.log(`mongodb connected || ${connection.connection.host}`);
  } catch (err) {
    console.error('error in coneting to mongodb', err);
  }
}

export default db;
