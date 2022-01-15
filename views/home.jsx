const React = require("react")
const def = require("./default")

function home() {
    return (
        <def>
            <main>
                <h1>HOME</h1>
                <p>Welcome! This is an application for adding albums and album reviews.</p>
            </main>
        </def>
    )
}

module.exports = home