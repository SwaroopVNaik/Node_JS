import express from 'express'

let router = express.Router()

/* 

Usage : User Root Request
Rest API URL : http://127.0.0.1:8080/user/
Method Type : Get
Required Fields : None
Access Type : Public

*/

router.get("/", (request, response)=>{
    return response.json({"msg" : "User Router - Root Request"})
})

/* 

Usage : Create New User
Rest API URL : http://127.0.0.1:8080/user/create
Method Type : POST
Required Fields : eid, ename, esal, gender
Access Type : Public

*/

router.post("/create", (request, response)=>{
    return response.json({"msg" : "user created successfully"})
})



/*

router.post()
router.get()
router.put()
router.delete()

*/

export default router;