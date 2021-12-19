const router = require("express").Router()
const db = require("../models")

router.get("/", (req, res) => {
    db.Album.find()
        .then(albums => {
            res.render("albums/index", {albums})
        })
        .catch(err => {
            console.log("ERR: " + err)
            res.render("error404")
        })
})

router.get("/new", (req, res) => {
    res.render("albums/new")
})

// SHOW PAGE
router.get("/:id", (req, res) => {
    db.Album.findById(req.params.id)
        .then(album => {
            res.render("albums/show", {album})
        })
        .catch(err => {
            res.render("error404")
        })
})

// DELETE ALBUM
router.delete("/:id", (req, res) => {
    db.Album.findByIdAndDelete(req.params.id)
        .then(deletedAlbum => {
            res.status(303).redirect("/albums")
        })
        .catch(err => {
            res.render("error404")
        })
})

// CREATE
router.post("/", (req, res) => {
    db.Album.create(req.body)
        .then(() => {
            res.redirect("/albums")
        })
        .catch(err => {
            console.log("ERR: " + err)
            res.render("error404")
        })
})

module.exports = router