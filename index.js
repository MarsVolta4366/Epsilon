const express = require("express")
const app = express()
require("dotenv").config()

// MIDDLEWARE
app.set('views', __dirname + '/views')
app.set("view engine", "jsx")
app.engine("jsx", require("express-react-views").createEngine())
app.use(express.static("public"))

app.use("/albums", require("./controllers/albums"))

app.get("/", (req, res) => {
    res.render("home")
})

app.get("*", (req, res) => {
    res.render("error404")
})

app.listen(process.env.PORT)