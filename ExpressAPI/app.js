import express, { response } from "express";
import dotenv, { config } from 'dotenv'

let app = express()

dotenv.config({path : './config/dev.env'})
let port = process.env.PORT
let host = process.env.HOST

/*

- usage : Application Root
- Rest API URL : http://127.0.0.1:8080/
- Method Type : GET
- Required Fields : None 
- Access Type :Public

*/

app.get("/", (Request, Response)=>{
    return Response.json({"Message" : "Application Root"})
})

/*

# 1
- usage : Delete Product
- Rest API URL : http://127.0.0.1:8080/delete
- Method Type : Delete 
- Required Fields : None 
- Access Type :Public

*/

app.delete("/delete", (Resquest, Response)=> {
    return Response.json({"Message" : "Product deleted succefully"})
})


/*

# 2
- usage : Update Product
- Rest API URL : http://127.0.0.1:8080/update
- Method Type : PUT
- Required Fields : None 
- Access Type :Public

*/

app.put("/update", (Request, Response)=> {
    return Response.json({"Message" : "Product Updated Successfully"})
})

app.listen(port, host,  (err)=>{
    if(err) throw err;

    console.log(`The Server is running successfully at http://${host}:${port}/`);
    
})