import React from 'react'

function HomeLanding() {
  return (
    <div className='justify-center items-center flex flex-col mt-20 py-10 border-b-2 border-gray-100 m-24'>
        <h1 className='text-5xl mb-5 font-semibold'>
               Create Contracts within minutes. 
            </h1>
            <h1 className='text-lg mb-10 text-gray-700'>
                Build and use your own document automation templates with ease.
            </h1>
            <div className='flex gap-5 mb-15'>
                <button className='bg-gray-900 hover:bg-gray-700 focus:outline-none rounded-xl h-12 px-5 text-white'>Get Started</button>
                <button className='border-2 border-gray-300 text-gray-900 hover:bg-gray-100 hover:border-gray-200 rounded-xl h-12 px-5'>Request Demo</button>
            </div>

            <div class="flex justify-center mt-12 gap-5">
                <div class="rounded-lg shadow-lg bg-white max-w-sm">
                    <a href="#!" data-mdb-ripple="true" data-mdb-ripple-color="light">
                    <img class="rounded-t-lg" src="https://mdbootstrap.com/img/new/standard/nature/182.jpg" alt=""/>
                    </a>
                    <div class="p-6">
                    <h5 class="text-gray-900 text-xl font-medium mb-2">Card title</h5>
                    <p class="text-gray-700 text-base mb-4">
                        Some quick example text to build on the card title and make up the bulk of the card's
                        content.
                    </p>
                    <button type="button" class=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Button</button>
                    </div>
                </div>

                <div class="rounded-lg shadow-lg bg-white max-w-sm">
                    <a href="#!" data-mdb-ripple="true" data-mdb-ripple-color="light">
                        <img class="rounded-lg h-full" src="https://www.ignitec.com/wp-content/uploads/2019/12/Free-Non-Disclosure-Agreement-template-to-keep-your-next-product-idea-safe-icon.png" alt=""/>
                    </a>
                    {/* <div class="p-6">
                        <h5 class="text-gray-900 text-xl font-medium mb-2">Card title</h5>
                        <p class="text-gray-700 text-base mb-4">
                            Some quick example text to build on the card title and make up the bulk of the card's
                            content.
                        </p>
                        <button type="button" class=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Button</button>
                    </div> */}
                </div>

                <div class="rounded-lg shadow-lg bg-white max-w-sm">
                    <a href="#!" data-mdb-ripple="true" data-mdb-ripple-color="light">
                    <img class="rounded-t-lg" src="https://mdbootstrap.com/img/new/standard/nature/182.jpg" alt=""/>
                    </a>
                    <div class="p-6">
                    <h5 class="text-gray-900 text-xl font-medium mb-2">Card title</h5>
                    <p class="text-gray-700 text-base mb-4">
                        Some quick example text to build on the card title and make up the bulk of the card's
                        content.
                    </p>
                    <button type="button" class=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Button</button>
                    </div>
                </div>
            </div>
    </div>
  )
}

export default HomeLanding