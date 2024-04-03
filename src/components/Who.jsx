import React from 'react'
import mucahitjpg from "../img/mucahittekbas.jpg"

function Who() {
  return (
    <div className='grid grid-rows-2'>
        <div>
            <img className='mx-auto rounded-full w-44' src={mucahitjpg} alt="" />
        </div>
        <div className='my-5 grid grid-rows-2 justify-center items-center'>
            <strong className='text-red-600 font-semibold animate-pulse px-2'>mücahit tekbaş</strong>
            <b className='bg-yellow-500 text-white animate-bounce p-2 rounded-xl'>web developer</b>
        </div>
    </div>
  )
}

export default Who
