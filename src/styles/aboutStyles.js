import styled from 'styled-components'

export const Container = styled.div`
    flex-grow: 1;
    margin: 0 auto;
    position: relative;
    width: auto;
    height: 100%;
    position: relative;
    @media screen 
    and (min-device-width: 1200px) 
    and (max-device-width: 1920px) 
    and (-webkit-min-device-pixel-ratio: 1) {
        max-width: 1200px; 
    }
    @media screen 
    and (min-device-width: 1200px) 
    and (max-device-width: 1600px) 
    and (-webkit-min-device-pixel-ratio: 2)
    and (min-resolution: 192dpi) { 
        max-width: 1200px;
    }

`

export const AboutTitle = styled.h1`
    text-align: center;
    font-family: "Advent Pro";
    text-transform: uppercase;
    font-size: 4rem;
    letter-spacing: 10px;
    margin: 1rem 0 0 0;
    text-shadow: ${({theme}) => theme.theme === "lightTheme" ? "0 3px 6px rgba(0,0,0,48%)" : "1px 4px 5px rgba(0,0,0,40%)"};
    @media (max-width: 594px) {
        font-size: 3.3rem;
    }
    /* //htc, pixel */
    @media screen 
    and (max-width: 425px) 
    and (orientation: portrait) {
        font-size: 2.8rem;
    }
`
export const AboutBg = styled.div`
    height: 380px;
    width: 260px;
    position: absolute;
    top: 19rem;
    /* responsive */
    @media (max-width: 1238px) {
        top: 30rem;
        left: 1rem;
        margin-bottom: 1rem;
    }
    @media (max-width: 742px) {
        top: 8rem;
        left: 50%;
        transform: translateX(-50%);
        height: 350px;
        width: 230px;
    }
    /* kindel-fire portrait & ipadpro portrait */
    @media only screen 
    and (min-device-width: 768px) 
    and (max-device-width: 1280px) 
    and (-webkit-min-device-pixel-ratio: 1.5) 
    and (orientation: portrait) {
        top: 30rem;
        left: 2rem;
    }
    /* ipadpro landacape */
    @media only screen 
    and (min-device-width: 768px) 
    and (max-device-width: 1024px) 
    and (orientation: landscape) 
    and (-webkit-min-device-pixel-ratio: 2) {
        left: 1rem;
    }
    img {
        height: 100%;
        width: 100%;
        object-fit: cover;
        filter: ${({theme}) => theme.theme === "darkTheme" ? "brightness(0.7)" : "brightness(0.8)"};
    }
`
export const AboutContent = styled.div`
    width: 25rem;
    position: absolute;
    top: 18rem;
    right: 20rem;
    text-shadow: ${({theme}) => theme.theme === "lightTheme" ? "0 3px 6px rgba(0,0,0,48%)" : "1px 4px 5px rgba(0,0,0,40%)"};
    @media (max-width: 742px) {
        top: 45rem;
        left: 50%;
        transform: translateX(-50%);
    }
    /* htc, pixel, xiomi, andoroid(L) */
    @media screen 
    and (max-width: 425px) 
    and (orientation: portrait) {
        top: 52em;
        width: 18rem;
    }
    .first_content {
        font-family: "Lexend Tera";
        font-size: 0.7rem;
        font-weight: 100;
        line-height: 1.4rem;
    }
    .first_content_date {
        font-family: "Orbitron";
    }
`
export const AboutIntro = styled.div`
    width: 20rem;
    position: absolute;
    top: 3rem;
    right: 0;
    text-shadow: ${({theme}) => theme.theme === "lightTheme" ? "0 3px 6px rgba(0,0,0,48%)" : "1px 4px 5px rgba(0,0,0,40%)"};
    /* responsive */
    @media (max-width: 971px) {
        top: 6rem;
        left: 50%;
        transform: translateX(-50%);
    }
    @media (max-width: 742px) {
        top: 30rem;
    }
    /* htc, pixel, xiomi, andoroid(L) */
    @media screen 
    and (max-width: 425px) 
    and (orientation: portrait) {
        top: 32rem;
        width: 18rem;
    }
    /* //KindelFire-Portrait */
    @media only screen 
    and (min-device-width: 800px) 
    and (max-device-width: 1280px) 
    and (-webkit-min-device-pixel-ratio: 1.5) 
    and (orientation: portrait) {
        top: 6rem;
    }
    /* ipadpro landacape */
    @media only screen 
    and (min-device-width: 768px) 
    and (max-device-width: 1024px) 
    and (orientation: landscape) 
    and (-webkit-min-device-pixel-ratio: 2) {
        top: 5rem;
    }
    /* ipadpro portrait */
    @media only screen 
    and (min-device-width: 768px) 
    and (max-device-width: 1024px) 
    and (orientation: portrait) 
    and (-webkit-min-device-pixel-ratio: 2) {
        top: 5rem;
    }
    .second_intro {
        font-family: "Lexend Tera";
        text-transform: uppercase;
        letter-spacing: 2px;
        line-height: 1.5rem;
        font-size: 0.9rem;
        /* anodroid(L) */
        @media screen 
        and (max-width: 425px) 
        and (orientation: portrait) {
            font-size: 0.8rem;
        }
    }
    .second_intro_birth {
        font-family: "Orbitron";
        letter-spacing: 2px;
        /* htc, pixel, xiomi, andoroid(L) */
        @media screen 
        and (max-width: 425px) 
        and (orientation: portrait) {
            font-size: 0.9rem;
            font-weight: 700;
        }
    }
`
export const AboutBgAn = styled.div`
    height: 380px;
    width: 240px;
    position: absolute;
    right: 1rem;
    top: 16rem;
    @media (max-width: 742px) {
        top: 57rem;
        height: 330px;
        width: 200px;
        left: 50%;
        transform: translateX(-50%);
    }
    /* htc, pixel, xiomi, andoroid(L) */
    @media screen 
    and (max-width: 425px) 
    and (orientation: portrait) {
        top: 68rem;
        margin-bottom: 1rem;
    }
    @media screen 
    and (max-height: 425px) 
    and (orientation: landscape) {
        margin-bottom: 1rem;
    }
    img {
        height: 100%;
        width: 100%;
        object-fit: cover;
        filter: ${({theme}) => theme.theme === "darkTheme" ? "brightness(0.7)" : "brightness(0.8)"};
    }
`
export const AboutTexture = styled.div`
     position: fixed;
     top: 0;
     left: 0;
     bottom: 0;
     right: 0;
     height: 100%;
     width: 100%;
     display: ${({theme}) => theme.theme === "lightTheme" ? "block" : "none"};
     .texture {
         height: 100%;
         width: 100%;
         object-fit: cover;
         opacity: 40%;
         display: ${({theme}) => theme.theme === "darkTheme" ? "none" : "block"};
     }
`