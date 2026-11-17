const loginUser = require("../services/authService");

async function logout(req, res) {
    console.log("Cookie from frontend: ", req.cookies);

    try {
        // res.cookie("authToken","");
        res.clearCookie("authToken", {
            httpOnly: true,
            // secure: process.env.NODE_ENV === "production",
            secure: false,
            // sameSite: process.env.NODE_ENV === "production" ? "none" : "lax"
            sameSite: "lax"
        });

        res.status(200).json({
            message: "Successfully logged out",
            success: true,
            data: {}
        })
    } catch (error) {
        return res.status(500).json({
            message: "failed to log-out",
            success: false,
            error: error.reason || error.message || "Something went wrong"
        })
    }

}

async function login(req, res) {
    try {
        const responce = req.body;
        const resp = await loginUser(responce);

        res.cookie("authToken", resp.token, {
            httpOnly: true,
            secure: false,
            sameSite: "lax",   // allow frontend/backend on different ports
            maxAge: 7 * 24 * 60 * 60 * 1000
        }) // authToken is the name of the token

        
        res.status(200).json({
            message: "Successfully logged in",
            success: true,
            data: {
                userRole: resp.userRole,
                firstName: resp.fName,
                email: resp.email,
                token: resp.token
            }
        })
    }
    catch (error) {
        return res.status(500).json({
            message: "failed to log-in",
            success: false,
            error: error.reason || error.message || "Something went wrong"
        })
    }

}
module.exports = { login, logout }