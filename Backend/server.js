const express=require('express');
const cors=require('cors');
require('dotenv').config();
const app=express();
const port=process.env.PORT || 4000 ;

const corsOptions={
    origin: process.env.MONGODB_URL,
    methods:'GET,POST,PUT,DELETE,PATCH'
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.static('public'));

require('./db');

const routes=require('./routes');
app.use('/api',routes);



app.use('*',(req,res)=>{
    return res.status(404).json({message:"No Page Found"});
})


app.listen(port,()=>{
    console.log(`app is running @ http://localhost:${port}/`);
})