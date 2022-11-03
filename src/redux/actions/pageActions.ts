import axios from "axios";
import { BASE_URL } from "../../utils/constants";
import { PagesDispatchTypes, PAGES_LOADING, PAGES_FAIL, PAGES_SUCCESS, PageType } from "./PageActionsTypes";
import { Dispatch, AnyAction } from "redux";



export const GetPages = () => async (dispatch: Dispatch<AnyAction>) => {
    try {

        dispatch({
            type: PAGES_LOADING
        })
console.log(BASE_URL)
        const res = await axios.get(BASE_URL);
        console.log(res)

        dispatch({
            type: PAGES_SUCCESS,
            payload: res.data
        })
    } catch (error) {
        dispatch({
            type: PAGES_FAIL
        })
    }
}