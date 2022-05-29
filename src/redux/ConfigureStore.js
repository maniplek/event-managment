import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import attendeeReducer from "./reducers/AttendeeReducer";



const reducer = combineReducers({
    attendees:attendeeReducer
    
}) 

const store = configureStore({
    reducer
}, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;