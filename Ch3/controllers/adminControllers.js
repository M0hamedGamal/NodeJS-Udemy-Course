const getHome = (req, res, next) => {
    res.send('Welcome To Admin Dashboard!')
}

module.exports = {
    getHome
}