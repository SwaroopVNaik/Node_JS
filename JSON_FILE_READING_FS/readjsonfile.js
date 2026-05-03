import fs from 'fs'

fs.readFile("./emp.json", 'utf-8', (err, data)=>{
    if(err) throw err
    console.log(typeof data);
    let employees = JSON.parse(data)
    console.log(typeof employees);

    for(let emp of employees){
        console.log(emp.name);
    }
    
})