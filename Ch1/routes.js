const fs = require('fs');

const requestHandler = (req, res) => {
    const url = req.url;
    const method = req.method;

    if (url === '/') {
        res.write('<html lang="en">')
        res.write('<head><title>Type your Message</title></head>')
        res.write('<body><form method="post" action="/message"><input name="message" /><button type="submit">Submit</button></form></body>')
        res.write('</html>')

        return res.end()
    }
    if (url === '/message' && method === 'POST') {
        const body = []
        req.on('data', (chunk) => {
            body.push(chunk)
        })
        return req.on('end', () => {
            const bufferedBody = Buffer.concat(body).toString()
            const message = bufferedBody.split('=')[1]
            fs.writeFile('message.txt', message, (err) => {
                res.statusCode = 301
                res.setHeader('Location', '/')
                res.end()
            })
        })
    }

    res.setHeader('content-type', 'text/html; charset=utf-8');
    res.write('<h1 style="color:red">Hello World!</h1>');
    res.write('<h1>Hello Gemy!</h1>');
    res.end();
}

module.exports = requestHandler