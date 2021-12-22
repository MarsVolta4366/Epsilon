// DISPLAY REVIEWS BELOW REVIEW FORM
const React = require("react")
const Def = require("../default")

function show(data) {
    return (
        <Def>
            <main>
                <h1>Album: {data.album.name}</h1>
                <h2>Artist: {data.album.artist}</h2>
                <h2>Released: {data.album.releaseYear}</h2>
                <a href={`/albums/${data.album.id}/edit`}>Edit</a>
                <form method="POST" action={`/albums/${data.album.id}?_method=DELETE`}>
                    <input type="submit" value="Delete" />
                </form>

                {/* REVIEW FORM */}
                <form method="POST" action={`/albums/${data.album.id}/review`}>
                    <h2>Write a Review</h2>
                    <div>
                        <label htmlFor="author">Author: </label>
                        <input type="text" name="author" id="author" />
                    </div>
                    <div>
                        <label htmlFor="worthListeningTo">Worth a Listen?</label>
                        <input type="checkbox" name="worthListeningTo" id="worthListeningTo" />
                    </div>
                    <div>
                        <label htmlFor="stars">Star Rating: </label>
                        <input type="number" step={.5} max={5} name="stars" id="stars" />
                    </div>
                    <div>
                        <label htmlFor="content">Review: </label>
                        <textarea name="content" id="content" cols="30" rows="10"/>
                    </div>
                    <input type="submit" value="Submit Review" />
                </form>
            </main>
        </Def>
    )
}

module.exports = show