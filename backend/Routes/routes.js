const express = require("express");
const router = express.Router();
const user = require("../Models/userSchema");
const { set } = require("mongoose");
const { Resend } = require('resend');

//CREATE NEW USER PART
router.post("/create-user",async(req,res) => {
    const {fname,userName,email,password,terms,image,location,artist,designer,employer} = req.body.userProfile;
    const errors = {};
    if(!fname){
        errors.fname = "Name is required";
    }
    if(!userName){
        errors.userName = "UserName is required";
    }else{
        try{
        const exists = await user.findOne({userName:userName});
        if(exists){
            errors.userName = "Username already taken";

        }
        }catch(err){
            console.log(err);
        }
    }
    if(!email){
        errors.email = 'Email is required';
    }else{
        try{
        const exists = await user.findOne({email:email});
        if(exists){
            errors.email = "Email already registered";

        }
        }catch(err){
            console.log(err);
        }
    }
    if(!password){
        errors.password = "Passwrod is required";
    }else if(password.length <= 6){
        errors.password = "Password must be greater than 6 characters";
    }if(!terms){
        errors.terms = "Agree to terms to continue";
    }
    if(Object.keys(errors) > 0){
        res.status(400).send(errors);
    }else{
    try{
        const newUser = new user({
            fname:fname,
            userName:userName,
            email:email,
            password:password,
            terms:terms,
            image:image,
            location:location,
            artist:artist,
            designer:designer,
            employer:employer,
        });
        const savedUser = await newUser.save();
        res.status(200).json({message:"User Created Successfully"});
    } catch(err){
        console.log(err);
        res.status(400).send(errors);
    }
}
});

// UPDATE ALL USERDETAILS AND SEND EMAIL
router.put("/update-user",async (req,res) => {
    const {fname,userName,email,password,terms,image,location,artist,designer,employer} = req.body.userProfile;
    const resend = new Resend('re_7B3bebgT_Gzo6CvnzRuvTbBxhv31Fy4CW');
    try{
        const userToUpdate = new user({
            fname:fname,
            userName:userName,
            email:email,
            password:password,
            terms:terms,
            image:image,
            location:location,
            artist:artist,
            designer:designer,
            employer:employer,
        })
        const updatedUser = await user.findOneAndUpdate({userName:userName},{artist:artist,designer:designer,employer:employer,image:image,location:location},{new:true});
        const {data,error} = await resend.emails.send({
            from: "vinay.varma@resend.dev",
            to: email,
            subject: "Thanks for testing my app",
            html: "<h2>This is a test email from Dribbble app developed by Vinay.</h2><p>If you are seeing this, the app and the api worked!</p><p><i>Thanks again for testing my app</i></p>"
        });
        if(error){
            console.log(error)
        }
        console.log("Email sent");
        res.status(200).send(updatedUser);
    } catch(err) {
        console.log(err);
        res.status(400).send(err);
    }
})

module.exports = router;