// db.js
const Mongoose = require("mongoose")
const localDB = 'mongodb+srv://shashikumarsk0:ZvHAxJgWOfC2JxRq@cluster0.nrc8scc.mongodb.net/?retryWrites=true&w=majority'
const connectDB = async () => {
  await Mongoose.connect(localDB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  console.log("MongoDB Connected")
}
module.exports = connectDB