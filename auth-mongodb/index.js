const express = require("express");
const connectDB = require("./db");
const cookieParser = require("cookie-parser");
const { adminAuth, userAuth } = require("./middleware/auth.js");
const app = express()
const PORT = 5000
connectDB();
app.set('port', process.env.PORT || PORT);
app.use(express.json())
app.use(cookieParser());
app.get("/admin", adminAuth, (req, res) => res.send("Admin Route"));
app.get("/basic", userAuth, (req, res) => res.send("User Route"));

app.get("/logout", (req, res) => {
    res.cookie("jwt", "", { maxAge: "1" })
    res.redirect("/")
})
app.use("/api/auth", require("./auth/route"))
const server = app.listen(app.get('port'), () =>
  console.log(`Server Connected to port ${app.get('port')}`)
)
process.on("unhandledRejection", err => {
    console.log(`An error occurred: ${err.message}`)
    server.close(() => process.exit(1))
  })