const mongoose = require('mongoose')

const connectDB = async() =>{
    try{
        const con = await mongoose.connect(process.env.MONGOOSE_URI)

        console.log(`Mongo Db Connected : ${con.connection.host} `);
    }catch(err){
        console.log(err);
        process.exit(1);
    }
}

module.exports = connectDB