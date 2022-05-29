import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
      <nav className='flex justify-between items-center text-lg p-8  bg-green-400 m-9'>
        <h1 className='font-bold'> Event Managment </h1>
          <div className='flex justify-between gap-5'  >
        <Link to='/' className='font-semibold'>Home</Link>
        <Link to='/Add-Attendee' className='font-semibold'>Add Attendee</Link> 
        <Link to='/Contact' className='font-semibold'>Contact</Link>
    </div>
      </nav>
    
  )
}

export default NavBar