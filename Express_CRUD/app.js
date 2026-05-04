import express, { response } from 'express'
import dotenv from 'dotenv'

// create express app 
let app = express()

// load application - environment variables 
dotenv.config({path : './config/dev.env'})
let port = process.env.PORT;
let host = process.env.HOST;

/* 

# Root 
- API Information :
- usage : Application Root Request
- Rest API URL : http://127.0.0.1:8080/
- Method Type : GET 
- Required Fields : None 
- Access Type :Public

*/

app.get("/", (Request, Response)=>{
    return Response.json({"Message" : "Application Root Request"})
})

/* 

## Method : Post

- usage : Create New User
- Rest API URL : http://127.0.0.1:8080/create

- Method Type : Post
- Required Fields : Usernaem, email, gender or none 
- Access Type :Public

*/

app.post("/create", (Request, Response)=>{

    return Response.json({"message" : "New user Created Successfully"})

})

/*

## Method : GET

- usage : Read / Fetch User
- Rest API URL : http://127.0.0.1:8080/
- Method Type : GET 
- Required Fields : None 
- Access Type :Public

*/

app.get("/read", (Request, Response)=>{
    return Response.json({"Message" : "Reading All Users"})
})


/* 

# Method : PUT 

- usage : Update User
- Rest API URL : http://127.0.0.1:8080/
- Method Type : Put 
- Required Fields : None 
- Access Type :Public


*/

app.put("/update", (Request, Response)=>{
    return Response.json({"Message" : "User Updated Successfully"})
})


/* 

# Method : Delete

- usage : Delete User 
- Rest API URL : http://127.0.0.1:8080/
- Method Type : Delete 
- Required Fields : None 
- Access Type :Public

*/

app.delete("/delete", (Request, Response)=>{
    return Response.json({"Message" : "User deleted Successfully"})
})




app.listen(port, host, (err)=>{
    if(err) throw err

    console.log(`Sever Running on http://${host}:${port}/`);
    
})