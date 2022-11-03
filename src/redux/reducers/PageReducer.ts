
import { PagesDispatchTypes, PAGES_FAIL, PAGES_LOADING, PAGES_SUCCESS, PageType } from '../actions/PageActionsTypes';

export interface InitialStateI {
    loading: boolean,
    pages: PageType[]


}

const initialState: InitialStateI = {
    loading: false,
    pages: []
};


const pageReducer = (state: InitialStateI = initialState, action: PagesDispatchTypes): InitialStateI => {

    switch (action.type) {

        case PAGES_FAIL:
            return {
                ...state,
                loading: false
            }
        case PAGES_LOADING:
            return {
                ...state,
                loading: true
            }

        case PAGES_SUCCESS:
            return {
                ...state,
                loading: false,
                // pages: action.payload
            }
        default:
            return state;
    }
}

export default pageReducer;