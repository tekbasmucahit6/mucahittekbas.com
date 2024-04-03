import React, { useEffect, useState } from 'react'

import Who from '../components/Who'
import Techs from '../components/Techs'
import Socialaccount from '../components/Socialaccount'
import Account from '../api/Account'
function Index() {
    const [social,setSocial] = useState([])

    useEffect(() => {
        setSocial(Account)
        console.log(social)
    },[])


  return (
    <div className='py-10'>
      <div className='grid  '>
         <Who/>
         {
            social.map((dt,i) => (
                <Socialaccount key={i} socialmedia={dt.socialMedia} socialmediaımg={dt.socialMediaImg} link={dt.link} />
            ))
         }
         <Techs/>
      </div>
    </div>
  )
}

export default Index
