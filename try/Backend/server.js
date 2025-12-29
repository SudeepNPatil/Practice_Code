import express from 'express';
import cors from 'cors';
import { configDotenv } from 'dotenv';

const app = express();

app.use(cors());
configDotenv();

app.use('/', (req, res) => {
  console.log('server is started now');

  res.status(200).send({ message: 'server is started now' });
});

app.listen(process.env.PORT, () => {
  console.log(
    `server is up and running in http://localhost:${process.env.PORT}`
  );
});
