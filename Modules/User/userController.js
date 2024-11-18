const userSchema = require("./userSchema");


const login = ((req, res) => {
    let email = req.body.email
    let password = req.body.password

    userSchema.findOne({ email: email })
        .then((result) => {
            console.log(result);
            
           if(password==result.password){
            res.json({
                msg:"logged in success"
            })
           }
           else{
            res.json({
                msg:"pswd eror"
            })
           }
        })
        .catch((err) => {
            res.json({
                msg: "user not found"
            })
        })

    })
    module.exports={
        login
    }