const mongoose=require('mongoose');
require('dotenv').config();

mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => {
    console.log('Connected to EventBookingDB');
  })
  .catch(e => {
    console.log(e);
  });

module.exports=mongoose;