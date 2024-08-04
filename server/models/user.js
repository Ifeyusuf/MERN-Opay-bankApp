const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");


const userSchema = new mongoose.Schema( {
    firstname: {
        type: String,
        require: [ true, " firstname must be provided " ]
    },

    middlename: {
        type: String,
        require: [ true, " middlename must be provided " ]
    },

    lastname: {
        type: String,
        require: [ true, " lastname must be provided " ]
    },

    password: {
        type: String,
        require: [ true, " password must be provided " ],
    },

    tel: {
        type: Number,
        require: [ true, " phone number must be provided " ]
    },

    address: {
        type: String,
        require: [ true, " address must be provided " ]
    },

    email: {
        type: String,
        require: [ true, " email must be provided " ],
        match : [
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            'Please provide a valid email',
    ],
    unique: true
    },

    accountNum: {
        type: Number,
        unique: true
    },

    accountBalance: {
        type: Number,
        default: 0
    },

    pin: {
        type: Number,
        default: "0000",
        maxlength: 4
    },

    beneficiary: {
        type: [Object]
    },

    suspended: {
        type: Boolean,
        default: false
    }

}, {timestamps: true} );


userSchema.pre("save", async function(){
    const salt = await bcrypt.genSalt(10)
    this.password = await bcrypt.hash(this.password, salt)
});

userSchema.methods.comparePassword = async function (individualPassword) {
    const isMatch = await bcrypt.compare(individualPassword, this.password)
    return isMatch
};


module.exports = mongoose.model("User", userSchema);


