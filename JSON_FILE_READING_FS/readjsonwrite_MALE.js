// read employess.json file and
// write male employess into male.json file 
// female employess into female.json file 

import fs from 'fs'

fs.readFile('./MOCK_DATA.json', 'utf-8', (err, data)=>{
    if(err) throw err

    // String to Object
    let employees = JSON.parse(data)
    console.log(employees.length);

    let male_employees = []
    for(let emp of employees){
        if(emp.gender === "Male"){
            male_employees.push(emp)
        }
    }
    console.log(male_employees.length);
    
    // JSON.stringify (object to string)
    fs.writeFile('male.JSON', JSON.stringify(male_employees), (err)=>{
        if(err) throw err
        console.log("New Male Empployees File Created successfully");
    })
    
})
