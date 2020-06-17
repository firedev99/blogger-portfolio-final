import React, { useEffect } from 'react'
import { TravelAboutWrapper, AboutYear, TravelAboutBg, TravelAboutHeading, TravelAboutContent } from '../../styles/travelAboutStyles'
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

const TravelAbout = () => {
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
        <TravelAboutWrapper
            ref={contentRef}
            animate={animation}
            initial="hidden"
            variants={introVariants}
        >
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
