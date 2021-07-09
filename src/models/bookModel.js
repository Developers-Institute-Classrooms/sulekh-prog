import mongoose from 'mongoose';

const { Schema } = mongoose;

const model = new Schema({
  title: { type: 'string', required: true },
  genre: { type: 'string' },
  author: 'string',
});

export default mongoose.model('Books', model, 'books');
