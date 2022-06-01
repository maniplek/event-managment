import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addAttendee } from '../redux/actions/Actions';
import { v4 as uuidv4 } from 'uuid';
// import { Link } from 'react-router-dom';
 

const AttendeeForm = () => {
    const dispatch = useDispatch();
    const [ name , setName] = useState('');
    const [ surname , setSurName] = useState('');
    const [ telephone , setTelephone] = useState('');
    const [ email , setEmail] = useState('');
    const [ status , setStatus] = useState('');
    const [notification, setNotification] = useState('');
    const handleChange = (e) =>{
        const denied = document.getElementById('Status_Denied');
        const confirmed = document.getElementById('Status_Confirmed');

        if(e.target.id === 'name' ){
            setName(e.target.value)
        }
        if(e.target.id === 'surname' ){
            setSurName(e.target.value)
        }
        if(e.target.id === 'telephone' ){
            setTelephone(e.target.value)
        }
        if(e.target.id === 'email' ){
            setEmail(e.target.value)
        }
        if( denied.checked ){
            setStatus(denied.value)
        }
        if( confirmed.checked ){
            setStatus(confirmed.value)
        }

    }

    const handleSubmit =  ( e ) =>{

        e.preventDefault()
        setNotification('Attendee sucessfuly submitted');   
    
     const attend = {
         id:uuidv4(),
         name,
         surname,
         telephone,
         email,
         status
     }
     dispatch(addAttendee(attend))
    e.target.reset();
    }


  return (
    <div  className='flex flex-col items-center justify-center gap-9 m-9  '>
        <form onSubmit={handleSubmit} className='flex flex-col self-center p-5 '>
            <input className='appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'  required='required' type='text' name='name' onChange={handleChange} id='name' placeholder='ENTER YOUR NAME'/><br/>
            <input className='appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500' required='required' type='text' name='surname' onChange={handleChange} id='surname' placeholder='ENTER YOUR Surname'/><br/>
            <input className='appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500' required='required' type='text' name='telephone' onChange={handleChange} id='telephone' placeholder='PHONE NUMBER'/><br/>
            <input className='appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500' required='required' type='email' name='email' onChange={handleChange} id='email' placeholder='ENTER YOUR Email'/><br/>
            <div className=' flex'>

            <label htmlFor='Status_Denied'>Denied</label>
            <input type='checkbox' name='status' onChange={handleChange} id='Status_Denied'value='Denied' />
            <label htmlFor='Status_Confirmed'>Confirmed</label><br/>
            <input type='checkbox' id='Status_Confirmed' onChange={handleChange} name='status' value='Confirmed'  />
            </div>
          
        <button type='submit' className='shadow bg-green-600 hover:bg-green-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded my-2' >SEND</button>
     
        </form>
        <p className='text-green-700 p-3'  id='notification' onChange={handleSubmit}>{notification}</p> 
    </div>
  )
}

export default AttendeeForm