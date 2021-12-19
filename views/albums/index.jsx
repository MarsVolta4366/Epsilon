const React = require("react")
const Def = require("../default")

function index(data) {
    let albumsFormatted = data.albums.map((album, index) => {
        return (
            <div key={index}>
                <h2>
                    <a href={`/albums/${album.id}`}>
                        Album: {album.name}
                    </a>
                </h2>
                <p>Artist: {album.artist}</p>
                <p>Released: {album.releaseYear}</p>
            </div>
        )
    })

    return (
        <Def>
            <main>
                <h1>Albums</h1>
                <div>
                    {albumsFormatted}
                </div>
            </main>
        </Def>
    )
}

module.exports = index