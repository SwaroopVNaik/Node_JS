import express, { request, response } from 'express'

// Create express app 
let app = express()

// Application Root - API 

/* 
API Information :
usage : Application Root Request
Rest API URL : http://127.0.0.1:8080/
Method Type : GET 
Required Fields : None 
Access Type :Public
*/
app.get("/",(request, response)=>{
    response.send("welcome to Express APP")
})

app.listen(8080, '127.0.0.1', (err)=>{
    if(err) throw err
    console.log("Server Running");
    
})