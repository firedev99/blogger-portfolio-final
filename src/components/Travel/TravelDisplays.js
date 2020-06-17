import React, { useEffect } from 'react'
import { TravelDisplayWrapper, DisplayOne, DisplayTwo, TravelDisplayTitle } from '../../styles/travelDisplayStyles'
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

const TravelDisplays = () => {
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
        <TravelDisplayWrapper
            ref={contentRef}
            animate={animation}
            initial="hidden"
            variants={introVariants}
        >
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
