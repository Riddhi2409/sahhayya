const util= require('util')
require('dotenv').config();

const agent = require("../Models/agent.model");
const donor = require("../Models/donor.model");

const jwt = require("jsonwebtoken");
const { Console } = require('console');
// const { decode } = require('punycode');


const signToken = (id) => {
    console.log(process.env.SECRECT_TOKEN)
  return jwt.sign({ id }, process.env.SECRECT_TOKEN);
};

exports.donorSignUp = async (req, res) => {
  const { name, email, password, confirmPassword,city } = req.body;
    console.log(name, email, password, confirmPassword,city)
  if (await donor.findOne({ email })) {
    console.log("pp")
    return res.status(400).json({ success: false, error: "user already exist" });
  } 
    try {
      const newStudent = await donor.create({
        name,
        email,
        password,
        confirmPassword,
        city,
      });
      console.log("hello");
      const token = signToken(newStudent._id);
      return res.status(200).json({ token: token, success: true });
    } catch (err) {
      console.log(err)
      return res.status(500).json({ success: false, error: err });
    }
  
};

exports.donorLogin = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    res.status(400).json({ error: "enter both email and password" });
  } else {
    const currentDonor = await donor.findOne({ email }).select("+password");
    if (
      !currentDonor ||
      !(await currentDonor.comparePasswordIndb(
        password,
        currentDonor.password
      ))
    ) {
      res.status(400).json({ error: "enter valid email and password" });
    } else {
      const token = signToken(currentDonor._id);
      res.status(200).json({ token: token, success: true });
    }
  }
};

exports.agentSignUp = async (req, res) => {
  const { name, email, password, confirmPassword,city,vehicle,mobile } = req.body;
  console.log(name, email, password, confirmPassword,city,vehicle,mobile)

  if (await agent.findOne({ email })) {
    res
      .status(400)
      .json({ success: false, errorMessage: "user already exist" });
  } else {
    try {
      const newAgent = await agent.create(req.body);
      console.log(newAgent._id)
      const token = signToken(newAgent._id);
      res.status(200).json({ token: token, success: true });
    } catch (err) {
      res.status(500).json({ success: false,error: err });
    }
  }
};

exports.agentLogin = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    res.status(400).json({ error: "enter both email and password" });
  } else {
    const currentAgent = await agent.findOne({ email }).select("+password");
    if (
      !currentAgent ||
      !(await currentAgent.comparePasswordIndb(password, currentAgent.password))
    ) {
      res.status(400).json({ error: "enter valid id and password" });
    } else {
      const token = signToken(currentAgent._id);
      res.status(200).json({ token: token, success: true });
    }
  }
};

exports.agentProtect = async(req,res,next) => {
    const testToken = req.user;

    var token;
    if (testToken && testToken.startsWith('bearer')){
      token=testToken.split(' ')[1];
    }
    if (!token){
      res.status(401).json({error: "User is not logged in"})
    }
    jwt.verify(token,process.env.SECRECT_TOKEN,async function(err,decoded){
      if (err){
        Console.log(err);
        return res.status(500).send({ auth: false, message: err }); 
      }
      if (!(await agent.findById(decoded.id))){
        return res.status(500).send({ auth: false, message: "user not exixts" })
      }
      
      res.user= decoded;
      console.log(decoded)
      next();
    })

}

exports.donorProtect =  async(req,res,next) => {

  const testToken = req.body.user;
console.log(testToken)
    var token;
    if (testToken ){
      token=testToken;
    }
    if (!token){
      res.status(401).json({error: "User is not logged in"})
    }
    jwt.verify(token,process.env.SECRECT_TOKEN,async function(err,decoded){
      if (err){
        console.log(err)
        return res.status(500).send({ auth: false, message: err }); 
      }
      if (!(await donor.findById(decoded.id))){
        return res.status(500).send({ auth: false, message: "user not exixts" })
      }
      console.log(decoded)
      res.user= decoded;
      next();
    })

}