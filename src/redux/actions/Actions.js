export const ADD_ATTENDEE = 'ADD_ATTENDEE';
export const DELETE_ATTENDEE = 'DELETE_ATTENDEE';
export const EDIT_ATTENDEE = 'EDIT_ATTENDEE';

export const addAttendee  = ( data ) =>({
    type: ADD_ATTENDEE,
    payload: data,
});

export const deleteAttendee = ( id ) =>({
    type: DELETE_ATTENDEE,
    payload: id,
});

export const editAttendee = ( id ) =>({
    type: EDIT_ATTENDEE,
    payload: id,
});




