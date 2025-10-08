const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config();

const generateToken = (user) => {
  return jwt.sign({ id: user._id, email: user.email }, process.env.JWT_KEY, {
    expiresIn: "72h",
  });
};

module.exports = generateToken;
