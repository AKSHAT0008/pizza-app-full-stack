const dotenv = require('dotenv'); // Import dotenv to load environment variables
dotenv.config(); // Load environment variables from .env file

module.exports = {
    PORT: process.env.PORT || 3000, // Default to 3000 if PORT is not set
    DB_URL: process.env.DB_URL,  // Default MongoDB URL
    JWT_SECRET: process.env.JWT_SECRET,
    CLOUD_NAME : process.env.CLOUD_NAME,
    CLOUD_API_KEY : process.env.CLOUD_API_KEY,
    CLOUD_API_SECRET : process.env.CLOUD_API_SECRET
}