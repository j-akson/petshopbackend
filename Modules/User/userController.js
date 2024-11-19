const userSchema = require("./userSchema");


let userRegistration = ((req, res) => {
    let user = new userSchema({
        Firstname: req.body.firstname,
        Lastname: req.body.lastname,
        Email: req.body.email,
        City: req.body.city, 
        Dateofbirth: req.body.dateofbirth,
        Address: req.body.address,
      Pincode: req.body.pincode,
        Contact: req.body.contact,
        Gender: req.body.gender,
        Password: req.body.password,
        Confirmpassword: req.body.password
    })
    user.save()
        .then((result) => {
            res.json({
                msg: "sucessfully registered",
                data: result
            })
        })

        .catch((error) => {
            res.json({
                error: error
            })

        })

})



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
 
module.exports = {
    userRegistration,
    login

}

