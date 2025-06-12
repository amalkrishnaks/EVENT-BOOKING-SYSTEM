const mongoose=require('mongoose');
require('dotenv').config();


// mongoose
//   .connect(process.env.MONGODB_URL)
//   .then(() => {
//     console.log('Connected to EventBookingDB');
//   })
//   .catch(e => {
//     console.log(e);
//   });
    try{
    mongoose
    .connect(process.env.MONGO_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('MongoDB database is connected');
    } catch (err) {
        console.error('MongoDB database connection failed', err);
    }

module.exports=mongoose;