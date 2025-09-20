import express from 'express';
import db from './db.js';
import productroute from './Routes/productroute.js';
import User from './models/User.modal.js';

const app = express();

db();

/* User.create(
  { name: 'sudeep', age: 23 },
  { name: 'vijendra', age: 19 },
  { name: 'pramod', age: 24 },
  { name: 'shreelaxmi', age: 45 },
  { name: 'Narasimha', age: 65 },
  { name: 'prakash', age: 47 },
  { name: 'chikkanna', age: 43 },
  { name: 'jyoti', age: 38 },
  { name: 'veena', age: 36 },
  { name: 'sahana', age: 15 },
  { name: 'soumya', age: 14 },
  { name: 'sinchna', age: 11 },
  { name: 'tamma', age: 6 }
);
 */

/* reading the values from database */

/* const filter = await User.find({ age: { $lt: 40 } }); */

/* const filter = await User.findOne({ age: { $eq: 45 } }); */

/* const filter = await User.findById('68ce92bd75e3d76c0740b4e3'); */

/* const filter = await User.find({ name: 'sudeep'}); */

/* const filter = await User.find({ age: 20 }); */

/* updating values from database */

/* const filter = await User.updateMany(
  { age: { $gte: 18 } },
  { $set: { status: 'major' } }
); */

/* const filter = await User.updateMany(
  { age: { $lte: 18 } },
  { $set: { status: 'minor' } }
); */

/* const filter = await User.updateOne(
  { name: 'sudeep' },
  { $set: { rol: 'software developer' } }
);
 */
/* 
const filter = await User.find({ name: 'sudeep' }); */

/* delete the documetns from database */

/* const filter = await User.deleteMany({ age: 23 });

console.log(filter); */

app.use('/Product', productroute);
