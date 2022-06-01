import React from 'react'
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'


const AttendeeDetail = () => {
    const { id }= useParams();
    const allAttendees = useSelector((state)=> state.attendees);
  return (
    <>
        {allAttendees.filter((attend)=> attend.id === id).map((attendee_person)=>(
          
            <div className='flex flex-col items-center text-lg  p-3 ' key={id}>
              <h2 className='text-green-700 font-extrabold'>ATTENDEE DETAILS</h2>
                    <h3>{` First Name: ${attendee_person.name} `} </h3>
                    <h3>{` Last Name: ${attendee_person.surname} `} </h3>
                    <h3>{`  Email: ${attendee_person.email} `}</h3>
                    <h3>{`  TELEPHONE Number: ${attendee_person.telephone} `}</h3>
                    <h3>{`  ATTENDING STATUS: ${attendee_person.status} `}</h3>
            </div>
           
        ) )}
    </>
  )
}

export default AttendeeDetail