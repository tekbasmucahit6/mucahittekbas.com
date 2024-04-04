import React from 'react'
import mucahitjpg from "../img/mucahittekbas.jpg"

function Who() {
  return (
    <div className='grid grid-rows-2'>
        <div>
            <img className='mx-auto rounded-full w-44' src={mucahitjpg} alt="" />
        </div>
        <div className='my-5 grid grid-rows-2 justify-center items-center'>
            <strong className='text-red-600 font-semibold  px-2'>MÜCAHİT TEKBAŞ</strong>
            <b className='bg-yellow-400 transition-all text-white text-center animate-pulse p-2 rounded-xl'>web developer</b>
        </div>
    </div>
  )
}

export default Who
