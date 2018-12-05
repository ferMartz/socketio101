// We need http because we don't have express
const http = require('http')
// We need socketio ...its 3rd party
const socketio = require('socket.io')

const server = http.createServer((req,res)=>{
    res.end("I am connected")
})

const io = socketio(server)

io.on('connection', (socket,req)=>{
    // ws.send because socket.emit
    socket.emit('welcome','Welcome to the websocket server!')
    socket.on('message',(msg)=>{
        console.log(msg)
    })
})

server.listen(8000)