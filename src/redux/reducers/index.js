import attendeeReducer from "./AttendeeReducer";
import { combineReducers } from "redux";

const allReducers = combineReducers({
    attendeeReducer
});

export default allReducers;
