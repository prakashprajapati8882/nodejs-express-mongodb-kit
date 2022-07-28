const fs = require('fs');
const path = require('path');

const dbConnections = {};


const loadAllModels = () => {
    const modelsPath = path.join(__dirname, "../models");
    console.log('>nodejs-express-mongodb-kit | [db-connections.js] > #4 | modelsPath : ', modelsPath);
    const modelsList = fs.readdirSync(modelsPath);
    modelsList.forEach((filename) => {
        const modelFilePath = path.join(modelsPath, filename);
        console.log('>nodejs-express-mongodb-kit | [db-connections.js] > #13 | modelFilePath : ', modelFilePath);
        const { tableSchema, tableName } = require(modelFilePath);
        dbConnections[tableName] = tableSchema;
    });
}

module.exports = {
    dbConnections,
    loadAllModels
};
