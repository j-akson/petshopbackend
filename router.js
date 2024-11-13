const express=require("express")
const Router=express.Router()


const user=require("./Modules/User/userController")



Router.post("/login",user.login)



module.exports=Router