import { LOADING_END, LOADING_MAIN_END, LOADING_MAIN_START, LOADING_START } from "constants/loading";

export const showLoading = () => ({
    type: LOADING_START,
});

export const hiddenLoading = () => ({
    type: LOADING_END,
});

export const loadingMain = () => ({
    type: LOADING_MAIN_START
})

export const hiddenLoadingMain = () => ({
    type: LOADING_MAIN_END
})