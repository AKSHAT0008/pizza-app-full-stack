const mongoose = require('mongoose');

const orderSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    items: [
        {
            product: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Prod',
                required: true
            },
            quantity: {
                type: Number,
                required: true,
                min: 1
            },
            // price: {
            //     type: Number,
            //     required: true
            // }
        }
    ],
    // shippingAddress: {
    //     fullName: { type: String, required: true },
    //     address: { type: String, required: true },
    //     city: { type: String, required: true },
    //     state: { type: String, required: true },
    //     pincode: { type: String, required: true },
    //     phone: { type: String, required: true }
    // },
    paymentMethod: {
        type: String,
        enum: ['COD', 'Online'],
        required: true
    },
    paymentStatus: {
        type: String,
        enum: ['Pending', 'Paid', 'Failed'],
        default: 'Pending'
    },
    orderStatus: {
        type: String,
        enum: ['Placed', 'Processing', 'on-the-way', 'Delivered', 'Cancelled'],
        default: 'Placed'
    },
    totalAmount: {
        type: Number,
        required: true
    }
},{
    timestamps: true
});

module.exports = mongoose.model('Order', orderSchema);