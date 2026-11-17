// const createUser = require("../controllers/userController");
const { findUser, createUser } = require("../repositories/userRepo");

async function registerUser(userDetails) {
    //check if user already exist by checking only primary keys like email and mob num
    //if so throw error
    //else create a user by passing details to repo
    // try{
        const user = await findUser({
        email: userDetails.email,
        mobileNumber: userDetails.mobileNumber
    });

    if(user) throw {
        reason: "Email or mobile already in use",
        statusCode: 400
    }

    const newUser = await createUser({
        email: userDetails.email,
        lastName: userDetails.lastName,
        firstName: userDetails.firstName,
        password: userDetails.password,
        mobileNumber: userDetails.mobileNumber,
    })
    
    if(!newUser) throw{
        reason: "server issue",
        statusCode: 500
    }

    return newUser
    // }
    // catch(err){
    //     console.log("Error at service layer: " + err);  
    //     throw err  ;    
    // }
    
}

module.exports = {
    registerUser
}