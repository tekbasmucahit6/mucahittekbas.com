import React, { useEffect, useState } from 'react'

import Who from '../components/Who'
import Techs from '../components/Techs'
import Socialaccount from '../components/Socialaccount'
import Account from '../api/Account'
import Cv from '../components/Cv'
function Index() {
    const [social,setSocial] = useState([])

    useEffect(() => {
        setSocial(Account)
    },[])


  return (
    <div className='py-10'>
      <div className=''>
        <div className='mt-5'>
         <Who/>
        </div>

        <div className='mt-5'>
            <Cv />
        </div>
        
        
        
        <div className='mt-5'>
         {
            social.map((dt,i) => (
                <Socialaccount key={i} color={dt.color} socialmedia={dt.socialMedia} socialmediaımg={dt.socialMediaImg} link={dt.link} />
            ))
         }
        </div>
        
        
        <div className='mt-20'>
         <Techs/>
        </div>
        

      </div>
    </div>
  )
}

export default Index
