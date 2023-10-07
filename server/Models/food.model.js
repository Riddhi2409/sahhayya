const mongoose = require('mongoose');

const deanSchema = new mongoose.Schema({
    donorId: {
        type: String,
        required: true
    },
    foodName: {
        type: String,
        unique: true,
    },
    description: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    quantity: {
        type: Number,
        required: true
    },
    phoneNo: {
        type: String,
        required: true
    },
    assigned: {
        type: String,
        enum: ['pending','assigned'],
        default: 'pending'
    },
    delivered: {
        type: String,
        enum: ['pending','delivered'],
        default: 'pending'
    }

})

module.exports=mongoose.model('food',deanSchema);