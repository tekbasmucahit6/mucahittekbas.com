import React from 'react'
import mucahitjpg from "../img/mucahittekbas.jpg"

function Who() {
  return (
    <div className='container mx-auto w-3/4 grid grid-rows-2 border bg-gradient-to-r from-indigo-950 to-gray-900 p-5 rounded-b-3xl'>
        <div>
            <img className='mx-auto rounded-full w-44' src={mucahitjpg} alt="" />
        </div>
        <div className='my-5 grid grid-rows-2 justify-center items-center'>
            <strong className='text-white font-semibold mx-auto'>MÜCAHİT TEKBAŞ</strong>
            <i className='text-yellow-300 text-sm'>web developer - junior frontend developer  </i>
        </div>
    </div>
  )
}

export default Who
