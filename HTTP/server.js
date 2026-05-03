import http from 'http'

let server = http.createServer((request, response)=>{
    response.end("<h1>Swaroop V Naik</h1>")
    // read index.html file as response (server - 1)
})

let port =  8080
let host = '127.0.0.1'
server.listen(port, host, (err)=>{
    if(err) throw err
    console.log("Server is running superfast");
    
})