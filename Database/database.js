var Constant = require("../Common Function/commonfunction");
var mongoose = require("mongoose");

function databaseConn(){
    mongoose.connect(Constant.mongoUrl, {useNewUrlParser: true, useUnifiedTopology: true})
.then(console.log("DB connected Successfully"))
.catch((err) => {
    console.log("Error", err);
    throw err
})}

//         if(err){
//             console.log("errror", err);
//             throw err
//         }
//         console.log("DB connected Successfully");
//     })
// }

module.exports = {
    databaseConn
};