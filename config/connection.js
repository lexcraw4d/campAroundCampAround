const mongoose = require('mongoose');
require('dotenv').config();

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.DB_STRING, 
            {useNewUrlParser:true})
            console.log(`connected to the database, ${mongoose.connection.name}`)
    } catch (err) {
        console.log('Failed to connect', err)
    }
}
module.exports = connectDB;