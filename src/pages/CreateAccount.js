import React from 'react'

function CreateAccount() {
  return (
    <div className="flex mt-[10%]">
      <div className="w-1/2 h-1/2 flex justify-center">
        <div className="m-auto w-1/2 relative">
          <h1 className="text-2xl font-bold mb-2">
            Log In
          </h1>
          <p className="text-sm mb-5">Sign in now to access your account</p>
          <div>
            <input className="bg-transparent border-b-2 mb-5 mt-5 w-full h-10 focus:outline-0" placeholder="Email"/>
          </div>
          <div>
            <input className="bg-transparent border-b-2 mb-5 mt-5 w-full h-10 focus:outline-0" placeholder="Password"/>
          </div>
          <div>
            <button className="bg-black rounded-full text-white font-bold h-12 mb-5 mt-5 w-full hover:bg-white hover:border-2 hover:border-black hover:text-black">Login</button>
          </div>
          <div>
            <button className="rounded-full border-2 h-12 font-bold mb-5 w-full">Log In with Google</button>
          </div>
        </div>
      </div>
      <div className="w-1/2 flex justify-center border-l-2">
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
            <input className="bg-transparent border-b-2 mb-5 mt-5 w-full h-10 focus:outline-0" placeholder="Confirm Password"/>
          </div>
          <div>
            <button className="bg-black rounded-full text-white font-bold h-12 mb-5 mt-5 w-full hover:bg-white hover:border-2 hover:border-black hover:text-black">Create Account</button>
          </div>
          <div>
            <button className="rounded-full border-2 h-12 font-bold mb-5 w-full">Sign Up with Google</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CreateAccount