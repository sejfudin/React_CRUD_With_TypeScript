import { combineReducers } from "redux";
import  pageReducer  from "./PageReducer";

const RootReducer = combineReducers({
   pages: pageReducer
})

export default RootReducer;