const express = require("express");
const router = express.Router();
const ownerModel = require("../models/ownerModel");

router.get("/", (req, res) => {
  res.send("Owners Home Page");
});

if (process.env.NODE_ENV === "development") {
  router.post("/create", async (req, res) => {
    let owner = await ownerModel.find();
    if (owner.length > 0) {
      return res.status(503).send("You can create only one owner");
    }
    let { fullname, email, password } = req.body;
    let createdOwner = await ownerModel.create({
      fullname,
      email,
      password,
    });

    res.status(201).send(createdOwner);
  });
}

module.exports = router;
