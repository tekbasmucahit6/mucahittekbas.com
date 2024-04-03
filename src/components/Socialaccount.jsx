import React from 'react'

function Socialaccount({socialmedia,socialmediaımg,link,i,color}) {
  return (
    <div>
      <div className={color}>
        <div className='grid grid-cols-2 justify-center content-center'>
            <div>
                {socialmediaımg}
            </div>
            <div>
                <strong className='text-sm hover:text-red-800 transition-all text-white'><a href={link}>{socialmedia}</a></strong>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Socialaccount
