import React from 'react'
import { useSelector } from 'react-redux'
import Attendee from './Attendee';

const AttendeeList = () => {
    const allAttendees = useSelector( state=> state.attendees)
    const confirmedAttendees = allAttendees.filter((attendee)=> attendee.status === 'Confirmed');
    const deniedAttendees = allAttendees.filter((attendee)=> attendee.status === 'Denied');
    return (
        <section className='flex flex-col p-3 '>
            <div className='self-end'>
              
            <span className="text-sm font-bold inline-block py-1 px-2 uppercase rounded text-green-600 bg-green-200 uppercase last:mr-0 mr-1">
            {`Confirmed Attendees : ${confirmedAttendees.length} `}
            </span>
            <span className="text-sm font-bold inline-block py-1 px-2 uppercase rounded text-green-600 bg-green-200 uppercase last:mr-0 mr-1">
            {`Denied Attendees : ${deniedAttendees.length} `}
            </span>
            </div>            
            
             <ul className=' self-center gap-5 p-5 '>
        
        {allAttendees.length === 0 ? <li>No Attendee</li> : (allAttendees.map((attendee)=>(
  
            <li className='row-span-2' key={attendee.id}>
            <Attendee name={attendee.name} email={attendee.email} status={attendee.status} id={attendee.id}/>
            </li>
            
        ))) }
      </ul>
        </section>
   
    
  )
}

export default AttendeeList
