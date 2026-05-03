import fs from 'fs'

fs.readFile('data.txt', 'utf-8', (err, data)=>{
    if(err) throw err;

    fs.writeFile('msg.text', data, (err)=>{
        if(err) throw err;

        console.log("New File Created Successfully");
        
    })
})