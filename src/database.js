//first thing import mongoose//

import mongoose from 'mongoose';

//set up a connect function that will connect to mongoose and connect//

const opts = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndexes: true,
};

export const connect = () => {
  //connect to mongodb with mongoose//
  mongoose.connect('mongodb://localhost:27017/bookAPI', opts, (err) => {
    if (err) {
      return console.error(err);
    }
    console.log('connected to mongodb');
  }); //2nd parameter is call back to catch error//
};

//add a disconnect function//

export const disconnect = () => {
  //disconnect from the database//
  mongoose.disconnect();
};

// export const. connect =()=>{} ----const connect = ()=>{};  exports.connect = connect; //
