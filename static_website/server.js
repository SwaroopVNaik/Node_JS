import http from 'http'
import fs from 'fs'
import path from 'path'

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

server.listen(8080, '127.0.0.1', (err)=> {
    if (err) throw err;

    console.log("Server Running on http://127.0.0.1:8080");
    
})