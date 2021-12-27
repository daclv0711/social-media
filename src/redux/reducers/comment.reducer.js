const { getType } = require("redux/actions")
const { CommentActions } = require("redux/actions/comment.action")

const initialState = {
    comments: [],
    contentComment: "",
}

const commentReducer = (state = initialState, action) => {
    switch (action.type) {
        case getType(CommentActions.getContentComment):
            return {
                ...state,
                contentComment: action.payload,
            }
        case getType(CommentActions.getCommentSuccess):
            return {
                ...state,
                comments: action.payload,
            }
        case getType(CommentActions.createCommentSuccess):
            return {
                ...state,
                comments: [...state.comments, action.payload]
            }
        case getType(CommentActions.updateCommentSuccess):
            return {
                ...state,
                comments: state.comments.map(comment => {
                    if (comment._id === action.payload._id) {
                        return action.payload
                    } else {
                        return comment
                    }
                })
            }
        case getType(CommentActions.deleteCommentSuccess):
            return {
                ...state,
                comments: state.comments.filter(comment => comment._id !== action.payload._id)
            }
        default:
            return state
    }
}

export default commentReducer;