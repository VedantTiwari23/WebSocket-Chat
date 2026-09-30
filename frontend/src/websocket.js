import {io} from 'socket.io-client';
export function connectWS(){
    //io() ek socket return krega
    return io('http://localhost:3001');
};
