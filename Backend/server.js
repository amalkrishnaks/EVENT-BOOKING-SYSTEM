const express=require('express');
const cors=require('cors');
require('dotenv').config();
const app=express();
const port=process.env.PORT || 3000 ;

// const corsOptions={
//     origin: "https://event-booking-system-tau.vercel.app/",
//     methods:['GET,POST,PUT,DELETE,PATCH']
// };

app.use(cors());
app.use(express.json());
app.use(express.static('public'));

require('./db');

const routes=require('./routes');
app.use('/api',routes);



app.use('*',(req,res)=>{
    return res.status(404).json({message:"No Page Found"});
})


app.listen(port,()=>{
    console.log(`app is running `);
})