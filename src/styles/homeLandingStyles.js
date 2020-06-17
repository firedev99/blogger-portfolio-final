import styled from 'styled-components'
import { motion } from 'framer-motion'

export const LandingWrapper = styled(motion.div)`
    height: 100%;
    width: 100%;
    .texture {
        position: fixed;
        z-index: -1;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        height: 100%;
        width: 100%;
        object-fit: cover;
        opacity: 40%;
        display: ${({theme}) => theme.theme === "darkTheme" ? "none" : "block"};
    }
`
export const LandingTitle = styled(motion.h1)`
    font-size: 6rem;
    letter-spacing: 17px;
    text-transform: uppercase;
    text-align: center;
    font-family: "Advent Pro";
    text-shadow: ${({theme}) => theme.theme === "lightTheme" ? "0 3px 6px rgba(0,0,0,48%)" : "1px 4px 5px rgba(0,0,0,40%)"};
    margin-top: 0.5rem;
    margin-bottom: 0;
    /* responsive */
    @media (max-width: 1245px) {
        font-size: 4.8rem;
    }
    @media (max-width: 905px) {
        font-size: 3.5rem;
        letter-spacing: 10px;
    }
    @media (max-width: 588px) {
        font-size: 3.1rem;
        letter-spacing: 7px;
    }
    @media (max-width: 468px) {
        font-size: 2.7rem;
        letter-spacing: 5px;
    }
    @media (max-width: 428px) {
        font-size: 2.2rem; 
    }
    @media (max-width: 374px) {
        font-size: 1.8rem; 
    }
    

     /* ipadpro landacape */
    @media only screen 
    and (min-device-width: 768px) 
    and (max-device-width: 1024px) 
    and (orientation: landscape) 
    and (-webkit-min-device-pixel-ratio: 2) {
        font-size: 4.8rem;
        letter-spacing: 10px;
    }
`
export const LandingSub = styled(motion.h3)`
    font-family: "Lexend Tera";
    margin-top: -0.3rem;
    text-align: center;
    letter-spacing: 8px;
    text-shadow: ${({theme}) => theme.theme === "lightTheme" ? "0 3px 6px rgba(0,0,0,48%)" : "1px 4px 5px rgba(0,0,0,40%)"};
    @media (max-width: 905px) {
        font-size: 0.9rem;
        letter-spacing: 5px;
        margin-top: 0rem;
    }
    @media (max-width: 588px) {
        font-size: 0.85rem;
        letter-spacing: 3px;
    }
    @media (max-width: 428px) {
        font-size: 0.8rem;
        letter-spacing: 1px;
    }
    @media (max-width: 374px) {
        font-size: 0.7rem;
        margin-top: 1rem; 
    }
`
export const KeyName = styled.div`
    position: absolute;
    top: 1rem;
    /* responsive */
    @media (max-width: 1080px) {
        display: none;
    }
    a {
        color: ${({theme}) => theme.text};
        span {
            font-size: 2.2rem;
            font-family: "Advent Pro";
            margin: 0 1.5rem;
        }
        .line {
            height: 2px;
            background: ${({theme}) => theme.text};
            width: 2.3rem;
            position: absolute;
            top: 0.5em;
            left: 0.73em;
        }
    }
`
export const LandingBg = styled.div`
    height: 450px;
    width: 330px;
    position: relative;
    top: 2rem;
    left: 8rem;
    /* kindel - ipad */
    @media only screen 
    and (min-device-width: 768px) 
    and (max-device-width: 1024px) 
    and (orientation: landscape) 
    and (-webkit-min-device-pixel-ratio: 2) {
        height: 400px;
        width: 290px;
    }
    @media (max-width: 1080px) {
        left: 50%;
        transform: translateX(-50%);
    }
    @media (max-width: 692px) {
        top: 3.5rem;
    }
    @media (max-width: 588px) {
        top: 3.5rem;
        width: 280px;
    }
    .landing_model {
        height: 100%;
        width: 100%;
        object-fit: cover;
        filter: ${({theme}) => theme.theme === "darkTheme" ? "brightness(0.7)" : "brightness(0.85)"}; 
    }
`
export const LandingBgHeading = styled.div`
    position: absolute;
    bottom: -3rem;
    right: -5rem;
    text-transform: uppercase;
    font-size: 1.8rem;
    letter-spacing: 3px;
    line-height: 1.2rem;
    font-family: "Orbitron";
    color: #D40F0F;
    text-align: right;
    text-shadow: ${({theme}) => theme.theme === "lightTheme" ? "0 3px 6px rgba(0,0,0,48%)" : "1px 4px 5px rgba(0,0,0,40%)"};
    /* responsive */
    @media (max-width: 1245px) {
        right: -3rem;
    }
    @media (max-width: 588px) {
        font-size: 1.5rem;
        line-height: 1rem;
        letter-spacing: 1px;
    }
    @media (max-width: 428px) {
        font-size: 1.2rem;
        line-height: 0.8rem;
        right: -1rem;
        bottom: -2.3rem; 
    }
    @media (max-width: 374px) {
           font-size: 1.1rem;
           right: -0.5rem;
    }
`
export const TicketCircle = styled.div`
    position: absolute;
    height: 12rem;
    width: 12rem;
    background: #D40F0F;
    border-radius: 50%;
    top: 19.5rem;
    left: 32rem;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 2px 3px 5px rgba(0,0,0, 50%);
    cursor: pointer;
    filter: brightness(0.87);

    /* responsive */
    @media (max-width: 1245px) {
        width: 9rem;
        height: 9rem;
        top: 42rem;
        left: 13rem;
    }
    @media (max-width: 1080px) {
        left: 50%;
        transform: translateX(-50%);
    }
    @media (max-width: 428px) {
        top: 38.5rem;
    }
    
    @media only screen 
    and (min-device-width: 768px) 
    and (max-device-width: 1024px) 
    and (orientation: landscape) 
    and (-webkit-min-device-pixel-ratio: 2) {
        width: 8rem;
        height: 8rem;
        top: 38rem;
        left: 13rem;
    }
    @media screen 
    and (max-height: 425px) 
    and (orientation: landscape) {
        left: 50%;
        transform: translateX(-50%);
    }
    a {
        font-family: "Orbitron";
        color: #D6D6D6;
        letter-spacing: 2px;
        text-shadow: ${({theme}) => theme.theme === "lightTheme" ? "0 3px 6px rgba(0,0,0,48%)" : "1px 4px 5px rgba(0,0,0,40%)"};
        @media (max-width: 1246px) {
            letter-spacing: 0;
        }
    }
`
export const LandingNavigation = styled.div`
    position: absolute;
    right: 5rem;
    top: 7rem;
    font-family: "Bebas Neue";
    font-size: 1.5rem;
    letter-spacing: 3px;
    /* responsive */
    @media (max-width: 1245px) {
        display: none;
    }
    li {
        list-style-type: none;
        &:nth-child(1) {
            margin-left: -2rem;
        }
        &:nth-child(2) {
            margin-left: -1rem;
        }       
        &:nth-child(3) {
            margin-left: -2rem;
        }
        a {
            color: ${({theme}) => theme.text};
        }
    }
`

