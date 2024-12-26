import React from 'react'
import { useLocation, useNavigate } from 'react-router'

const Header = () => 
{
    const location = useLocation();
    const navigate = useNavigate();
    const pathMatch = (route) =>
        {
            if(route===location.pathname)
            {
                return true;
            }
        }    
  return (
    <div  className='bg-white border-b shadow-sm sticky top-0 z-50'>
        <header className='flex justify-between items-center px-3 max-w-6xl mx-auto'>
            <div>
                <img src='https://static.rdc.moveaws.com/rdc-ui/logos/logo-brand.svg' alt='Logo'
                className='h-5 cursor-pointer'
                onClick={()=>navigate("/")}
                />
            </div>
                <div>
                    <ul className='flex space-x-10 '>
                    <li className={`cursor-pointer py-3 font-bold text-sm border-b-[3px]
                  ${pathMatch("/") ?   'text-black border-b-red-500'  : "text-gray-400 border-b-transparent"}`}
                        onClick={()=>navigate("/")}>Home</li>
                    <li className={`cursor-pointer py-3 font-bold text-sm border-b-[3px]
                       ${pathMatch("/offers") ?   'text-black border-b-red-500'  : "text-gray-400 border-b-transparent"}`}
                        onClick={()=>navigate("/offers")}>Offers </li>
                    <li className={`cursor-pointer py-3 font-bold text-sm border-b-[3px]
                        ${pathMatch("/sign-in") ?   'text-black border-b-red-500'  : "text-gray-400 border-b-transparent"}`}
                        onClick={()=>navigate("/sign-in")}>SignIn</li>
                    </ul>
                </div>
        </header>
    </div>
  )
}

export default Header

