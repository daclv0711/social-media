import { createComment, deleteComment, getComment, updateComment } from "apis/api";
import { call, put } from "redux-saga/effects";
import { CommentActions } from "redux/actions/comment.action";


export function* getCommentsSaga() {
    try {
        const comments = yield call(getComment);
        yield put(CommentActions.getCommentSuccess(comments.data.comments));
    } catch (error) {
        yield put(CommentActions.getCommentFailure(error));
    }
}

export function* createCommentSaga({ payload }) {
    try {
        yield call(createComment, payload._id, payload.data);
        // yield put(CommentActions.createCommentSuccess(newComment.data.comment));
    } catch (error) {
        yield put(CommentActions.createCommentFailure(error));
    }
}

export function* updateCommentSaga({ payload }) {
    try {
        yield call(updateComment, payload._id, payload.data);
        // yield put(CommentActions.updateCommentSuccess(updatedComment.data.comment));
    } catch (error) {
        yield put(CommentActions.updateCommentFailure(error));
    }
}

export function* deleteCommentSaga({ payload }) {
    try {
        yield call(deleteComment, payload.statusId, payload._id);
        // yield put(CommentActions.deleteCommentSuccess(deletedComment.data.comment));
    } catch (error) {
        yield put(CommentActions.deleteCommentFailure(error));
    }
}