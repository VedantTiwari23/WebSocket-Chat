import {Server} from 'socket.io';
import express from 'express';
import {createServer} from 'node:http';

const app=express();
const expressServer=createServer(app);

const io= new Server(expressServer,{
    //backend me course configure kr rha hu
    cors: {
        origin: "http://localhost:5173"
    }
});

io.on('connection',(socket)=>{
    console.log('A user connected',socket.id);
});

const PORT=3001;
expressServer.listen(PORT,()=>{
    console.log(`Server running on http://localhost:${PORT}`);
})