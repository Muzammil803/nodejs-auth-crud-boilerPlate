const userModel = require("../models/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const SECRET_KEY = "DEVATHONE";


//  <---------- sign up ---------------------->

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

//  <---------- sign in ---------------------->

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

const getAllUsers=async(req,res)=>{
  try {
    const users = await userModel.find();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }

}

const updateUserData = async (req, res) => {
  try {
    const userId = req.params.id; // Get the user ID from the URL parameter

    const { username, email, newPassword } = req.body; // You can pass the updated data in the request body

    const user = await userModel.findById(userId);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Update the user's data
    if (username) user.username = username;
    if (email) user.email = email;

    if (newPassword) {
      // If a new password is provided, hash it and update the password
      const hashedPassword = await bcrypt.hash(newPassword, 10);
      user.password = hashedPassword;
    }

    const updatedUser = await user.save();

    res.status(200).json({ message: "User data updated successfully", user: updatedUser });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
};
module.exports = { signup, signin ,getAllUsers,updateUserData};
