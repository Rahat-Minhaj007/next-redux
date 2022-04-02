import { getData } from "../../../pages/api/hello";
import * as types from '../types/allPostTypes';

export const allPostAction = () => async (dispatch) => {
    try {
        dispatch({ type: types.START_LOADING_ALL_POST })
        const { data } = await getData();
        if (data) {
            dispatch({
                type: types.SUCCESSFUL_LOADING_ALL_POST,
                payload: data
            })
          
        }
    } catch (error) {
        dispatch({
            type: types.FAILED_LOADING_ALL_POST,
            payload: (error?.response && error?.response?.data?.message) ? error?.response?.data?.message : error?.message
        })
        
    }

}