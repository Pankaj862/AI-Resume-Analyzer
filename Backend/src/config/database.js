const mongoose = require("mongoose")



async function connectToDB() {

    try {
    
        await mongoose.connect(process.env.MONGO_URI)

        console.log("Connected to Database")
    }
   catch (err) {
    console.error("MongoDB Error:");
    console.error(err);
    console.error(err.message);
}
}

module.exports = connectToDB

console.log("Export:", connectToDB);
module.exports = connectToDB;