import os from 'os'
import fs from 'fs'
import path from 'path'

// cwd => current working directory
console.log(path.join(process.cwd()))
console.log(path.join(process.cwd(), "data"))
console.log(path.join(process.cwd(), "data", "employees"))
console.log(path.join(process.cwd(), "data", "employees", "employee.json"))