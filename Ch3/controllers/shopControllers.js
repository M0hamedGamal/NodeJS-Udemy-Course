const getHome = (req, res, next) => {
    res.send('Welcome To Home Page!')
}

module.exports = {
    getHome
}