export const LandingContentHeading = styled.div`
    position: absolute;
    right: 5rem;
    text-align: right;
    font-family: "Orbitron";
    font-size: 2rem;
    line-height: 1.7rem;
    text-shadow: ${({theme}) => theme.theme === "lightTheme" ? "0 3px 6px rgba(0,0,0,48%)" : "1px 4px 5px rgba(0,0,0,40%)"};
    top: 20rem;
    @media only screen 
    and (min-device-width: 768px) 
    and (max-device-width: 1024px) 
    and (orientation: landscape) 
    and (-webkit-min-device-pixel-ratio: 2) {
        top: 15rem;
    }
    /* responsive */
    @media (max-width: 1080px) {
        font-size: 1.5rem;
        top: 70rem;
        right: 0;
        left: 50%;
        width: 25rem;
        transform: translateX(-50%);
    }
    @media (max-width: 444px) {
        width: 21rem;
        font-size: 1.2rem;
    }
    @media (max-width: 374px) {
        font-size: 1.1rem;
        width: 19rem;
        left: 48%;
    }
    .content_dates {
    
        span {
            &:nth-child(1){
                margin-right: 6rem;
                @media (max-width: 374px) {
                    margin-right: 3rem;
                }
            }
            &:nth-child(3){
                margin-right: 1.5rem;
                @media (max-width: 374px) {
                    margin-right: 1rem;
                }
            }
        
        }
        .big_line {
            background: ${({theme}) => theme.text};
            height: 2px;
            width: 5rem;
            position: absolute;
            top: 0.4em;
            left: 4.1em;
            @media (max-width: 1080px) {
               width: 3.5rem;
               top: 0.8em;
               left: 5.8em;
            }
            @media (max-width: 374px) {
                width: 2.5rem;
                left: 7.2em;
            }
        }
    }
`

export const LandingContent = styled.div`
    width: 25rem;
    height: auto;
    font-family: "Lexend Tera";
    position: absolute;
    top: 25rem;
    right: 5rem;
    line-height: 1.5rem;
    /* responsice */
    @media (max-width: 1080px) {
        top: 80rem;
        left: 50%;
        transform: translateX(-50%);
        font-weight: 700;
    }
    @media (max-width: 444px) {
        width: 20rem;
        font-size: 0.9rem;
    }
    @media (max-width: 374px) {
            width: 18rem;
    }
        .break {
            position: relative;
            top: 1rem;
        }
    
`
export const SocialLinks = styled.div`
    position: absolute;
    right: 5rem;
    bottom: 1rem;
    width: 24.8rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    @media (max-width: 1370px) {
        bottom: 3rem;
    }
    @media (max-width: 1080px) {
        left: 50%;
        right: 0;
        transform: translateX(-50%);
    }
    @media (max-width: 468px) {
            width: 22rem;
            right: 0;
        }
    @media (max-width: 374px) {
            width: 18rem;
        }
    @media screen 
    and (max-height: 425px) 
    and (orientation: landscape) {
        bottom: -25rem;
    }
    @media screen 
    and (max-width: 670px) 
    and (orientation: portrait) {
        bottom: 0;
    }
    a {
        color: ${({theme}) => theme.text};
        font-family: "Bebas Neue";
        font-size: 1.4rem;
        letter-spacing: 4px;
        text-shadow: ${({theme}) => theme.theme === "lightTheme" ? "0 3px 6px rgba(0,0,0,48%)" : "1px 4px 5px rgba(0,0,0,40%)"};
            &:nth-child(2) {
                letter-spacing: 0;
            }
        @media (max-width: 468px) {
            font-size: 1.2rem;
            letter-spacing: 1px;
        }
    }
`