import React from 'react'
import {Link} from 'react-router-dom'

function Navbar() {
  return (
    <nav className="flex justify-between px-[20%] py-5 items-center bg-white">
        <h1 className="text-xl text-gray-800 font-bold"><a href='#'>Contract Auto</a></h1>
        <div className="flex items-center">
            <ul className="flex items-center space-x-6">
                <li className="hover:text-gray-900 text-gray-600"><a href='#'>Features</a></li>
                <li className="hover:text-gray-900 text-gray-600"><a href='#'>Plans & Pricing</a></li>
                <li className="hover:text-gray-900 text-gray-600"><a href='#'>Request a Demo</a></li>
                <li>
                    <Link to="/createaccount">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                    </Link>
                </li>
            </ul>
        </div>
    </nav>
  )
}

export default Navbar