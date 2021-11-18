import { combineReducers } from "redux";
import user from "./user.reducer";
import status from "./status.reducer";
import loading from "./loading.reducer";
export default combineReducers({
    user,
    status,
    loading
})