import { combineReducers } from "redux";
import allPostReducer from "./reducer/allPostReducer";

const reducers = combineReducers({
    getAllPostList: allPostReducer,
})

export default reducers