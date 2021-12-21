import { eventChannel } from "@redux-saga/core";
import { call, fork, put, take } from "@redux-saga/core/effects";
import { socket } from "constants/socket.io";
import { CommentActions } from "redux/actions/comment.action";
import { getNotification } from "redux/actions/notification.action";
import { hideStatusLoadingInput, showStatusLoadingInput, StatusAction } from "redux/actions/status.action";
import { getUserOnline } from "redux/actions/user.action";

function createSocketChannel() {
    return eventChannel(emit => {
        socket.on("connect", () => {
            console.log("connected");
        })
        socket.on("list-user", data => {
            emit(getUserOnline(data));
        });

        //status
        socket.on("add-status", newStatus => {
            emit(StatusAction.postStatusSuccess(newStatus));
        })

        socket.on("notify", newNotify => {
            console.log("newNotify", newNotify);
            emit(getNotification(newNotify));
        })

        socket.on("update-status", updateStatus => {
            emit(StatusAction.updateStatusSuccess(updateStatus));
        })

        socket.on("delete-status", deleteStatus => {
            emit(StatusAction.deleteStatusSuccess(deleteStatus));
        })

        socket.on('like-status', dataLike => {
            emit(StatusAction.updateStatusSuccess(dataLike));
        })

        socket.on('focus', dataFocus => {
            emit(showStatusLoadingInput(dataFocus));
        })

        socket.on('blur', dataFocus => {
            emit(hideStatusLoadingInput(""))
        })
        //comment
        socket.on("add-comment", dataComment => {
            emit(CommentActions.createCommentSuccess(dataComment));
        })

        socket.on("update-comment", dataUpdateComment => {
            emit(CommentActions.updateCommentSuccess(dataUpdateComment));
        })

        socket.on("like-comment", dataLikeComment => {
            emit(CommentActions.updateCommentSuccess(dataLikeComment));
        })

        socket.on("delete-comment", dataDeleteComment => {
            emit(CommentActions.deleteCommentSuccess(dataDeleteComment));
        })

        // create socket reconnect 
        socket.on("reconnect", () => {
            socket.socket.connect();
        })
        if (socket?.socket?.connected === false &&
            socket?.socket?.connecting === false) {
            console.log("socket is null");
            socket.socket.connect();
        }
        return () => {
            socket.removeAllListeners();
        };
    });
}

function* handleSocketEvent(socketChannel) {
    while (true) {
        const action = yield take(socketChannel);
        // console.log("action", action);
        yield put(action);
    }
}

export function* socketSaga() {
    //listen for socket.io events
    const socketChannel = yield call(createSocketChannel);
    //listen for user online event
    yield fork(handleSocketEvent, socketChannel);
}