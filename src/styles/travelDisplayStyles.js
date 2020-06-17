import styled from 'styled-components'

export const TravelDisplayWrapper = styled.div`
    flex-grow: 1;
    margin: 0 auto;
    position: relative;
    width: auto;
    height: 100%;
    position: relative;
    top: 100rem;
`
export const DisplayOne = styled.div`
    width: 370px;
    height: 500px;
    position: absolute;
    top: 15rem;
    right: 3rem;
    margin-bottom: 3rem;
    @media (max-width: 1265px) {
        top: 27rem; 
        left: 50%;
        transform: translateX(-50%);
    }
    @media (max-width: 425px) {
            top: 24.5rem;
            width: 340px;
    }
    @media (max-width: 355px) {
            width: 300px;
    }
    img {
        height: 100%;
        width: 100%;
        object-fit: cover;
        filter: brightness(0.9);
    }
`
export const DisplayTwo = styled.div`
    width: 600px;
    height: 330px;
    position: absolute;
    top: 0;
    left: 3rem;
    @media (max-width: 1265px) {
        top: 62rem; 
        left: 50%;
        transform: translateX(-50%);
        width: 370px;
        height: 210px;
        margin-bottom: 3rem;
    }
    @media (max-width: 425px) {
            top: 58rem;
            width: 340px;
    }
    @media (max-width: 355px) {
            width: 300px;
    }
    img {
        height: 100%;
        width: 100%;
        object-fit: cover;
        filter: brightness(0.9);
    }
`
export const TravelDisplayTitle = styled.div`
    position: absolute;
    top: 25rem;
    left: 20rem;
    @media (max-width: 1366px) {
        left: 13rem;
    }
    @media (max-width: 1265px) {
        top: 14rem; 
        left: 50%;
        transform: translateX(-50%);
    }
    @media (max-width: 583px) {
            font-size: 2.8rem;
            text-align: center;
            white-space: nowrap;
            margin-top: 2rem;
        }
    h1 {
        font-family: "Advent Pro";
        font-size: 4.6rem;
        text-transform: uppercase;
        letter-spacing: 10px;
        line-height: 2rem;
        text-shadow: ${({theme}) => theme.theme === "lightTheme" ? "0 3px 6px rgba(0,0,0,48%)" : "1px 4px 5px rgba(0,0,0,40%)"};
        @media (max-width: 1265px) {
            font-size: 4rem;
            text-align: center;
            white-space: nowrap;
        }
        @media (max-width: 583px) {
            font-size: 2.8rem;
            text-align: center;
            white-space: nowrap;
            line-height: 1.5rem;
            letter-spacing: 6.5px;
        }
        @media (max-width: 425px) {
            font-size: 2.4rem;
        }
        @media (max-width: 355px) {
            font-size: 2.2rem;
        }
    }
`