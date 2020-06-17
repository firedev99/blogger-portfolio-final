import React from 'react'
//components
import HomeLanding from './HomeLanding'
import SEO from '../seo'
import HomeIntro from './HomeIntro'
import HomeContacts from './HomeContacts'

const HomePage = () => {
    return (
        <>
            <SEO title="Home" />
            <HomeLanding />
            <HomeIntro />
            <HomeContacts />
        </>
    )
}

export default HomePage
