import React from 'react'
import { TravelDisplayWrapper, DisplayOne, DisplayTwo, TravelDisplayTitle } from '../../styles/travelDisplayStyles'

const TravelDisplays = () => {
    return (
        <TravelDisplayWrapper>
            <DisplayOne>
                <img src={require(`../../assests/model-5.jpg`)} alt="Yusina Khatuns"/>
            </DisplayOne>
            <DisplayTwo>
                <img src={require(`../../assests/model-6.jpg`)} alt="Yusina Khatuns"/>
            </DisplayTwo>
            <TravelDisplayTitle>
                <h1>a nearly ideal</h1>
                <h1>Country</h1>
            </TravelDisplayTitle>
        </TravelDisplayWrapper>
    )
}

export default TravelDisplays
