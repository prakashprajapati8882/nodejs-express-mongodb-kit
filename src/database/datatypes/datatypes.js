const { Schema } = require("mongoose");
module.exports = {
    "STRING": String,
    "DATE": Date,
    "UUID": Schema.ObjectId,
    "BOOLEAN": Boolean,
    "NUMBER": Number,
    "OBJECT": Object,
    "CURRENT_DATE": Date.now,
    
}