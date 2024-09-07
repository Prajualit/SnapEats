const express = require("express")
const router = express.Router()
const User = require('../models/User')
const { body, validationResult } = require('express-validator');
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")
const jwtSecret = "MynameisEndtoEndYouTubeChannel$#"

router.post("/createuser", [
  body('email', 'Incorrect Email').isEmail(),
  body('name', 'Incorrect Name').isLength({ min: 5 }),
  body('password', 'Incorrect Password').isLength({ min: 5 })]
  , async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const salt = await bcrypt.genSalt(10)
    let setPassword = await bcrypt.hash(req.body.password, salt)

    try {
      await User.create({
        name: req.body.name,
        password: setPassword,
        email: req.body.email,
        location: req.body.location
      }).then(res.json({ success: true }));
    } catch (err) {
      console.error(err.message)
      res.json({ success: false });
    }
  })

router.post(
  "/loginuser",
  [
    body('email', 'Incorrect Email').isEmail(),
    body('password', 'Incorrect Password').isLength({ min: 5 })
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { email, password } = req.body;

    try {
      let userData = await User.findOne({ email });

      const pwdCompare = await bcrypt.compare(req.body.password, userData.password)
      if (!pwdCompare) {
        return res.status(400).json({ errors: "Email or Password is Incorrect" });
      }

      const data = {
        user: {
          id: userData.id
        }
      }
      const authToken = jwt.sign(data,jwtSecret)
      
      return res.json({ success: true, authToken:authToken });
    } catch (err) {
      console.error(err.message);
      return res.status(500).json({ errors: "Server Error" });
    }
  }
);

module.exports = router;