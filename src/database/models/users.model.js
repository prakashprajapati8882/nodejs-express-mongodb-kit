const { Schema, model } = require("mongoose");

const userSchema = new Schema({
    firstName: {
        type: String
    },
    lastName: {
        type: String
    },
    email: {
        type: String
    },
    cellPhone: {
        type: String
    },
    password: {
        type: String
    },
    profilePic: {
        type: String
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: {
        type: Date,
        default: Date.now
    }
});

const Users = model("Users", userSchema);

module.exports = { tableSchema: Users, tableName: "Users" };

