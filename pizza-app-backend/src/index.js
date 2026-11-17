// =======================
// REQUIRED PACKAGES
// =======================
// To initialize project: npm init
// Install required packages: 
// npm install express nodemon dotenv cookie-parser
// Parsing means:
// Converting incoming data (like JSON, form data, cookies, etc.) from a raw format into something your code can easily use — like a JavaScript object.


const cookieParser = require('cookie-parser') // Parses cookies from incoming requests
const express = require('express') // Express framework for building the server
const serverConfig = require('./config/serverConfig') // Load port and config variables
const connectDB = require('./config/dbConfig') // MongoDB connection function
const User = require('./schema/userSchema') // Mongoose schema for user
const userRoutes = require('./routes/userRoutes') // Routes for user operations
const authRoute = require('./routes/authRoutes') // Routes for authentication
const {isLoggedIn} = require('./validation/authValidator')
const uploader = require('./middlewares/multerMiddleware')
const cloudinary = require('./config/cloudConfig')
const fs = require('fs/promises');
const prodRoutes = require('./routes/prodRoutes')
const cartRouter = require('./routes/cartRoutes')
const orderRouter = require('./routes/orderRoutes')
const cors = require('cors');

const app = express() // Initialize express app
const port = serverConfig.PORT // Get port number from config or env
app.use(cors({
  origin: "http://localhost:5173",  // your frontend URL
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true
}));


app.use(express.json()) // Middleware to parse JSON bodies
app.use(express.urlencoded({ extended: true })) // Middleware to parse form data
app.use(cookieParser()) // Middleware to parse cookies

app.post('/ping', (req, res) => { // Test POST route to check request body parsing only after logged in
    console.log("body is", req.body) // Log request body to console
    return res.json({ message: "hey" }) // Send sample JSON response
})

app.use('/users', userRoutes) // Mount user routes under /users
// Mount auth routes at root
app.use('/',prodRoutes)
app.use('/cart',cartRouter);
app.use('/order',orderRouter);
app.use('/', authRoute);

// app.use('/', prodRoutes)
app.post('/photos', uploader.single('incomingFile'), async (req, res) => {
    try {
        const result = await cloudinary.uploader.upload(req.file.path);
        console.log("result is: " + result);
        await fs.unlink(req.file.path);
        return res.json({
            message: 'ok',
            cloudinaryUrl: result, // Add this if you want to see the uploaded file's URL
        })
    }
    catch (error) { 
        console.error("Cloudinary upload error:", error);
        return res.status(500).json({
            message: 'Upload failed',
            error: error.message || 'Unknown error',
        });
    }
})

console.log("at index.js") // Confirmation log that index.js ran

app.listen(port, async () => { // Start server and connect DB
    console.log(`Server is running on http://localhost:${port}`) // Server URL log
    console.log("env file", process.env.PORT) // Check if env port loaded
    await connectDB() // Connect to MongoDB

    /*
    // Optional: Create a sample user manually
    const newUser = await User.create({
        email: 'akshh@gmail.com',
        password: '12345',
        firstName: 'johnyy',
        lastName: 'dopesh',
        mobileNumber: '1234567891'
    })
    console.log("new User" + newUser)
    */
}) 