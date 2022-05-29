import {BsFacebook} from 'react-icons/bs'
import {AiFillLinkedin} from 'react-icons/ai'
import {AiFillInstagram} from 'react-icons/ai'
import React from 'react';
import { useState } from 'react'

const Contact = () => {
  const [fname , setName] =useState();
  const [lname , setLastName] =useState();
  const [email , setEmail] =useState();
  const [message , setMessage] =useState();

const handleClick = () =>{
  setName('');
  setLastName('');
  setEmail('');
  setMessage('');
}

  return (
    <div className="flex flex-row m-2 p-5">
      <div className="align-center py-20 mx-3">
      
      <p className="block uppercase tracking-wide text-green-700 text-xl font-bold m-4" htmlFor="grid-first-name">
        Event Managment
      </p>
      <p className="block lowercase tracking-wide text-gray-700 text-xl font-bold m-4" htmlFor="grid-first-name">
      Life is an event. Make it memorable. 
      </p>
      <p className="block lowercase tracking-wide text-gray-700 text-xl font-bold m-4" htmlFor="grid-first-name">
      <BsFacebook/>eventmanagment 
      </p>
      <p className="block lowercase tracking-wide text-gray-700 text-xl font-bold m-4" htmlFor="grid-first-name">
      <AiFillLinkedin/>eventManagment 
      </p>
      <p className="block lowercase tracking-wide text-gray-700 text-xl font-bold m-4" htmlFor="grid-first-name">
      <AiFillInstagram/>eventmanagment
      </p>
      
      
      </div>
      
      <form className="w-full max-w-lg">
      <p className="block uppercase tracking-wide text-green-700 text-xl font-bold m-4" htmlFor="grid-first-name">
        leave us your comment
      </p>
  <div className="flex flex-wrap -mx-3 mb-1">
    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
      
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-first-name">
        First Name
      </label>
      <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" value={fname} name='fname' id="grid-first-name" type="text" placeholder="Jhon"/>
      
    </div>
    <div className="w-full md:w-1/2 px-3">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-last-name">
        Last Name
      </label>
      <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" value={lname}  id="grid-last-name"  type="text" placeholder="Doe"/>
    </div>
  </div>
  <div className="flex flex-wrap -mx-3 mb-6">
    <div className="w-full px-3">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-password">
        E-mail
      </label>
      <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" value={email} id="email" type="email"  placeholder="jhonDoe@gmail.com"/>
    </div>
  </div>
  <div className="flex flex-wrap -mx-3 mb-6">
    <div className="w-full px-3">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-password">
        Message
      </label>
      <textarea className=" no-resize appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-48 resize-none" value={message} id="message" ></textarea>
    </div>
  </div>
  <div className="md:flex md:items-center">
    <div className="md:w-1/3">
      <button onClick={handleClick} className="shadow bg-green-600 hover:bg-green-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded my-2"  type="button">
        Send
      </button>
    </div>
    <div  className="md:w-2/3" ></div>
  </div>
</form>
    </div>
  )
}

export default Contact