const React = require("react")
const Def = require("./default")

function home() {
    return (
        <Def>
            <main>
                <h1>HOME</h1>
                <p>Welcome to Epsilon! This is an application for adding albums and album reviews.</p>
            </main>
        </Def>
    )
}

module.exports = home