const jwt = require('jsonwebtoken');
const userModel = require('../models/userModel');

module.exports= async (req,res,next) => {
    if(!req.cookies.token) {
        req.flash('error','You must be logged in to access this page');
        return res.redirect('/login');
    }

    try {
        let decode = jwt.verify(req.cookies.token,process.env.JWT_KEY);
        let user = await userModel.findOne({email: decode.email}).select('-password');
        req.user = user;
        next();

    }catch(error){
        console.error('Error verifying token:', error);
        req.flash('error','Invalid token, please log in again');
        return res.redirect('/login');
    }
}