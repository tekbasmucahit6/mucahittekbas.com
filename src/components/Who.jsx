import React from 'react'
import mucahitjpg from "../img/mucahittekbas.jpg"

function Who() {
  return (
    <div className='container mx-auto w-3/4 grid grid-rows-3 border bg-gradient-to-r from-indigo-950 to-gray-900 p-5 rounded-b-3xl shadow-xl'>
        <div>
            <img className='mx-auto rounded-full w-44' src={mucahitjpg} alt="" />
        </div>
        <div className='my-5 grid grid-rows-2 justify-center items-center'>
            <strong className='text-white mx-auto font-semibold font-serif'>MÜCAHİT TEKBAŞ</strong>
            <i className='text-yellow-300 text-sm animate-pulse'>junior fullstack developer  </i>
        </div>

        <div className='grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-5 justfiy-center content-center'>
          <a href="mailto:tekbasmucahit6@gmail.com" className='bg-gradient-to-r from-sky-500 to-sky-900 hover:from-sky-900 hover:to-sky-500 text-center text-white font-semibold p-3 rounded-xl transition-all animate-pulse'>iletişime geç (mail)</a>
          <a href="https://www.instagram.com/mucahitxtekbs/" className='bg-gradient-to-r from-violet-600 to-pink-800 text-center hover:from-violet-800 hover:to-pink-600  text-white font-semibold p-3 rounded-xl transition-all animate-pulse'>iletişime geç (instagram)</a>
        </div>
    </div>
  )
}

export default Who
