import React from 'react'
import { LandingWrapper, LandingTitle, LandingSub, KeyName, LandingBg, LandingBgHeading, TicketCircle, LandingNavigation, LandingContentHeading, LandingContent, SocialLinks } from '../../styles/homeLandingStyles'
import { Link } from 'gatsby'

const HomeLanding = () => {
    return (
        <LandingWrapper>
            <img className="texture" src={require(`../../assests/texture.jpg`)} alt="Texture" />
            <LandingTitle>
                Yusina Khatuns
            </LandingTitle>
            <LandingSub>
                TV Presenter, Youtuber, DJ
            </LandingSub>
            <KeyName>
                <Link to="/">
                    <span>Y</span>
                    <span className="line"></span>
                    <span>K</span>
                </Link>
            </KeyName>
            <LandingBg>
                <img className="landing_model" src={require(`../../assests/model.jpg`)} alt="Yusina Khatuns" />
                <LandingBgHeading>
                    <h1 className="talk">Talk</h1>
                    <h1 className="date">08/09/2020</h1>
                </LandingBgHeading>
            </LandingBg>
            <TicketCircle>
            <a href="tel:+880-173-359-437-9">buy ticket</a>
            </TicketCircle>
            <LandingNavigation>
                <li><Link to="/about-me/">About me</Link></li>
                <li><Link to="/travel-blogs/">travel blogs</Link></li>
                <li><Link to="/travel-with-me/">travel with me</Link></li>
            </LandingNavigation>
            <LandingContentHeading>
                <div className="content_dates">
                    <span>08/09</span>
                    <span className="big_line"></span>
                    <span>10/09</span>
                    <span>2020</span>
                </div>
                <div className="location">
                    abuja nigeria
                </div>
            </LandingContentHeading>
            <LandingContent>
                <p>
                    In 2017,he  became the host of
                    the new season of the popular 
                    travel program "Heads and Tails" 
                    together with Anastasla Ivleeva 
                    according to the, casting for the 
                    project managed the pass the 
                    first time.<br />
                    <span className="break">
                    The pair spent 65 issues together 
                    and an incomplete three seasons 
                    of Reboot.
                    </span>
                </p>
            </LandingContent>
            <SocialLinks>
                <a rel="noreferrer" href="https://www.instagram.com/tripyy_land/" target="_blank">YOUTUBE</a>
                <a rel="noreferrer" href="https://www.instagram.com/tripyy_land/" target="_blank">INSTRAGRAM</a>
            </SocialLinks>
        </LandingWrapper>
    )
}

export default HomeLanding
