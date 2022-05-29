import { ADD_ATTENDEE, DELETE_ATTENDEE } from "../actions/Actions";

const initialState = [];
const attendeeReducer = (state= initialState , action) =>{

    switch(action.type){

        case ADD_ATTENDEE:
            return [...state, action.payload];
        case DELETE_ATTENDEE:
            return state.filter((attendee)=> attendee.id !== action.payload );

        default: return state;

    }

}

export default attendeeReducer;