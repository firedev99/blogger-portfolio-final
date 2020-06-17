import React from 'react'
import { LandingContainer, TravelKey, TravelTitle, TravelIntro } from '../../styles/travelLandingStyles'
import { Link } from 'gatsby';

const TravelLanding = () => {
    return (
        <LandingContainer>
            <img className="texture" src={require(`../../assests/texture.jpg`)} alt="Texture"/>
            <TravelKey>
                <Link to="/">
                    <span>Y</span>
                    <span className="line"></span>
                    <span>K</span>
                </Link>
            </TravelKey>
            <TravelTitle>
                <h1>84 videos in Youtube</h1>
                <h1>1.73M subscribers</h1>
            </TravelTitle>
            <TravelIntro>
                <div className="first_one">
                    <span>BLOG</span>
                    <span className="big_line"></span>
                    <span>&</span>
                </div>
                <div className="second_one">
                    AND
                </div>
                <div className="third_one">
                    TRIP WITH ME
                </div>
            </TravelIntro>
        </LandingContainer>
    )
}

export default TravelLanding
