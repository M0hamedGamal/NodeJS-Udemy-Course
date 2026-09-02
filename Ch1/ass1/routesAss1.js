const reqHandler = (req, res) => {
    const url = req.url
    const method = req.method

    if (url === '/') {
        res.write(`<html>
                        <head>
                            <title>Courses</title>
                        </head>
                        <body>
                            <h1>Welcome Gemy</h1>
                            <form method="post" action="/create-user">
                                <input name="username" type="text" placeholder="Username" />
                                <button type="submit">Submit</button>
                            </form>
                        </body>
                   </html>`)
        return res.end()
    } else if (url === '/users') {
        res.write('<html><head><title>Courses</title></head><body><ul><li>User 1</li><li>User 2</li></ul></body></html>')
       return res.end()
    } else if (url === '/create-user' && method === 'POST') {
        const body = []
        req.on('data', (chunk) => {
            body.push(chunk)
        })

        return req.on('end', () => {
            const bufferedBody = Buffer.concat(body).toString()
            const username = bufferedBody.split('=')[1]
            console.log(username)
            res.write(`<html><head><title>A New User</title></head><body>Welcome, ${username}</body></html>`)
            res.statusCode = 302;
            res.setHeader('Location', '/')
            res.end()
        })
    }
}

module.exports = reqHandler