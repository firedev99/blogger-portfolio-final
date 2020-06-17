import React from 'react'
import { AnimatePresence } from 'framer-motion'
import { Link } from 'gatsby'
import { Circles, NavigationWrapper, CircleOne, CircleTwo, KeyName, NavLinks, ExitButton, SocialLinks } from '../styles/navigationStyles'

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
                        <NavLinks>
                            <li><Link activeClassName="active" to="/">HOME</Link></li>
                            <li><Link activeClassName="active" to="/about-me/">ABOUT ME</Link></li>
                            <li><Link activeClassName="active" to="/travel-blogs">TRAVEL BLOG</Link></li>
                            <li><Link activeClassName="active" to="/travel-with-me">TRIP WITH ME</Link></li>
                        </NavLinks>
                        </Circles>
                        <ExitButton onClick={() => setToggleMenu(!toggleMenu)} >
                            <button>EXIT</button>
                        </ExitButton>
                        <SocialLinks>
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
