const React = require("react")
const Def = require("../default")

function edit_form(data) {
    return (
        <Def>
            <main>
                <h1>Edit Album</h1>
                <form method="POST" action={`/albums/${data.album.id}?_method=PUT`}>
                    <div>
                        <label htmlFor="name">Album Name: </label>
                        <input type="text" name="name" id="name" defaultValue={data.album.name} />
                    </div>
                    <div>
                        <label htmlFor="artist">Artist: </label>
                        <input type="text" name="artist" id="artist" defaultValue={data.album.artist} />
                    </div>
                    <div>
                        <label htmlFor="releaseYear">Release Year: </label>
                        <input type="number" name="releaseYear" id="releaseYear" defaultValue={data.album.releaseYear} />
                    </div>
                    <input type="submit" />
                </form>
            </main>
        </Def>
    )
}

module.exports = edit_form