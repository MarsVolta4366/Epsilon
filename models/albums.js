const mongoose = require("mongoose")

const albumSchema = new mongoose.Schema({
    name: {type: String, required: true},
    artist: {type: String, required: true},
    releaseYear: Number,
    reviews: [{type: mongoose.Schema.Types.ObjectId, ref: "Review"}]
})

module.exports = mongoose.model("Album", albumSchema)