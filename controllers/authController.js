const userModel = require("../models/userModel");
const bcrypt = require("bcrypt");
const generateToken = require("../utils/generateToken");

module.exports.registerUser = async (req, res) => {
  let { fullname, email, password } = req.body;

  let existingUser = await userModel.findOne({ email });
  if (existingUser) {
    return res.status(409).send("User with this email already exists");
  }     
  try {
    bcrypt.genSalt(10, (err, salt) => {
      if (err) return res.status(500).send("Error generating salt");

      bcrypt.hash(password, salt, async (err, hash) => {
        if (err) return res.status(500).send("Error hashing password");
        let createdUser = await userModel.create({
          fullname,
          email,
          password: hash,
        });

        let token = generateToken(createdUser);

        res.cookie("token", token);
        res.status(201).send("User registered successfully");
      });
    });
  } catch (error) {
    console.error("Error creating user:", error);
    res.status(500).send("Internal Server Error");
  }
};

module.exports.loginUser = async (req, res) => {

    let { email, password } = req.body;

   let user = await userModel.findOne({email});
   if(!user) return res.status(404).send("User not found");

   bcrypt.compare(password,user.password,(err,result)=>{
    if(err) return res.status(500).send("Error comparing passwords");
    if(!result) return res.status(401).send("Invalid credentials");

    let token = generateToken(user);
    res.cookie("token",token);
    res.status(200).send("Login successful");
   });
}


module.exports.logoutUser = (req,res) => {
    res.cookie("token" , "");
    res.redirect('/');
}