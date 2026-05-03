// Read Data.txt file and print data ? using node js 

import fs from 'fs'

// -> Synchronus Execution
// passing (filepath, encoding format)
// let Data = fs.readFileSync('data.txt', 'utf-8') 
// console.log(Data);


// -> Asynchronus Execution (1> CallBack , 2> Promise , 3> Async/ await) 
// passing ((filepath, encoding format, callback))
// Callback Function => passing function as a argument 

fs.readFile('./data.txt', 'utf-8', (err, data)=>{
    if(err) throw err

    console.log(data);
    
})   
