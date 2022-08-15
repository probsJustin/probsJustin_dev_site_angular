import { Injectable } from '@angular/core';
import { io } from 'socket.io-client';
import SocketIO from 'socket.io';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SocketioService {

  
  socketio: any;

  constructor() { 
    this.socketio = io(environment.SOCKET_ENDPOINT);

    this.socketio.on('connection', (socket: any) => {
      socket.on('chat message', (msg: any) => {
        socket.emit('chat message', msg);
      });
    });
    }

  setupSocketConnection() {
    this.socketio.emit('my message', 'Hello there from Angular.');

  }
}
