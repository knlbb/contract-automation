import React from 'react'
import {Link} from 'react-router-dom';

function Footer() {
  return (
    <div>
        <div className='justify-center items-center px-[20%] flex flex-col mt-20 py-10 pb-24'>
            <div className='grid grid-cols-4 gap-10 w-full pt-16'>
                <div className='flex flex-col '>
                    <h1 className='text-l font-semibold'>Legal</h1>
                    <Link to="/privacy-policy"><a className='text-sm text-gray-500 mt-2 hover:text-gray-900'>Privacy Policy</a></Link>
                    <Link to="/legal-notice"><a className='text-sm text-gray-500 mt-2 hover:text-gray-900'>Legal Notice</a></Link>
                </div>
                <div className='flex flex-col '>
                    <h1 className='text-l font-semibold'>Examples</h1>
                    <a href="" className='text-sm text-gray-500 mt-2 hover:text-gray-900'>Shareholder Agreement</a>
                    <a href="" className='text-sm text-gray-500 mt-2 hover:text-gray-900'>Sales & Purchase</a>
                    <a href="" className='text-sm text-gray-500 mt-2 hover:text-gray-900'>Non-Disclosure Agreement</a>
                    <a href="" className='text-sm text-gray-500 mt-2 hover:text-gray-900'>Employee Contract</a>
                </div>
                <div className='flex flex-col '>
                    <h1 className='text-l font-semibold'>Examples</h1>
                    <a href="" className='text-sm text-gray-500 mt-2 hover:text-gray-900'>Shareholder Agreement</a>
                    <a href="" className='text-sm text-gray-500 mt-2 hover:text-gray-900'>Sales & Purchase</a>
                    <a href="" className='text-sm text-gray-500 mt-2 hover:text-gray-900'>Non-Disclosure Agreement</a>
                    <a href="" className='text-sm text-gray-500 mt-2 hover:text-gray-900'>Employee Contract</a>
                </div>
                <div className='flex flex-col '>
                    <h1 className='text-l font-semibold'>Examples</h1>
                    <a href="" className='text-sm text-gray-500 mt-2 hover:text-gray-900'>Shareholder Agreement</a>
                    <a href="" className='text-sm text-gray-500 mt-2 hover:text-gray-900'>Sales & Purchase</a>
                    <a href="" className='text-sm text-gray-500 mt-2 hover:text-gray-900'>Non-Disclosure Agreement</a>
                    <a href="" className='text-sm text-gray-500 mt-2 hover:text-gray-900'>Employee Contract</a>
                </div>
                
            </div>
            <h1 className='mt-24 text-gray-400'>Copyright © 2023 Contract Auto. All rights reserved.</h1>
        </div>
    </div>
  )
}

export default Footer