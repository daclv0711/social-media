import { LOADING_END, LOADING_MAIN_END, LOADING_MAIN_START, LOADING_START } from "constants/loading"

const initialState = {
    loading: false,
    loadingMain: false,
}

const loadingReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOADING_START:
            return {
                ...state,
                loading: true,
            }
        case LOADING_END:
            return {
                ...state,
                loading: false,
            }
        case LOADING_MAIN_START:
            return {
                ...state,
                loadingMain: true,
            }
        case LOADING_MAIN_END:
            return {
                ...state,
                loadingMain: false,
            }
        default:
            return state
    }
}

export default loadingReducer;