export const ADD_ATTENDEE = 'ADD_ATTENDEE';
export const DELETE_ATTENDEE = 'DELETE_ATTENDEE';

export const addAttendee  = ( data ) =>({
    type: ADD_ATTENDEE,
    payload: data,
});

export const deleteAttendee = ( id ) =>({
    type: DELETE_ATTENDEE,
    payload: id,
})




