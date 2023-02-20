import React from 'react'

function HomeFeatures() {
  return (
    <div className='justify-center flex flex-col grid grid-col mt-20 py-10 px-[15%] border-b-2 border-gray-100 m-24'>
        <img className="h-48" src="https://assets.website-files.com/5e9855559cdf4d431e202e55/5ed77ae201927f963bcf4ad7_document_automation_faq.svg"/>
        <h1 className='text-5xl mb-5 font-semibold'>
            Generate documents blazingly fast
        </h1>
        <h1 className='text-lg mb-10 text-gray-700'>
            Build and use your own document automation templates with ease.
        </h1>
        <div className='flex gap-5 mb-15'>
            <button className='bg-gray-900 hover:bg-gray-700 focus:outline-none rounded-xl h-12 px-5 text-white'>Get Started</button>
            <button className='border-2 border-gray-300 text-gray-900 hover:bg-gray-100 hover:border-gray-200 rounded-xl h-12 px-5'>Request Demo</button>
        </div>
    </div>
  )
}

export default HomeFeatures