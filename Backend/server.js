//to start the server 
require("dotenv").config()
const app = require("./src/app")
const connectToDB = require("./src/config/database")
const dns = require("dns");
const invokegeminiAi = require("./src/services/ai.services")

dns.setServers(["1.1.1.1","8.8.8.8"])

connectToDB()
invokegeminiAi()


app.listen(3000, () => {
    console.log("Server is running on port 3000")
})