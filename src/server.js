import express from 'express';

import { connect } from './database';
import Books from './models/bookModel';

connect();

const server = express();

const Port = 5000;
server.get('/books', async (req, res) => {
  try {
    const books = await book.find({}); //find () always return an array//
    console.log(books);
    return res.json(books);
  } catch (e) {
    console.error(e);
    return res.status(500).send(e);
  }
});

server.listen(Port, () => {
  console.log(`listening on port, ${Port}`);
});
