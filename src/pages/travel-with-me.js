import React from 'react'
//components 
import Layout from '../components/layout'
import TravelLanding from '../components/Travel/TravelLanding'
import TravelAbout from '../components/Travel/TravelAbout'
import TravelDisplays from '../components/Travel/TravelDisplays'


const Travel = () => {
    return (
        <Layout>
            <TravelLanding />
            <TravelAbout />
            <TravelDisplays />
        </Layout>
    )
}

export default Travel
