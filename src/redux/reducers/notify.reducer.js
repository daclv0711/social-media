import { GET_NOTIFICATION_STATUS } from "constants/notification";

const initialState = {
    notifyStatus: [],

}

const notifyReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_NOTIFICATION_STATUS:
            return {
                ...state,
                notifyStatus: [action.payload, ...state.notifyStatus]
            }
        default:
            return state
    }
}

export default notifyReducer;