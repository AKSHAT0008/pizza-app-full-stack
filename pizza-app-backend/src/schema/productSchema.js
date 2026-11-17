const mongoose = require('mongoose')

const prodSchema = mongoose.Schema({
    productID: {
        type: Number,
        unique: true,
        required: true,
    },
    productName: {
        type: String,
        // unique: true,
        required: true,
        trim: true
    },
    description: {
        type: String,
        minlength: [5, "At least 5 char long"],

    },
    quantity:{
        type: Number,
        // required: false,
    },
    productImage: {
        type: String,
        // minlength: [5, "At least 5 char long"],
    },
    price: {
        type: Number,
        required: true
        // minlength: [5, "At least 5 char long"],
    },
    foodType: {
        type: String,
        required: true,
        enum: ['veg', 'non-veg', 'egg', 'vegan']
    },
    category: {
        type: String,
        required: true,
        enum: ['pizza', 'drinks', 'sides', 'desserts']
        // minlength: [5, "At least 5 char long"],
    },
    inStock: {
        type: Boolean,
        required: true,
        // enum: ['veg', 'non-veg', 'drinks', 'sides']
        // minlength: [5, "At least 5 char long"],
    },  
    description:{
        type: String,
        required: true
    }
})

const Prod = mongoose.model("Prod", prodSchema);
module.exports = Prod;