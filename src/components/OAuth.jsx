import React from 'react'
import { FcGoogle } from 'react-icons/fc'

const OAuth = () => {
  return (

<button className='text-white w-full flex items-center justify-center bg-red-700 uppercase py-3 px-7 text-sm font-medium hover:bg-red-700 active:bg-red-900 shadow-md hover:shadow-lg active:shadow-lg transition ease-in-out duration-150 rounded'>
 <FcGoogle className='text-2xl bg-white rounded-full mr-2'/>  
 Continue with Google
 </button>
  )
}

export default OAuth