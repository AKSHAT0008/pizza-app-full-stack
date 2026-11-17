const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const userSchema = mongoose.Schema({
    firstName: {
        type: String,
        required: [true, "First Name is required"],
        minlength: [1, "Atleast 5 char long"],
        lowercase: true,
        trim: true,
        maxlength: [20, "First name should be not be greater than 20 char"]
    },
    lastName: {
        type: String,
        required: [true, "Last Name is required"],
        minlength: [1, "Atleast 5 char long"],
        lowercase: true,
        trim: true,
        maxlength: [20, "Last name should be not be greater than 20 char"]
    },
    mobileNumber: {
        type: String,
        required: [true, "Mob no. is required"],
        trim: true,
        maxlength: [10, "Mob no. should be not be greater than 10 char"],
        unique: true
    },
    email: {
        type: String,
        required: [true, "Email is required"],
        trim: true,
        // maxlength: [10, "Mob no. should be not be greater than 10 char"],
        unique: true,
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
    },
    password: {
        type: String,
        required: [true, "Password is required"],
        minlength: [6, "Password must be at least 6 characters"]
    },
    role: {
        type: String,
        enum: ['USER','ADMIN'],
        default: 'USER',
    }
}, {
    timestamps: true,
});

userSchema.pre('save', async function () {
    const hashPwd = await bcrypt.hash(this.password, 10);
    this.password = hashPwd;
})

const User = mongoose.model("User", userSchema);
module.exports = User; 