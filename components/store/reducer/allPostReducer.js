import * as types from "../types/allPostTypes";

const allPostReducer = (state = {}, action) => {
    switch (action.type) {
        case types.START_LOADING_ALL_POST: {
            return { ...state, loading: true, error: "" };
        }
        case types.SUCCESSFUL_LOADING_ALL_POST: {
            return { ...state, loading: false, getPostList: action.payload }
        }
        case types.FAILED_LOADING_ALL_POST: {
            return { ...state, loading: false, error: action.payload }
        }
        default: {
            return state
        }
    }

}

export default allPostReducer;