const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcryptjs');

const deanSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true , 'please enter your name']
    },
    email: {
        type: String,
        required: [true, 'Please enter an email.'],
        unique: true,
        lowercase: true,
        validate: [validator.isEmail, 'Please enter a valid email.']
    },
    password: {
        type: String,
        required: [true,'please enter a password'],
        minlength: 8,
        select: false
    },
    confirmPassword: {
        type: String,
        required: [true, 'please confirm your password'],
        validate: {
            validator: function(val){
                return val== this.password;
            },
            message: 'Password and confirm Password does not match!'
        }  
    },
    city: {
        type: String,
        required: true
    },
    vehicle: {
        type: String,
        required: true
    },
    mobile: {
        type: Number,
        required: true
    }

})

deanSchema.pre('save',async function(next){
    if(!this.isModified('password')) return next();

    this.password=await bcrypt.hash(this.password,12);

    this.confirmPassword = undefined;
    next();
})

deanSchema.methods.comparePasswordIndb = async function(pswd,pswddb){
    return await bcrypt.compare(pswd,pswddb);
}

module.exports=mongoose.model('Agent',deanSchema);