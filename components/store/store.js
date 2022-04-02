import { createStore, applyMiddleware } from "redux";
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createWrapper, HYDRATE } from "next-redux-wrapper";
import reducers from "./rootReducers";

// const middleware = applyMiddleware(thunk);

const bindMiddleware = (middleWare) => {
    if (process.env.NODE_ENV !== 'production') {
        return composeWithDevTools(applyMiddleware(...middleWare))

    }
    return applyMiddleware(...middleWare)
}



const reducer = (state, action) => {
    if (action.type === HYDRATE) {
        const nextSate = {
            ...state,
            ...action.payload
        }
        return nextSate
    } else {
        return reducers(state, action)
    }
}
const initStore = () => {
    return createStore(reducer, bindMiddleware([thunk]))
};

export const wrapper = createWrapper(initStore)