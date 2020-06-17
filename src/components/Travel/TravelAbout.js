import React from 'react'
import { TravelAboutWrapper, AboutYear, TravelAboutBg, TravelAboutHeading, TravelAboutContent } from '../../styles/travelAboutStyles'

const TravelAbout = () => {
    return (
        <TravelAboutWrapper>
            <AboutYear>
                2018
            </AboutYear>
            <TravelAboutBg>
                <img src={require(`../../assests/model-4.jpg`)} alt=""/>
            </TravelAboutBg>
            <TravelAboutHeading>
                YUSHI & MUSHI
            </TravelAboutHeading>
            <TravelAboutContent>
                <p>
                    <span className="first_para">
                        In 2018, she became the host of the 
                        travel show "YUSHI & MUSHI" together
                        with Anastasia Iveleeva. In his own 
                        words, the casting for the project 
                        was completed the first time. <br />
                    </span>
                    <span className="second_para">
                        The couple spend 65 issues and the 
                        incomplete three seasons of the 
                        "Reset". In July 2019, Yushina Khatun
                        announced his retirement from Yushi
                        & Mushi.Neigther he nor the leader-
                        ship of TeenSpirit Studio specified
                        the exact reasons for leaving. He was
                        replaced by Evsey Kovalev.
                    </span>
                </p>
            </TravelAboutContent>
        </TravelAboutWrapper>
    )
}

export default TravelAbout
