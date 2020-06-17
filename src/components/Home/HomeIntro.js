import React, { useEffect } from 'react'
import { LandingIntroWrapper, LandingIntroContent, LandingIntroBox, LandingIntroBg, LandingIntroDate, LandingIntroSocial } from '../../styles/homeIntroStyles'
//scroll behaviour
import { useInView } from 'react-intersection-observer'
import { useAnimation } from 'framer-motion'

const introVariants = {
    hidden: { 
        opacity: 0,
        x: 500
    },
    visible: {
        opacity: 1,
        x: 0, 
        transition: {
            delay: 1,
            duration: 0.8, 
            ease: [0.1,0.6,0.05,0.91]
        }
    }
}

const HomeIntro = () => {
    const animation = useAnimation()
    const [contentRef, inView] = useInView({
        triggerOnce: true,
    })
    
    useEffect(() => {
        if(inView) {
            animation.start("visible")
        }
    })

    return (
        <LandingIntroWrapper
                ref={contentRef}
                animate={animation}
                initial="hidden"
                variants={introVariants}
        >
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
