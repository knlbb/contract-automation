import React from 'react'

function CreateAccount() {
  return (
    <div className="flex h-screen">
      <div className="w-1/2 flex h-screen justify-center">
        <button className="m-5 absolute left-0 h-12 font-bold pl-5 pr-5 mb-5 flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class="w-5 h-5 mr-2"><path fill="currentColor" d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"/></svg>
Contract Automation</button>
        <div className="m-auto w-1/2 relative">
          <h1 className="text-2xl font-bold mb-2">
            Create an Account
          </h1>
          <p className="text-sm mb-5">Let's get started with a 30 day free trial</p>
          <div>
            <input className="bg-transparent border-b-2 mb-5 mt-5 w-full h-10 focus:outline-0" placeholder="Name"/>
          </div>
          <div>
            <input className="bg-transparent border-b-2 mb-5 mt-5 w-full h-10 focus:outline-0" placeholder="Email"/>
          </div>
          <div>
            <input className="bg-transparent border-b-2 mb-5 mt-5 w-full h-10 focus:outline-0" placeholder="Password"/>
          </div>
          <div>
            <button className="bg-black rounded-full text-white font-bold h-12 mb-5 mt-5 w-full hover:bg-white hover:border-2 hover:border-black hover:text-black">Create Account</button>
          </div>
          <div>
            <button className="rounded-full border-2 h-12 font-bold mb-5 w-full">Sign Up with Google</button>
          </div>
        </div>
      </div>
      <div className="w-1/2 flex justify-center">
        <div className="p-2 relative">
          <button className="m-3 absolute right-3 rounded-full bg-black text-white h-12 font-bold pl-5 pr-5 mb-5">Log In</button>
          <img className="rounded-xl h-full" alt=""
            src="https://img.freepik.com/free-vector/business-man-shaking-hands-signed-contract_3446-646.jpg"/>
        </div>
      </div>
    </div>
  )
}

export default CreateAccount