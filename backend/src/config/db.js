const mongoose = require('mongoose') 
require('dotenv').config()

module.exports = () => {
    try {
        mongoose.connect(process.env.DB_URI), 
        {useNewUrlParser: true,
            //useCreateIndex: true; 
        useUnifiedTopology: true}, 
        console.log('Connected to DB!') 
    } catch (error) {
        console.log('DB Connection Error:', error.message)
        process.exit(1)
    }
}  