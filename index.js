// Delete .env from github
const express = require("express")
require("dotenv").config()
const methodOverride = require("method-override")

const app = express()

// MIDDLEWARE
app.set('views', __dirname + '/views')
app.set("view engine", "jsx")
app.engine("jsx", require("express-react-views").createEngine())
// Below line is needed to get info from req.body
app.use(express.urlencoded({extended: true}))
app.use(express.static("public"))
app.use(methodOverride("_method"))

app.use("/albums", require("./controllers/albums"))

app.get("/", (req, res) => {
    res.render("home")
})

app.get("*", (req, res) => {
    res.render("error404")
})

app.listen(process.env.PORT)