import http from 'http'
import fs from 'fs'
import path from 'path'
import dotenv from 'dotenv'

// load the application enviroment variable using dotenv

dotenv.config({path : './config/dev.env'})

let port = process.env.PORT
let host = process.env.HOST

let server = http.createServer((request, response)=>{
    console.log(request.url);
        if(request.url === "/" || request.url === "/index.html"){
            fs.readFile(path.join(process.cwd(),"StaticWebiste_nodejs", "index.html"), "utf-8", (err, data)=>{
            if(err) throw err;
            response.end(data)
        })
    }
    if(request.url === "/about.html"){
        fs.readFile(path.join(process.cwd(),"StaticWebiste_nodejs", "about.html"), "utf-8", (err, data)=>{
            if(err) throw err;
            response.end(data)
        })
    }
    if(request.url === "/services.html"){
        fs.readFile(path.join(process.cwd(),"StaticWebiste_nodejs", "services.html"), "utf-8", (err, data)=>{
            if(err) throw err;
            response.end(data)
        })
    }
    if(request.url === "/contact.html"){
        fs.readFile(path.join(process.cwd(),"StaticWebiste_nodejs", "contact.html"), "utf-8", (err, data)=>{
            if(err) throw err;
            response.end(data)
        })
    }

})

server.listen(port, host, (err)=> {
    if (err) throw err;

    console.log(`Server Running on http://${host}:${port}/`);
    
})