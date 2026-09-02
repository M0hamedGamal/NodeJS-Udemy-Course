const errorNotFound = (req, res, next) => {
    const url = req.url
    console.log(url)
    res.status(404).send(`<h1>The ${url} URL is not found</h1>`)
}

module.exports = {
    errorNotFound,
}