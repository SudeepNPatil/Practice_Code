import mongoose from 'mongoose';

async function db() {
  try {
    const connection = await mongoose.connect('mongodb://localhost:27017');

    console.log('\n Mongodb Connected \n' + connection.connection.host);
  } catch (error) {
    console.error('error in connection database' + error);
  }
}

export default db;
