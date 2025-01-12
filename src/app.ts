import express from 'express';
import bodyParser from 'body-parser';

import syncDatabase from './syncdb';

import { bookRouter, userRouter } from './routes';

const app = express();
const port = 3000;

app.use(bodyParser.json())

app.use('/users', userRouter);
app.use('/books', bookRouter);

// Sync database before starting the server
syncDatabase().then(() => {
  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
});
