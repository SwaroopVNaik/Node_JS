# what is Node JS

## - Node JS is a open - source cross - platform
## - JS Runtime Enviroment , that execute JS Code Outside Browser 
## - Its JS Runtime env(not a framework / library)
## - Run on chome v8 engine 
## - written c++
## - TO develop Server Side Application (main Adavnatge)

# Why Node js ?

- Very fast and highly scalable (scale uup 50 Lakh)
- Asynchronous and non Blocking 
- Lightweight and effienct way to create server 
- Same JS language for both client and server 

## - NPM - Node Package Manager : 

##  Node JS Inbuilt Modules 
##  Node JS 3rd party Module - npmjs.com(global packaging registry)

## Pre - Requiestes (to learn Node Js )

## JS - Es6 Features 

## -> let, const 
## -> class 
## -> String literal - ${}
## -> () => (Arrow function)
## -> Import/export
## -> Array new method []
- [].foreach()
- [].map()
- [].filter()
- [].find()
- [].reduce()

## -> Destructring -> Array and Object Destructring

## -> ...(spread and rest operator)

## -> Async and Await 
- Ansynchronous Programming using JS 
- 1) callback 
- 2) promise 
- 3) async and await 


- Synchronous -> one request at a time 
- ASynchronus -> multiple request at a time

## Node Js Modules 
## Inbuilt Modules 

- os -> Operating System 
- fs 
- path
- dotenv
- http
- url 

## ES5 vs ES6
------------------

ECMA Script 

## OS -> Operating system  (inbuilt module of node js)

What is OS ? 
platform ?
Arch ?
free memory ? 

# fs -> file system module ( to handle files)

# path - create folder and file path dynamically (based on platform)

# http - to create server

## Data.txt (file)

## GA, GM, GN, GE 

## Read Data.txt file and print data ? using node js 

# note -> converting Obj to String JSON.stringfy()
# note -> converting String to Object JSON.parse()

# how to read dot.env 
- 3rd Party Node Modules 

### nodeman 
### Initialization commands 
- npm install -g nodemon
- npm install nodemon
- npm install dot.env 
- npm install express 

--------------- these are inbuilt and third party modules 

### nodemon - package : running application/server in dev mode. 
- ## (no need to stop and start server every time)

### dotenv - package : to maintain and read application env variables like port , host and db_local url, server url , application JWt secret keys to read the configuration variable values

### path - to create and maintain the folder and file paths

### fs - to read and write text files

### http - to create backend server

### RUNNING APPLICATION 
### Node.js
- ## node server.js
- ## nodeman server.js 

### React 
- ## npm start / npm run dev

### similarly need to run backend also using - npm start 
### update your package.json file.

## Creating Server Using HTTP module !

### Disadvantage of creating Server using HTTP Module 

- Routing is very difficult ( req.url = "/user/101&&page=2" )

- Developing Rest API (Application program interface (entry point to backend ))

- Providing Modularity Code is difficult 

# Due to these disadvantages alternative is :

## Express JS : it is Node JS Framework 

##### Create express app and develop Rest API 

- install required dependency/ packages (npm i express dotenv)

##### What is PostMan Tool ?

- ### It is used to Test the PostMan Tool 

#### Develop CRUD REST API Using Express JS ? 

- Create - new user/emp/order/product       - POST 
- Read - users/employees/orders/product     - GET 
- Update - user by id/emp by id/order by id - PUT
- Delete - user by id/emp by id          - Delete

# Root 
- API Information :
- usage : Application Root Request
- Rest API URL : http://127.0.0.1:8080/
- Method Type : GET 
- Required Fields : None 
- Access Type :Public

## Method : Post

- usage : Create New User
- Rest API URL : http://127.0.0.1:8080/create
- Method Type : Post
- Required Fields : Usernaem, email, gender or none 
- Access Type :Public

## Method : GET

- usage : Read / Fetch User
- Rest API URL : http://127.0.0.1:8080/
- Method Type : GET 
- Required Fields : None 
- Access Type :Public

# Method : PUT 

- usage : Update User
- Rest API URL : http://127.0.0.1:8080/
- Method Type : Put 
- Required Fields : None 
- Access Type :Public

# Method : Delete

- usage : Delete User 
- Rest API URL : http://127.0.0.1:8080/
- Method Type : Delete 
- Required Fields : None 
- Access Type :Public

------------------------------------------------

# 1
- usage : Delete Product
- Rest API URL : http://127.0.0.1:8080/
- Method Type : Delete 
- Required Fields : None 
- Access Type :Public
----------------------------------------------------
# 2
- usage : Update Product
- Rest API URL : http://127.0.0.1:8080/
- Method Type : PUT
- Required Fields : None 
- Access Type :Public

-----------------------------------------------------
CRUD Operation - on employee json file data

/*
usage : create new employee 
Rest API URL : http://127.0.0.1:8080/emp/create
Method Type : POST
Required Fields : eid, ename, esal, gender
Access Type : Public
*/

/*
usage : read emp by id
REST API URL : http://127.0.0.1:8080/emp/101
Method Type: GET 
Required Fields : None 
Access Type : Public 
*/ 

/*
Usage :Read all Employees 
REST API URL : http://127.0.0.1:8080/emp/
Method Type : GET 
Required Fields : None
Access Type : Public
/*

/*
Usage : Update emp by id
REST API URL :  http://127.0.0.1:8080/emp/101 
Method Type : PUT
Required Fileds : None 
Access Type : Public 
*/

/*
Usage : delete employeee by ID 
REST API URL :  http://127.0.0.1:8080/emp/101
Method Type : DELETE
Required Fileds : None 
Access Type : Public 
*/

------------------------------------------------------
```
POST - http://127.0.0.1:8080/emp/create
GET - http://127.0.0.1:8080/emp/101
GET - http://127.0.0.1:8080/emp/
PUT - http://127.0.0.1:8080/emp/101
DELETE - http://127.0.0.1:8080/emp/101
```


## The Request URL had 3 Parts 
- Request URL - contains Request ( Domian name , Path Para, Query Para)
- Request Body  - Contains Body (form data)
- Request Header - contains Header (JWT - tokens auth )

---------------------------------------------------------------------------
# JSON CRUD Operations

### Installing dependencies

- ## npm init -y
- ## npm install express express morgan dotenv nodemon

```
http://127.0.0.1:8080/user/create - POST
http://127.0.0.1:8080/user/all - GET
http://127.0.0.1:8080/user/update/101 - PUT
http://127.0.0.1:8080/user/delete/101 - DELETE
```
-----------------------------------------------------------------------------------------------

## Node js - Routing ? 

## Application Root 
```
http://127.0.0.1:8080/      - GET
```

## User Module API

```
http://127.0.0.1:8080/user/create   - POST
http://127.0.0.1:8080/user/read     - GET
http://127.0.0.1:8080/user/101      - GET
http://127.0.0.1:8080/user/update/101  - PUT
http://127.0.0.1:8080/user/Delete/101  - DELETE
```

## Product module 

```URL
http://127.0.0.1:8080/product/create      - POST
http://127.0.0.1:8080/product/read        - GET
http://127.0.0.1:8080/product/101         - GET
http://127.0.0.1:8080/product/update/101  - PUT
http://127.0.0.1:8080/product/Delete/101  - DELETE
```

# dependency -

- ## npm i express dotenv morgan

---------------------------------------------------------------------------------------------------

