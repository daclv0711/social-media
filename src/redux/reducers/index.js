import { combineReducers } from "redux";
import user from "./user.reducer";
import status from "./status.reducer";
import loading from "./loading.reducer";
import comment from "./comment.reducer";
import notify from "./notify.reducer";

export default combineReducers({
    user,
    status,
    loading,
    comment,
    notify
})