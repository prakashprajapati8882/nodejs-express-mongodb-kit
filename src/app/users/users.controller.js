const { dbConnections } = require("../../database/services/db-connections");

/**
 * 
 * @param {*} req 
 * @payload  {
 *        "firstname": "SuperAdmin",
 *        "lastname": "User",
 *        "email": "admin@admin.com",,
 *        "cellPhone": "+919876543210",
 *        "password": "password",
 *        "profilePic": null
 *      }
 * @returns { message } object
 */
const createUser = async (req) => {
    const { Users } = dbConnections;
    await Users.create(req.body);
    return { message: "User is created successfully!" };
};

/**
 * 
 * @param {*} req 
 * @query { itemPerPage: 10, selectedItems: 1 }
 * @returns { data } object
 */
const getAllUsers = async (req) => {
    const { Users } = dbConnections;
    const { itemPerPage, selectedItems } = req.query;
    const data = await Users.find();
    return { data };
};

/**
 * 
 * @param {*} req 
 * @returns { data } object
 */
const getUserInfoByEmail = async (req) => {
    const { Users } = dbConnections;
    const { emailId } = req.query;
    const userInfo = await Users.findOne({ where: { email: emailId } });
    return { data: userInfo };
};

module.exports = {
    createUser,
    getAllUsers,
    getUserInfoByEmail
};
