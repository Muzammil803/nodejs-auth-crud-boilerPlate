const userModel = require("../models/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const SECRET_KEY = "DEVATHONE";

const signup = async (req, res) => {
  try {
    const { username, password, email } = req.body;

    const existingUser = await userModel.findOne({ email: email });

    if (existingUser) {
      return res.status(400).json({ message: "user already exist" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const result =await userModel.create({
      username: username,
      email: email,
      password: hashedPassword,
    });
    const token = jwt.sign({ email: result.email, id: result._id }, SECRET_KEY);
    res.status(201).json({user:result,token:token})

  } catch (error) {
    res.status(500).json({message:"something went wrong"})
  }
};

const signin = async(req, res) => {
    const {email,password}=req.body

    const existingUser = await userModel.findOne({ email: email });

    if (!existingUser) {
      return res.status(404).json({ message: "user not found" });
    }

    const matchPassword=await bcrypt.compare(password,existingUser.password)

    if(!matchPassword){
        return res.status(400).json({
            message:"Invalid Credential"
        })
    }
    const token = jwt.sign({ email: existingUser.email, id: existingUser._id }, SECRET_KEY);
    res.status(201).json({user:existingUser,token:token})

};

module.exports = { signup, signin };
