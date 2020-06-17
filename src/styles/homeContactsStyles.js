import styled from 'styled-components'
export const HomeContactWrapper = styled.div`
    height: 100vh;
    position: relative;
    top: 15rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow-x: hidden;
    @media (max-width: 1080px) {
        top: 70rem;
    }
    @media (max-width: 692px) {
        top: 75rem;     
    }
    @media screen 
    and (max-height: 425px) 
    and (orientation: landscape) {
        top: 85rem;
        height: 160vh;
        overflow: hidden;
        margin-bottom: 1rem;
    }
    @media screen 
    and (max-width: 670px) 
    and (orientation: portrait) {
       margin-bottom: 1rem;
    }
    @media screen 
    and (max-width: 380px) 
    and (orientation: portrait) {
       height: 120vh;
    }
    @media screen 
    and (max-height: 375px) 
    and (orientation: landscape) {
        height: 190vh;
    }
    h1 {
        font-family: "Advent Pro";
        font-size: 4rem;
        letter-spacing: 10px;
        margin-bottom: 2rem;
        text-shadow: ${({theme}) => theme.theme === "lightTheme" ? "0 3px 6px rgba(0,0,0,48%)" : "1px 4px 5px rgba(0,0,0,40%)"};
        @media (max-width: 1080px) {
            margin-top: 7rem;
        }
        @media (max-width: 514px) {
            font-size: 3rem;
            margin-bottom: 3rem;
        }
    }
`
export const HomeLinksWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 55rem;
    height: 15rem;
    margin-bottom: 5rem;
    text-shadow: ${({theme}) => theme.theme === "lightTheme" ? "0 3px 6px rgba(0,0,0,48%)" : "1px 4px 5px rgba(0,0,0,40%)"};
    @media (max-width: 1080px) {
        width: 48rem;
    }
    @media only screen 
    and (min-device-width: 768px) 
    and (max-device-width: 1280px) 
    and (-webkit-min-device-pixel-ratio: 1.5) 
    and (orientation: portrait) {
        width: 45rem;
    }
    @media (max-width: 830px) {
        width: 40rem;
    }
    @media (max-width: 692px) {
        width: 30rem;        
    }
    @media (max-width: 514px) {
        align-items: center;
        flex-direction: column;
    }
    @media (max-width: 448px) {
        width: 15rem;        
    }

    .label {
        font-family: "Advent Pro";
        font-size: 1.5rem;
        letter-spacing: 5px;
        margin-left: 7rem;
        font-weight: 700;
        @media (max-width: 1080px) {
            margin-left: 0;
        }
        @media (max-width: 692px) {
            font-size: 1.2rem;    
        }
        @media (max-width: 514px) {
            margin-left: -10.2rem;
            margin-bottom: -1rem;
        }
        @media (max-width: 375px) {
            margin-bottom: 1rem;
        }
            
    }
    .links {
        display: flex;
        flex-direction: column;
        text-shadow: ${({theme}) => theme.theme === "lightTheme" ? "0 3px 6px rgba(0,0,0,48%)" : "1px 4px 5px rgba(0,0,0,40%)"};
        a {
            font-family: "Fredericka the Great";
            color: ${({theme}) => theme.text};
            font-size: 2.8rem;
            letter-spacing: 5px;
            line-height: 3.5rem;
            @media (max-width: 1080px) {
                font-size: 2.3rem;
            }
            @media (max-width: 692px) {
                font-size: 1.8rem;    
            }
            @media (max-width: 514px) {
                line-height: 2.7rem;
            }
        }
    }
`
export const HomeEmailWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 55rem;
    height: 15rem;
    text-shadow: ${({theme}) => theme.theme === "lightTheme" ? "0 3px 6px rgba(0,0,0,48%)" : "1px 4px 5px rgba(0,0,0,40%)"};
    @media (max-width: 1080px) {
        width: 48rem;
    }
    @media only screen 
    and (min-device-width: 768px) 
    and (max-device-width: 1280px) 
    and (-webkit-min-device-pixel-ratio: 1.5) 
    and (orientation: portrait) {
        width: 45rem;
        padding: 3rem;
    }
    @media (max-width: 830px) {
        width: 40rem;
    }
    @media (max-width: 692px) {
        width: 30rem;        
    }
    @media (max-width: 514px) {
        align-items: center;
        flex-direction: column;
    }
    @media (max-width: 514px) {
            height: 9rem;
    }
    @media (max-width: 448px) {
        width: 15rem;        
    }
    @media (max-width: 375px) {
            /* height: 15rem; */
            overflow: hidden;
        }
    @media only screen 
    and (min-device-width: 768px) 
    and (max-device-width: 1280px) 
    and (-webkit-min-device-pixel-ratio: 1.5) 
    and (orientation: portrait) {
        width: 45rem;
    }
    .email {
        a {
            color: ${({theme}) => theme.text};
            font-family: "Orbitron";
            font-size: 2.8rem;
            line-height: 2.8rem;
            letter-spacing: 3.5px;
            @media (max-width: 1080px) {
                    font-size: 2.3rem;
                    margin-left: 0;
                }
            @media (max-width: 692px) {
                    font-size: 1.8rem;    
                }
            @media (max-width: 514px) {
                font-weight: 700;
            }
        }
    }
    .email_label {
        font-family: "Advent Pro";
        font-size: 1.5rem;
        letter-spacing: 5px;
        margin-left: 7rem;
        font-weight: 700;
        @media (max-width: 1080px) {
            margin-left: 0;
        }
        @media (max-width: 692px) {
            font-size: 1.2rem;    
        }
        @media (max-width: 514px) {
            margin-left: -10.5rem;
        }
    }
`