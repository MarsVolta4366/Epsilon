const React = require("react")

function def(html) {
    return (
        <html lang="en">
        <head>
            <meta charSet="UTF-8" />
            <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>Epsilon</title>
            {/* CSS */}
            <link rel="stylesheet" href="/css/styles.css" />
        </head>
        <body>
            <nav>
                <ul>
                    <li>
                        <a href="/">Home</a>
                    </li>
                    <li>
                        <a href="/albums">Albums</a>
                    </li>
                    <li>
                        <a href="/albums/new">Add Album</a>
                    </li>
                </ul>
            </nav>
            {html.children}
        </body>
        </html>
    )
}

module.exports = def