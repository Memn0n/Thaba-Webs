'use client'

import { FacebookProvider, CustomChat } from 'react-facebook';

const FacebookMsg = () => {
  return (
    <FacebookProvider appId="221031127703341" chatSupport>
        <CustomChat pageId="271545676032343" minimized={true}/>
      </FacebookProvider>  
  )
}

export default FacebookMsg
