import express from 'express';
import dotenv from 'dotenv';
import morgan from 'morgan';
import router from './routes/userRouter.js';

// create express app 

let app = express()

// http logger middleware 
app.use(morgan('tiny'))

// load application environment variables 

dotenv.config({path: "./config/dev.env"})
let port = process.env.PORT;
let host = process.env.HOST;

// format 

app.use("/user", router)

/* 

Usage : application Root Request
Rest API URL : http://127.0.0.1:8080/
Method Type : Get
Required Fields : None
Access Type : Public

*/

app.get("/", (request, response)=>{
    return response.json({"msg" : "application Root Request"})
})

app.listen(port, host, (err)=>{
    if(err) throw err;

    console.log(`Server running on http://${host}:${port}`);
})