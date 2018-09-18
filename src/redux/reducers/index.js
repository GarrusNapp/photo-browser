import { combineReducers } from 'redux';
import { categoryReducer } from "./categoryReducer";
import { showReducer } from "./showReducer";

export default combineReducers({categories: categoryReducer, show: showReducer})
