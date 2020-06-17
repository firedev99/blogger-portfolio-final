import React, { useEffect } from 'react'
//scroll behaviour
import { useInView } from 'react-intersection-observer'
import { useAnimation } from 'framer-motion'

import { HomeContactWrapper, HomeLinksWrapper, HomeEmailWrapper } from '../../styles/homeContactsStyles'

const contactsVariants = {
    hidden: { 
        opacity: 0,
        x: -500
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

const HomeContacts = () => {
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
        <HomeContactWrapper
            ref={contentRef}
            animate={animation}
            initial="hidden"
            variants={contactsVariants}
        >
            <h1>CONCTACT</h1>
            <HomeLinksWrapper>
                <div className="label">SOCIAL</div>
                <div className="links">
                    <a rel="noreferrer" target="_blank" href="https://www.instagram.com/tripyy_land/">YOUTUBE</a>
                    <a rel="noreferrer" target="_blank" href="https://www.instagram.com/tripyy_land/">INSTRAGRAM</a>
                    <a href="tel:+880-173-359-437-9">TELEGRAM</a>
                    <a rel="noreferrer" target="_blank" href="https://www.facebook.com/profile.php?id=100001959401487/">FACEBOOK</a>
                </div>
            </HomeLinksWrapper>
            <HomeEmailWrapper>
                <div className="email_label">EMAIL</div>
                <div className="email">
                    <a href="mailto:firethedev@gmail.com">
                        HEROSHI<br />@GMAIL.COM
                    </a>
                </div>
            </HomeEmailWrapper>
        </HomeContactWrapper>
    )
}

export default HomeContacts
