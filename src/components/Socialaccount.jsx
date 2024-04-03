import React from 'react'

function Socialaccount({socialmedia,socialmediaımg,link,i}) {
    console.log(socialmedia,socialmediaımg,link,i)
  return (
    <div>
      <div className=' bg-white p-5 rounded-2xl border container mx-auto max-w-72 my-5  border-red-800'>
        <div className='grid grid-cols-2 justify-center content-center'>
            <div>
                {socialmediaımg}
            </div>
            <div>
                <strong className='text-sm'><a href={link}>{socialmedia}</a></strong>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Socialaccount
