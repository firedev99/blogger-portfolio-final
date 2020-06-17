import React from 'react'
import { LandingIntroWrapper, LandingIntroContent, LandingIntroBox, LandingIntroBg, LandingIntroDate, LandingIntroSocial } from '../../styles/homeIntroStyles'


const HomeIntro = () => {

    return (
        <LandingIntroWrapper>
            <LandingIntroContent>
                    <span className="intros_a">YOUTUBE Blogger /</span>
                    <span className="intros_b">Tv presenter/dj</span>
                    <span className="intros_c">Travel - music</span>
                    <span className="intros_d">EMotions</span>
                    <span className="intros_e">feelings</span>
                    <span className="intros_f">2020</span>
            </LandingIntroContent>
            <LandingIntroBox />
            <LandingIntroBg>
                <img className="intro_bg" src={require(`../../assests/model-2.jpg`)} alt="Intro_bg" />
            </LandingIntroBg>
            <LandingIntroDate>
                <div>
                    <span className="line"></span>
                    <span className="date">10/09</span>
                </div>
                <div>
                    <span className="year">2020</span>
                </div>
            </LandingIntroDate>
            <LandingIntroSocial>
                <a href="https://www.instagram.com/tripyy_land/">YOUTUBE</a>
                <a href="https://www.instagram.com/tripyy_land/">INSTRAGRAM</a>
            </LandingIntroSocial>
        </LandingIntroWrapper>
    )
}

export default HomeIntro
