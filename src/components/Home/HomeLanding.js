import React from 'react'
import { motion } from 'framer-motion'
import { LandingWrapper, LandingTitle, LandingSub, KeyName, LandingBg, LandingBgHeading, TicketCircle, LandingNavigation, LandingContentHeading, LandingContent, SocialLinks } from '../../styles/homeLandingStyles'
import { Link } from 'gatsby'

const fadeVariant = {
    fading: { opacity: 0 },
    faded: {
        opacity: 1,
        transition: {
            delay: 0.7,
            duration: 1.5,
            ease: [0.1,0.6,0.05,0.91]
        }
    }
}


const HomeLanding = () => {
    return (
        <LandingWrapper
            variants={fadeVariant}
            initial="fading"
            animate="faded"
        >
            <img className="texture" src={require(`../../assests/texture.jpg`)} alt="Texture" />
            <LandingTitle
                initial={{ y: -1000 }}
                animate={{ y: 0 }}
                transition={{ delay: 1, duration: 0.5, ease: [0.1,0.6,0.05,0.91] }}
            >
                Yusina Khatuns
            </LandingTitle>
            <LandingSub
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2, duration: 0.5, ease: [0.1,0.6,0.05,0.91] }}
            >
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
                <motion.img
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    transition={{dealy: 1.3, duration: 3, ease: [0.1,0.6,0.05,0.91] }}
                    className="landing_model" src={require(`../../assests/model.jpg`)} alt="Yusina Khatuns" 
                />
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
            <LandingContentHeading
                initial={{ x: 500 }}
                animate={{ x: 0 }}
                transition={{ delay: 1.6, duration: 0.7, ease: [0.1,0.6,0.05,0.91] }}
            >
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
            <LandingContent
                initial={{ x: 500 }}
                animate={{ x: 0 }}
                transition={{ delay: 1.6, duration: 0.7, ease: [0.1,0.6,0.05,0.91] }}
            >
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
