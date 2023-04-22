const mongoose = require('mongoose')


var schema = new mongoose.Schema({
    description:{
        type:String,
        required:true
    },
    ToBeCompletedTill:{
        type:String,
        required:true
    }
})


const ToDodb = mongoose.model("Tododb",schema)

module.exports = ToDodb