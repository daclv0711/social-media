import { eventChannel } from "@redux-saga/core";
import { call, fork, put, take } from "@redux-saga/core/effects";
import { socket } from "constants/socket.io";
import { getUserOnline } from "redux/actions/user.action";

function createSocketChannel() {
    return eventChannel(emit => {
        socket.on("connect", () => {
            console.log("connected");
        })
        socket.on("list-user", data => {
            emit(getUserOnline(data));
        });

        socket.on('like-status', dataLike => {
            console.log("dataLike", dataLike);
        })

        // create socket reconnect 
        if (socket?.socket?.connected === false &&
            socket?.socket?.connecting === false) {
            console.log("socket is null");
            socket.socket.connect();
        }
        return () => { };
    });
}

function* handleSocketEvent(socketChannel) {
    while (true) {
        const action = yield take(socketChannel);
        console.log("action", action);
        yield put(action);
    }
}

export function* socketSaga() {
    //listen for socket.io events
    const socketChannel = yield call(createSocketChannel);
    //listen for user online event
    yield fork(handleSocketEvent, socketChannel);
}