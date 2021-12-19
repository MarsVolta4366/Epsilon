const React = require("react")
const Def = require("../default")

function show(data) {
    return (
        <Def>
            <main>
                <h1>Album: {data.album.name}</h1>
                <h2>Artist: {data.album.artist}</h2>
                <h2>Released: {data.album.releaseYear}</h2>
                <form method="POST" action={`/albums/${data.album.id}?_method=DELETE`}>
                    <input type="submit" value="Delete" />
                </form>
            </main>
        </Def>
    )
}

module.exports = show