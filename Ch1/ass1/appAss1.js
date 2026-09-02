const http = require('http')
const routesAss1 = require('./routesAss1')


const server = http.createServer(routesAss1)


server.listen(4000)
