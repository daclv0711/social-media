import { createActions } from "redux-actions";

export const CommentActions = createActions({
    getCommentRequest: undefined,
    getCommentSuccess: (payload) => payload,
    getCommentFailure: (err) => err,

    //create Comment
    createCommentRequest: (payload) => payload,
    createCommentSuccess: (payload) => payload,
    createCommentFailure: (err) => err,

    //update Comment
    updateCommentRequest: (payload) => payload,
    updateCommentSuccess: (payload) => payload,
    updateCommentFailure: (err) => err,

    //delete Comment
    deleteCommentRequest: (payload) => payload,
    deleteCommentSuccess: (payload) => payload,
    deleteCommentFailure: (err) => err,
});