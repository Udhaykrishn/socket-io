const { log } = require('console');
const express = require('express')
const app = express();
const http = require('http').createServer(app)
const io = require('socket.io')(http)

app.get("/",(req,res)=>{    
    res.sendFile(__dirname + "/public/border.html");
})


app.get("/admin",(req,res)=>{    
    res.sendFile(__dirname + "/public/admin.html");
})

io.on('connection',(socket)=>{
    console.log("new connection established");

    socket.on("disconnect",()=>{
        console.log("connection closed");
    })

    socket.on('message',(msg)=>{
        io.emit('boardContent',msg);
    });

})





http.listen(3002,()=>{
    console.log("connect to server");
})