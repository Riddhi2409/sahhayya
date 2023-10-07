const express = require("express");

const router = express.Router();

const {agentProtect,donorProtect} = require('../Controllers/auth.controller');
const {addFood,getUserFood} = require('../Controllers/food.controller')

router.route('/addFood').post(donorProtect,addFood);
router.route('/getUserFood').post(donorProtect,getUserFood)
module.exports= router; 