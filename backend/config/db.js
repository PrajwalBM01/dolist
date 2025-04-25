const mongoose = require('mongoose')

async function connection() {
    try{
        const conn = await mongoose.connect(process.env.MONGO_URL)
        console.log("YOu are connnected to the Database", conn.connection.host)
    }catch(err){
        console.log("Could not connect to the database")
        console.error(err)
    }
}

module.exports = connection;