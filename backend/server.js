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

const room='group';
io.on('connection',(socket)=>{
    console.log('A user connected',socket.id);

    socket.on('joinRoom',async (userName)=>{
        console.log(`${userName} is joining the grp`);
        
        await socket.join(room);//group naam ke room pr join ho jaiyega ..or join promise return krta hai to async krna hoga
        
        
        //usko chor kr sbko jaiyega
        // socket.to(room).emit('roomNotice',userName);
        socket.to(room).emit('roomNotice',{
            id: Date.now(),
            type:'system',
            text:`${userName} joined the grp😇`,
            ts: Date.now()
        });

    });

    socket.on('chatMsg',(msg)=>{
        console.log('Message received from client:', msg);
        //broadcast kr rhe hai
        socket.to(room).emit('chatMsg',msg);
    });
    socket.on('typing',(userName)=>{
        //broadcast
        socket.to(room).emit('typing',userName);
    });

    socket.on('stopTyping',(userName)=>{
        //broadcast
        socket.to(room).emit('stopTyping',userName);
    });

});

const PORT=3001;
expressServer.listen(PORT,()=>{
    console.log(`Server running on http://localhost:${PORT}`);
});