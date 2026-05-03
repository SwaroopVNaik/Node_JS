import fs from 'fs'

fs.readFile('./MOCK_DATA.json', "utf-8", (err, data)=>{
    if(err) throw err 
    console.log(typeof data);
    let employees = JSON.parse(data)
    console.log(typeof data);
    console.log(employees.length);

    let female_employees = []

    // While Loop

    let i = 0 
    while(i <= employees.length - 1){
        if(employees[i].gender === "Female"){
            female_employees.push(employees[i])
        }
        i++;
    }

    // For of Loop

    // for(let emp of employees){
    //     if(emp.gender === "Female"){
    //         female_employees.push(emp)
    //     }
    // }

    console.log(female_employees.length);
    
    fs.writeFile('Female.JSON', JSON.stringify(female_employees), (err)=>{
        if(err) throw err
        console.log("New Female Employees File Created Succesfully");
        
    })
    
})