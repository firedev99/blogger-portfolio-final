import styled from 'styled-components'
import { motion } from 'framer-motion'

export const LandingIntroWrapper = styled(motion.div)`
    height: 100vh;
    width: 100%;
    position: relative;
    top: 15rem;
    display: flex;
    flex-direction: column;
    @media (max-width: 1366px){
        top: 19rem;
    }
    @media (max-width: 1080px) {
        top: 70rem;
    }
`
export const LandingIntroContent = styled(motion.div)`
    height: 70vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 4.45rem;
    letter-spacing: 13px;
    text-transform: uppercase;
    line-height: 4.7rem;
    text-shadow: ${({theme}) => theme.theme === "lightTheme" ? "0 3px 6px rgba(0,0,0,48%)" : "1px 4px 5px rgba(0,0,0,40%)"};
    @media only screen 
    and (min-device-width: 768px) 
    and (max-device-width: 1024px) 
    and (orientation: landscape) 
    and (-webkit-min-device-pixel-ratio: 2) {
        font-size: 4rem;
    }
    /* responsive */
    @media (max-width: 1230px) {
        font-size: 3.5rem;
        line-height: 4rem;
        margin-top: -2rem;
    }
    @media (max-width: 905px) {
        font-size: 2.8rem;
        letter-spacing: 8px;
        line-height: 3rem;
    }
    @media (max-width: 692px) {
        font-size: 2.2rem;
        line-height: 2.6rem;
    }
    @media (max-width: 514px) {
        font-size: 2rem;
        line-height: 2rem;
    }
    @media (max-width: 444px) {
        font-size: 2rem;
        line-height: 1.8rem;
        margin-top: -4em;
    }
    @media (max-width: 428px) {
        font-size: 1.9rem;
        line-height: 2rem;
        letter-spacing: 7px;
        font-weight: 700; 
    }
    @media (max-width: 375px) {
        font-size: 1.8rem;
        letter-spacing: 5px;
    }
    @media (max-width: 331px) {
        font-size: 1.8rem;
        letter-spacing: 3px;
    }

     .intros_a {
         font-family: "Advent Pro";
     }
     .intros_b {
         font-family: "Advent Pro";
         margin-left: 12.5rem;
         @media (max-width: 692px) {
            margin-left: 7rem;
         }
         @media (max-width: 444px) {
            margin-left: 3rem;
         }
     }
     .intros_c {
         font-family: "Fredericka the Great";
         margin-left: -9rem;
        @media (max-width: 692px) {
            margin-left: -5rem;
            margin-top: 2.5rem;
        }
        @media (max-width: 468px) {
            margin-left: -2rem;
        }
        @media (max-width: 428px) {
            margin-left: -0.5rem;
        }
     }
     .intros_d {
         font-family: "Fredericka the Great";
         margin-left: 18rem;
         @media (max-width: 692px) {
            margin-left: 13rem;
         }
         @media (max-width: 444px) {
            margin-left: 8rem;
         }
     }
     .intros_e {
         font-family: "Fredericka the Great";
         @media only screen 
        and (min-device-width: 768px) 
        and (max-device-width: 1024px) 
        and (orientation: landscape) 
        and (-webkit-min-device-pixel-ratio: 2) {
            margin-left: 5rem;
        }
     }
     .intros_f {
         font-family: "Orbitron";
         margin-left: 20rem;
         @media (max-width: 444px) {
            margin-left: 10rem;
         }
     }
`
export const LandingIntroBox = styled.div`
    height: 30vh;
    width: 100%;
`
export const LandingIntroBg = styled(motion.div)`
    height: 380px;
    width: 260px;
    position: absolute;
    bottom: 5rem;
    left: 5rem;
    @media only screen 
    and (min-device-width: 768px) 
    and (max-device-width: 1024px) 
    and (orientation: landscape) 
    and (-webkit-min-device-pixel-ratio: 2) {
        left: 1rem;
    }
    @media (max-width: 1080px) {
        bottom: -4rem;
        left: 50%;
        transform: translateX(-50%);
    }
    @media (max-width: 905px) {
        bottom: -1.5rem;
        left: 50%;
        transform: translateX(-50%);
    }
    @media screen 
    and (max-height: 600px) 
    and (orientation: landscape) {
        height: 350px;
        width: 230px;
        top: 23rem;
    }
    @media (max-width: 514px) {
        bottom: 4rem;
    }
    @media (max-width: 444px) {
        width: 230px;
        height: 380px;
    }
    @media (max-width: 428px) {
       bottom: 7rem; 
    }
    @media (max-width: 350px) {
       top: 13.5rem; 
    }
    @media screen 
    and (max-height: 350px) 
    and (orientation: landscape) {
       top: 14.5rem;
       height: 350px;
       width: 260px;
    }
    @media screen 
    and (max-height: 425px) 
    and (orientation: landscape) {
        bottom: -16rem;
    }
    @media screen 
    and (max-width: 670px) 
    and (orientation: portrait) {
        bottom: 5rem;
        height: 300px;
        width: 200px;
    }
        .intro_bg {
            height: 100%;
            width: 100%;
            object-fit: cover;
        }
`
export const LandingIntroDate = styled.div`
    position: absolute;
    width: 8rem;
    display: none;
    bottom: -1rem;
    left: 68%;
    transform: translateX(-68%);
    font-family: "Orbitron";
    font-size: 1.5rem;
    font-weight: 700;
    @media (max-width: 692px) {
            display: block;
            bottom: -6rem;
         }
    @media (max-width: 514px) {
        bottom: 0;
    }
    @media (max-width: 444px) {
           font-size: 1.3rem;
           left: 80%;
           transform: translateX(-80%);
         }
    @media (max-width: 428px) {
        bottom: 3rem;
        left: 90%;
        transform: translateX(-90%);
    }
    @media screen 
    and (max-height: 375px) 
    and (orientation: landscape) {
        bottom: -20rem;
    }
    @media screen 
    and (max-width: 670px) 
    and (orientation: portrait) {
       bottom: 0;
    }
    span {
        line-height: 1rem;
        letter-spacing: 4px;
    }
    .line {
        position: absolute;
        height: 3px;
        width: 4rem;
        background: ${({theme}) => theme.text};
        top: 0.9em;
        left: -3em;
    }
    .year {
        font-weight: 700;
        font-size: 1.6rem;
        @media (max-width: 444px) {
           font-size: 1.4rem;
         }
    }
`
export const LandingIntroSocial = styled.div`
    display: none;
    position: absolute;
    width: 12rem;
    bottom: -4rem;
    transform: translateX(-40%);
    left: 40%;
    @media (max-width: 692px) {
            display: block;
            display: flex;
            bottom: -8rem;
            justify-content: space-between;
         }
    @media (max-width: 514px) {
        bottom: -3rem;
    }
    @media screen 
    and (max-height: 375px) 
    and (orientation: landscape) {
        bottom: -22rem;
    }
    a {
        letter-spacing: 1px;
        font-size: 1.5rem;
        font-family: "Bebas Neue";
        color: ${({theme}) => theme.text};
        text-shadow: ${({theme}) => theme.theme === "lightTheme" ? "0 2px 3px rgba(0,0,0,40%)" : "1px 4px 5px rgba(0,0,0,40%)"};
        @media (max-width: 428px) {
            font-size: 1.3rem;
        }
    }
`