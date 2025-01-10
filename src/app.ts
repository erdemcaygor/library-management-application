import express from 'express';
import bodyParser from 'body-parser';

import { bookRouter, userRouter } from './routes';

const app = express();
const port = 3000;

app.use(bodyParser.json())

app.use('/users', userRouter);
app.use('/books', bookRouter);

app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});
