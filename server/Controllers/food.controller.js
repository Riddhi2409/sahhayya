const agent = require("../Models/agent.model");
const donor = require("../Models/donor.model");
const food = require('../Models/food.model');

exports.addFood = async(req,res) => {
    const {foodName,description,city,quantity,phoneNo} = req.body;

    try {
        const newFood = await food.create({
            donorId: res.user.id,
            foodName,
            description,
            city,
            quantity,
            phoneNo
        })
        console.log(newFood)
        return res.status(200).json({success: true})
    }
    catch(err){
        return res.status(500).json({success: false , message: err})
    }
}

exports.getUserFood = async(req,res) => {
    const donorId = res.user.id;

    const foods = await food.find({donorId});

    return res.status(200).json({success: true,foods: foods});
}

// exports.getPendingDeliver = async(req,res) => {
//     const 
// }


