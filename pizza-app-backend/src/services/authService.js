//search for given email 
//if not found send error not found
//else create a jwt token
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const { findUser } = require("../repositories/userRepo");
const { JWT_SECRET } = require('../config/serverConfig');
const {findCart, createCart} = require('../repositories/cartRepo');

async function loginUser(userDetails) {
    try {
        const user = await findUser({
            email: userDetails.email
        })
        if (!user) {
            throw {
                reason: "Email not found",
                statusCode: 404
            }
        }
        //CHECK if PWD IS CORRECT?
        const plainPwd = userDetails.password
        const isMatch = await bcrypt.compare(plainPwd, user.password);
        if (!isMatch) {
            throw {
                reason: "Wrong pwd",
                statusCode: 400
            }
        }
        const payload = {
            id: user._id,
            email: user.email,
            role: (user.role? user.role : 'USER')
        };
        const token = jwt.sign(payload, JWT_SECRET, {
            expiresIn: "1h"
        })
        console.log(user);
        
        return {token, userRole: user.role, email: user.email, fName: user.firstName};
    }
    catch (err) {
        console.log("Error at auth service layer: " + err.message);
        throw err;
    }
}
module.exports = loginUser