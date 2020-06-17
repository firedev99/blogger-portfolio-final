import styled from 'styled-components'

export const TravelAboutWrapper = styled.div`
    position: relative;
    top: 56rem;
    @media (max-width: 1265px) {
        top: 40rem;
    }
`
export const AboutYear = styled.div`
    font-family: "Orbitron";
    font-size: 5rem;
    letter-spacing: 8px;
    text-align: center;
    text-shadow: ${({theme}) => theme.theme === "lightTheme" ? "0 3px 6px rgba(0,0,0,48%)" : "1px 4px 5px rgba(0,0,0,40%)"};
    @media (max-width: 1265px) {
        font-size: 4rem;
    }
    @media (max-width: 459px) {
        font-size: 3rem;
    }
`
export const TravelAboutBg = styled.div`
    width: 380px;
    height: 520px;
    position: absolute;
    top: 9rem;
    left: 5rem;
    margin-bottom: 3rem;
    img {
        height: 100%;
        width: 100%;
        object-fit: cover;
        filter: brightness(0.9);
    }
    @media (max-width: 1265px) {
        top: 12rem; 
        left: 50%;
        transform: translateX(-50%);
        margin-bottom: 0;
    }
    @media (max-width: 459px) {
        width: 330px;
        height: 550px;
        top: 9rem;
    }
    @media (max-width: 347px) {
        width: 310px;
        height: 550px;
        top: 9rem;
    }
    
`
export const TravelAboutHeading = styled.div`
    font-family: "Advent Pro";
    font-size: 1.6rem;
    text-align: center;
    letter-spacing: 8px;
    position: relative;
    font-weight: 700;
    top: 15rem;
    text-shadow: ${({theme}) => theme.theme === "lightTheme" ? "0 3px 6px rgba(0,0,0,48%)" : "1px 4px 5px rgba(0,0,0,40%)"};
    @media (max-width: 1265px) {
        top: 1rem; 
    }
    @media (max-width: 459px) {
        top: 0.3rem;
        font-size: 1.3rem;
    }
    
`
export const TravelAboutContent = styled.div`
    width: 24rem;
    position: absolute;
    top: 11rem;
    right: 3rem;
    @media (max-width: 1265px) {
        top: 49rem; 
        left: 50%;
        transform: translateX(-50%);
        margin-bottom: 3rem;
    }
    @media (max-width: 419px) {
        width: 21rem;
    }
    @media (max-width: 347px) {
        width: 20rem;
    }
    
    p {
        font-family: "Lexend Tera";
        line-height: 1.5rem;
        font-weight: 700;
        letter-spacing: 0.5px;
        @media (max-width: 419px) {
            letter-spacing: 0;
        }
        .second_para {
            position: relative;
            top: 1.5rem;
        }
    }
`   