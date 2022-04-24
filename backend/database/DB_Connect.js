const mongoose = require('mongoose');

function DbConnect(){
    mongoose
    .connect("mongodb://localhost:27017")
    .then(()=>console.log(`DB is connected`))
    .catch(()=>console.log(`DB is not connected `));
}

module.exports = DbConnect;