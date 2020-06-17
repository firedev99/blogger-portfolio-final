import React from 'react'
import { Container, AboutTitle, AboutBg, AboutContent, AboutIntro, AboutBgAn, AboutTexture } from '../../styles/aboutStyles'

const About = () => {
    return (
        <>
            <AboutTexture>
                <img className="texture" src={require(`../../assests/texture.jpg`)} alt="texture" />
            </AboutTexture>
            <Container>
                <AboutTitle>
                    About Me
                </AboutTitle>
                <AboutBg>
                    <img src={require(`../../assests/model-2.jpg`)} alt="YUSINA" />
                </AboutBg>
                <AboutContent>
                    <div className="first_content">
                        <h3>In 2012, I moved to Abuja, where
                            I start working on the radio. I am the
                            founder and former program direction
                            of the Abuja radio station lounge FM
                            and "Radio Friday" Bumper Radio.
                        </h3>
                    </div>
                    <div className="first_content_date">
                        <h2>2020</h2>
                    </div>
                </AboutContent>
                <AboutIntro>
                    <div className="second_intro">
                        <h3>
                            Hello, MY NAME is
                            Yusina KHAtuns
                            and I am a blogger
                        </h3>
                    </div>
                    <div className="second_intro_birth">
                        I was born on 15th May, 1991
                    </div>
                </AboutIntro>
                <AboutBgAn>
                    <img src={require(`../../assests/model-3.jpg`)} alt="YUSINA" />
                </AboutBgAn>
            </Container>
        </>
    )
}

export default About
