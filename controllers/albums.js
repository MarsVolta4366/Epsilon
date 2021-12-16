const router = require("express").Router()

router.get("/", (req, res) => {
    res.render("albums/index")
})

module.exports = router