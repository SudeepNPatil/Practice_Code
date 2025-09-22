import express from 'express';
import db from './db.js';
import studentRoute from './Routes/studentRoute.js';
import cors from 'cors';

const app = express();
const PORT = 8000;

db();

app.use(cors());
app.use(express.json());

app.use('/students', studentRoute);

app.listen(PORT, () => {
  console.log(`\nserver is running on http://localhost:${PORT}`);
});
