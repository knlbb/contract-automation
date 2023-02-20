import React from 'react'

function HomeFeatures() {
  return (
    <>
    <div className='grid grid-cols-2 py-10 px-[5%] border-b-2 border-gray-100 m-24'>
        <div className='flex justify-center'>
            <img class="rounded-lg h-full" src="https://www.ignitec.com/wp-content/uploads/2019/12/Free-Non-Disclosure-Agreement-template-to-keep-your-next-product-idea-safe-icon.png" alt=""/>
        </div>
        <div className='p-10'>
            <h1 className='text-5xl mb-5 font-semibold'>
                Generate documents blazingly fast
            </h1>
            <h1 className='text-lg mb-10 text-gray-700'>
                Once you've experienced the magic of document automation, you might never look back. Stop spending hours on drafts. Create even the most complex documents within minutes.
            </h1>
            <h1 className='text-lg mb-10 text-gray-700'>
                It's as easy as answering a questionnaire and watching your document being created in real-time. You're always in control.
            </h1>

        </div>
    </div>
    <div className='grid grid-cols-2 py-10 px-[5%] border-b-2 border-gray-100 m-24'>
        <div className='p-10'>
            <h1 className='text-5xl mb-5 font-semibold'>
                Make content available to anyone you want
            </h1>
            <h1 className='text-lg mb-10 text-gray-700'>
                Use our publications feature to give clients, team members or whole departments self-service access to automated document templates.            </h1>
        </div>
        <div className='flex justify-center'>
            <img class="rounded-lg h-full" src="https://www.ignitec.com/wp-content/uploads/2019/12/Free-Non-Disclosure-Agreement-template-to-keep-your-next-product-idea-safe-icon.png" alt=""/>
        </div>
    </div>
    </>

  )
}

export default HomeFeatures