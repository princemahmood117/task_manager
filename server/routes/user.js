
const router = require("express").Router();

const User = require("../models/user");

const bcrypt = require('bcryptjs')

const jwt = require('jsonwebtoken')

// for sign-up
router.post("/signup", async (req, res) => {
  try {
    const { username } = req.body;
    const { email } = req.body;

    // checks if there is already same username and email is present or not
    const existingUser = await User.findOne({ username: username });
    const existingEmail = await User.findOne({ email: email });

    if (existingUser) {
      return res.status(400).json({ message: "Username is already exists" });
    } else if (username.length < 3) {
      return res
        .status(400)
        .json({ message: "Username should be atleast 4 characters" });
    }

    if (existingEmail) {
      return res.status(400).json({ message: "Email is already exists" });
    }

    const hashedPassword = await bcrypt.hash(req.body.password, 10)

    const newUser = new User({
      username: req.body.username,
      email: req.body.email,
      password: hashedPassword,
    });

    await newUser.save();

    return res.status(200).json({ message: "Login Successfully" });
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: "Internal server error" });
  }
});

// for login

router.get('/login', async (req,res) => {
    const { username, password } = req.body;

    const existingUser = await User.findOne({ username: username });

    if (!existingUser) {
        return res.status(400).json({ message: "Username is incorrect" });
      }

    bcrypt.compare(password,existingUser.password, (err,data) => {
        if(data) {
            const authClaims = [{name : username}, {jti : jwt.sign({}, "prince") }];

            const token = jwt.sign({authClaims},'prince', {expiresIn : '2d'})

            res.status(200).json({id : existingUser._id, token : token})

        } else {
            return res.status(400).json({ message: "Invalid credentials" });
        }
    })
})




module.exports = router;
