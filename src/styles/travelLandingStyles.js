import styled from 'styled-components'

export const LandingContainer = styled.div`
    flex-grow: 1;
    margin: 0 auto;
    position: relative;
    width: auto;
    height: 100%;
    position: relative;
    .texture{
        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        height: 100%;
        width: 100%;
        object-fit: cover;
        z-index: -1;
        opacity: 40%;
        display: ${({theme}) => theme.theme === "darkTheme" ? "none" : "block"} 
    }
`
export const TravelKey = styled.div`
    font-family: "Advent Pro";
    font-size: 2rem;
    position: absolute;
    top: 1rem;
    left: 1rem;
    letter-spacing: 1px;
    text-shadow: ${({theme}) => theme.theme === "darkTheme" ? "1px 4px 5px rgba(0,0,0,40%)" : null}; 
    @media (max-width: 478px) {
        font-size: 1.7rem;
        font-weight: 700;
    }
    a {
        color: ${({theme}) => theme.text};
        span {
            margin: 0 1.5rem;
        }
        .line {
            position: absolute;
            width: 2.5rem;
            height: 1.5px;
            top: 0.55em;
            left: 0.7em;
            background: ${({theme}) => theme.text};
            @media (max-width: 478px) {
                height: 2px;
            }
        }
    }
    
`
export const TravelTitle = styled.div`
    position: absolute;
    left: 6rem;
    top: 5rem;
    @media (max-width: 1080px) {
            left: 2rem;
        }
    @media (max-width: 748px) {
            top: 9rem;
        }
    @media (max-width: 551px) {
            left: 50%;
            transform: translateX(-50%);
        }
    h1 {
        font-family: "Advent Pro";
        font-size: 2.7rem;
        letter-spacing: 10px;
        text-transform: uppercase;
        line-height: 1.5rem;
        text-shadow: ${({theme}) => theme.theme === "lightTheme" ? "0 3px 6px rgba(0,0,0,48%)" : "1px 4px 5px rgba(0,0,0,40%)"};
        @media (max-width: 1080px) {
            font-size: 2.1rem;
        }
        @media (max-width: 551px) {
            font-size: 1.6rem;
            letter-spacing: 4px;
            white-space: nowrap;
        }
        @media (max-width: 349px) {
            font-size: 1.4rem;
            letter-spacing: 4px;
            white-space: nowrap;
        }
        &:nth-child(2) {
            margin-left: 24rem;
            @media (max-width: 1080px) {
                margin-left: 15rem;
            }
            @media (max-width: 748px) {
                margin-left: 5rem;
            }
            @media (max-width: 551px) {
                margin-left: 3rem;
            }
        }
    }
`
export const TravelIntro = styled.div`
    position: absolute;
    top: 19rem;
    left: 30rem;
    text-shadow: ${({theme}) => theme.theme === "lightTheme" ? "0 3px 6px rgba(0,0,0,48%)" : "1px 4px 5px rgba(0,0,0,40%)"};
    @media (max-width: 1080px) {
           left: 19rem;
    }
    @media (max-width: 748px) {
           top: 25rem;
           left: 50%;
           transform: translateX(-50%);
           line-height: 4.3rem;
    }
    @media (max-width: 478px) {
           line-height: 3rem;
    }
    @media screen 
    and (max-height: 425px) 
    and (orientation: landscape) {
        margin-bottom: 3rem;
    }
    .first_one {
        font-family: "Advent Pro";
        font-size: 3.5rem;
        font-weight: 700;
        letter-spacing: 8px;
        @media (max-width: 748px) {
           font-size: 3rem;
           white-space: nowrap;
        }
        @media (max-width: 478px) {
           font-size: 2rem;
           white-space: nowrap;
        }
        @media (max-width: 349px) {
            font-size: 1.8rem;
            letter-spacing: 4px;
        }
        span {
            margin: 0 5rem;
            &:nth-child(1) {
                margin-left: 0;
                @media (max-width: 478px) {
                    margin-left: 4rem;
                }
                @media (max-width: 349px) {
                    margin-left: 3rem;
                }
            }
            &:nth-child(3) {
                margin-right: 0;
            }
        }
        .big_line {
                position: absolute;
                width: 8.5rem;
                top: 0.9em;
                left: 1.37em;
                height: 2px;
                background: ${({theme}) => theme.text};
                @media (max-width: 478px) {
                    top: 1.3em;
                    left: 2.8em;
                }
                @media (max-width: 349px) {
                    left: 1.85em;
                }
        }
    }
    .second_one {
        font-family: "Advent Pro";
        font-size: 3.5rem;
        font-weight: 700;
        letter-spacing: 8px;
        margin-left: 7rem;
        @media (max-width: 748px) {
           font-size: 3rem;
        }
        @media (max-width: 478px) {
           font-size: 2rem;
        }
        @media (max-width: 349px) {
            font-size: 1.8rem;
        }
    }
    .third_one {
        font-family: "Fredericka the Great";
        font-size: 3.5rem;
        letter-spacing: 7px;
        margin-left: -5rem;
        @media (max-width: 748px) {
           font-size: 2.7rem;
           margin-left: 0;
           white-space: nowrap;
        }
        @media (max-width: 478px) {
           font-size: 2rem;
           margin-left: 1rem;
        }
        @media (max-width: 349px) {
            font-size: 1.8rem;
            letter-spacing: 5px;
        }
    }
`