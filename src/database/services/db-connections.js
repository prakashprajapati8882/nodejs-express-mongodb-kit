const fs = require('fs');
const path = require('path');

const dbConnections = { };


const loadAllModels = () => {
    const modelsPath = path.join(__dirname, "../models");
    const modelsList = fs.readdirSync(modelsPath);
    modelsList.forEach((filename) => {
        const modelFilePath = path.join(modelsPath, filename);
        const { tableSchema, tableName } = require(modelFilePath);
        dbConnections[tableName] = tableSchema;
    });
}

module.exports = {
    dbConnections,
    loadAllModels
};
