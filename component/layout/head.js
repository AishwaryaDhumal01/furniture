import Head from "next/head";

import React from 'react'

const HeadPage = ({chidren,title}) => {
  return (
    <> 
     <Head>
        <title>{title || "Furni"}</title>
        {chidren}
     </Head>
    </>
  )
}

export default HeadPage
