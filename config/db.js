const mongoose = require('mongoose');
const keys = require('./keys');

// function to connect to database
const connectDB = async () => {
    try{
        await mongoose.connect(keys.mongoDBURI, {
            useCreateIndex: true,
            useNewUrlParser: true
        });
        console.log('MongoDB is connected');
    }catch(error){
        console.error(error.message);
        // Stopping the process
        process.exit(1);
    }
}

module.exports = connectDB