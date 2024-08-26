import userModel from '../model/userModel.js';
// const userModel = require("../model/userModel");

let getAllUsers = async (req, res) => {
  try {
      const foundAll = await userModel.find({});
      res.status(200).json(foundAll);
  } catch (error) {
      res.status(500).json("SERVER ERROR");
  }
};

let saveUsers = async (req, res) => {
  let { name, email, age, company, salary, workExperence } = req.body;
  let createdDate = new Date();
  try {
      const userExits = await userModel.findOne({ email });
      if (userExits) return res.status(400).json({ msg: "user already exists" });
      else {
          const newUser = new userModel({ name, email, age, company, createdDate, salary, workExperence });
          await newUser.save();
          return res.status(200).json("success")
      };
  } catch (error) {
      res.status(500).json("SERVER ERROR");
  }
}

let editUsers = async (req, res) => {
  let { id, name, email, age, company, salary, workExperenc } = req.body;
  try {
      let userIds = await userModel.findOne({ '_id': id });
      let rrr = await userModel.findByIdAndUpdate(id, { name, email, age, company, salary, workExperenc }, { new: true });
      return res.status(200).json("success");
  } catch (err) {
      res.status(500).json("SERVER ERROR");
  }
}

let deleteUsers = async (req, res) => {
  let { id } = req.body;
  try {
      await userModel.findByIdAndDelete(id);
      return res.status(200).json("success");
  } catch (err) {
      res.status(500).json("SERVER ERROR");
  }
}


export { getAllUsers, saveUsers, editUsers, deleteUsers };