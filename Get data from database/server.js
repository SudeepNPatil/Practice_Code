import { MongoClient } from 'mongodb';

const uri = 'mongodb://localhost:27017/';

const dbname = 'mongodbNativeDriver';

MongoClient.connect(uri)
  .then((client) => {
    console.log('Db connected');

    const db = client.db(dbname);

    const collection = db.collection('users');

    collection
      .find()
      .toArray()
      .then((result) => {
        console.log('user fetched', result);
        client.close();
      })
      .catch((error) => {
        console.error('error finding value', error);
      });
  })
  .catch((err) => {
    console.error('error in conneting mongodb', err);
  });
