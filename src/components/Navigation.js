import React from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Link } from 'gatsby'
import { Circles, NavigationWrapper, CircleOne, CircleTwo, KeyName, NavLinks, ExitButton, SocialLinks } from '../styles/navigationStyles'

const linksVariants = {
    initial: {
        opacity: 0,
        x: 100,
    },
    animate: {
        opacity: 1,
        x: 0,
        transition: {
            delayChildren: 0.5, 
            staggerChildren: 0.5,
            duration: 3,
            ease: [0.1,0.6,0.05,0.91]
        }
    },
}

const links = {
    initial: {
        opacity: 0,
        x: 100,
    },
    animate: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.5,
            ease: [0.1,0.6,0.05,0.91]
        }
    }
}

const Navigation = ({toggleMenu, setToggleMenu}) => {
    return (
        <>
            <AnimatePresence>
                {toggleMenu && (
                    <NavigationWrapper
                        initial={{x: "-100%"}}
                        exit={{x: "-100%"}}
                        transition={{ease: [0.6,0.5,0.05,0.91], duration: 0.7}}
                        animate={{ x: toggleMenu ? 0 : "-100%" }}
                    >
                        <Circles>
                            <CircleOne />
                            <CircleTwo />
                            <KeyName>
                                <Link to="/">
                                    <span>Y</span>
                                    <span className="line"></span>
                                    <span>K</span>
                                </Link>
                        </KeyName>
                        <NavLinks
                            variants={linksVariants}
                            initial="initial"
                            animate="animate"
                        >
                            <motion.li variants={links}><Link activeClassName="active" to="/">HOME</Link></motion.li>
                            <motion.li variants={links}><Link activeClassName="active" to="/about-me/">ABOUT ME</Link></motion.li>
                            <motion.li variants={links}><Link activeClassName="active" to="/travel-blogs">TRAVEL BLOG</Link></motion.li>
                            <motion.li variants={links}><Link activeClassName="active" to="/travel-with-me">TRIP WITH ME</Link></motion.li>
                        </NavLinks>
                        </Circles>
                        <ExitButton
                            initial={{y: 400}}
                            animate={{y: 0}}
                            transition={{duration: 0.5, delay: 2.2, ease: [0.1,0.6,0.05,0.91]}}
                            onClick={() => setToggleMenu(!toggleMenu)}
                        >
                            <button>EXIT</button>
                        </ExitButton>
                        <SocialLinks
                            initial={{y: 400}}
                            animate={{y: 0}}
                            transition={{duration: 0.5, delay: 2.5, ease: [0.1,0.6,0.05,0.91]}}
                            onClick={() => setToggleMenu(!toggleMenu)}
                        >
                            <a rel="noreferrer" href="https://www.instagram.com/tripyy_land/" target="_blank">YOUTUBE</a>
                            <a rel="noreferrer" href="https://www.instagram.com/tripyy_land/" target="_blank">INSTRAGRAM</a>
                        </SocialLinks>
                    </NavigationWrapper>
                )}
            </AnimatePresence>
        </>
    )
}

export default Navigation
