const mongoose = require('mongoose')

async function connection() {
    try{
        await mongoose.connect(process.env.MONGO_URL)
        console.log("YOu are connnected to the Database")
    }catch(err){
        console.log("Could not connect to the database")
        console.error(err)
    }
}

module.exports = connection;