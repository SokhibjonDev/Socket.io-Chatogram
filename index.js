const express = require('express')
const app = express()
const server = require('http').createServer(app)
const io = require('socket.io')(server)
const path = require('path')

app.use(express.static(path.join(__dirname, 'public')))

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'))
})

io.on('connection', (socket) => {
    console.log('New WS connected...');

    socket.on('msg', (msg) => {
        socket.broadcast.emit('msg', msg) // bu o'ziga ko'rinmiydi boshqa userlarga ko'rinadi
    })
})

const PORT = 3000 || process.env.PORT

server.listen(3000, () => console.log(`Server working on port ${PORT}`))