import io from 'socket.io-client';
import { baseUrl } from './api';

export const socket = new io.connect(`${baseUrl}`, {
    path: '/socket',
    reconnect: true,
    reconnectionDelay: 1000,
    reconnectionDelayMax: 5000,
    reconnectionAttempts: 10,
    transports: ['polling'],
});