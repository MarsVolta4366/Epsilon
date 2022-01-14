const router = require("express").Router()
const db = require("../models")
const albumSeedData = require("../models/seed/albumSeed")

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

// SEED ALBUMS
router.get("/seed", async (req, res) => {
    try {
        await db.Album.insertMany(albumSeedData)
        res.redirect("/albums")
    } catch(error) {
        res.send("Error: " + error)
    }
})

// NEW ALBUM PAGE
router.get("/new", (req, res) => {
    res.render("albums/new")
})

// SHOW PAGE
router.get("/:id", (req, res) => {
    db.Album.findById(req.params.id)
        .populate({
            path: "reviews"
        })
        .then(album => {
            res.render("albums/show", {album})
        })
        .catch(err => {
            res.render("error404")
        })
})

// ALBUM DELETE
router.delete("/:id", (req, res) => {
    db.Album.findByIdAndDelete(req.params.id)
        .then(deletedAlbum => {
            res.status(303).redirect("/albums")
        })
        .catch(err => {
            res.render("error404")
        })
})

// EDIT ALBUM PAGE
router.get("/:id/edit", (req, res) => {
    db.Album.findById(req.params.id)
        .then(album => {
            res.render("albums/edit", {album})
        })
        .catch(error => {
            res.render("error404")
        })
})  

// ALBUM PUT 
router.put("/:id", (req, res) => {
    db.Album.findByIdAndUpdate(req.params.id, req.body)
        .then(() => {
            res.redirect(`/albums/${req.params.id}`)
        })
        .catch(error => {
            res.render("error404")
        })
})

// ALBUM POST
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

// REVIEW POST
// router.post("/:id/review", async (req, res) => {
//     req.body.worthListeningTo = req.body.worthListeningTo ? true : false
//     try {
//         const album = await db.Album.findById(req.params.id)
//         const review = await db.Review.create(req.body)
//         album.reviews.push(review.id)
//         await album.save()
//         res.redirect(`/albums/${req.params.id}`)
//     } catch(error) {
//         res.render("error404")
//     }

// })

router.post("/:id/review", (req, res) => {
    req.body.worthListeningTo = req.body.worthListeningTo ? true : false
    db.Review.create(req.body)
    res.redirect(`/albums/${req.params.id}`)
})

module.exports = router