import { fork, takeLatest, takeEvery } from "@redux-saga/core/effects";
import { CommentActions } from "redux/actions/comment.action";
import { StatusAction } from "redux/actions/status.action";
import { UserAction } from "redux/actions/user.action";
import { socketSaga } from "./socket.io";
import * as status from "./status.saga";
import * as user from "./user.saga";
import * as comment from "./comment.saga";

function* mySaga() {

    //user
    yield takeLatest(UserAction.postSignInRequest, user.signInSaga);
    yield takeLatest(UserAction.postSignUpRequest, user.signUpSaga);
    yield takeLatest(UserAction.postSignOutRequest, user.signOutSaga);
    yield takeLatest(UserAction.getUserRequest, user.getMeSaga);
    yield takeLatest(UserAction.updateUserRequest, user.updateUserSaga);
    yield takeLatest(UserAction.changePasswordRequest, user.changePasswordSaga);
    //status
    yield takeLatest(StatusAction.getStatusRequest, status.getStatusSaga);
    yield takeLatest(StatusAction.postStatusRequest, status.postStatusSaga);
    yield takeLatest(StatusAction.likeStatusRequest, status.likeStatusSaga);
    yield takeLatest(StatusAction.updateStatusRequest, status.updateStatusSaga);
    yield takeLatest(StatusAction.deleteStatusRequest, status.deleteStatusSaga);

    //comment
    yield takeEvery(CommentActions.getCommentRequest, comment.getCommentsSaga);
    yield takeLatest(CommentActions.createCommentRequest, comment.createCommentSaga);
    yield takeLatest(CommentActions.updateCommentRequest, comment.updateCommentSaga);
    yield takeLatest(CommentActions.deleteCommentRequest, comment.deleteCommentSaga);
    //socket.io connection
    yield fork(socketSaga)
}

export default mySaga;