import styled from 'styled-components'

export const BlogWrapper = styled.div`
    flex-grow: 1;
    margin: 0 auto;
    position: relative;
    width: 100vw;
    height: 100%;
    .texture {
        position: fixed;
        z-index: -1;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        object-fit: cover;
        height: 100%;
        width: 100%;
        opacity: 40%;
        display: ${({theme}) => theme.theme === "darkTheme" ? "none" : "block"};
    }
`
export const BlogHeading = styled.div`
    position: fixed;
    top: -1.9rem;
    opacity: 70%;
    @media (max-width: 1118px) {
        top: 7rem;
        left: 3rem;
        transform: rotate(90deg);
    }
    @media (max-width: 1080px) {
        top: 7rem;
        left: -1rem;
        transform: rotate(90deg);
    }
    @media (max-width: 958px) {
        top: 7rem;
        left: -7rem;
        transform: rotate(90deg);
    }
    @media (max-width: 858px) {
        left: -12rem;
    }
    @media (max-width: 758px) {
        left: -18rem;
    }
    @media (max-width: 693px) {
        left: -22rem;
    }
    @media (max-width: 613px) {
        left: -29rem;
    }
    @media (max-width: 518px) {
        left: -32rem;
    }
    @media (max-width: 458px) {
        left: -35rem;
    }
    @media (max-width: 413px) {
        left: -40rem;
        opacity: 50%;
    }
    h1 {
        font-size: 6rem;
        font-family: "Fredericka the Great";
        text-transform: uppercase;
        margin: 0 0 0.7rem 0;
        font-weight: 100;
        letter-spacing: 10px;
        text-shadow: ${({theme}) => theme.theme === "lightTheme" ? "0 3px 6px rgba(0,0,0,48%)" : "1px 4px 5px rgba(0,0,0,40%)"};
    }
    .line {
        border-top: 2px solid ${({theme}) => theme.text};
        border-bottom: 0;
        @media (max-width: 1118px) {
            display: none;
        }
    }
`
export const BlogTitle = styled.div`
    display: flex;
    flex-direction: column;
    text-align: right;
    position: absolute;
    right: 2rem;
    top: 7rem;
    @media (max-width: 1118px) {
        right: 12rem;
        top: 2rem;
    }
    @media (max-width: 798px) {
        right: 8rem;
    }
    @media (max-width: 693px) {
        top: 10rem;
        text-align: left;
        left: 40%;
        right: 0;
        transform: translateX(-40%);
    }
    @media (max-width: 523px) {
            left: 45%;
            transform: translateX(-45%);
        }
    @media (max-width: 473px) {
            left: 35%;
            transform: translateX(-35%);
        }
    span {
        font-size: 5rem;
        font-family: "Orbitron";
        line-height: 5rem;
        font-weight: 700;
        text-shadow: ${({theme}) => theme.theme === "lightTheme" ? "0 3px 6px rgba(0,0,0,48%)" : "1px 4px 5px rgba(0,0,0,40%)"};
        @media (max-width: 1118px) {
           font-size: 4rem;
        }
        @media (max-width: 858px) {
            font-size: 3rem;
            line-height: 4rem;
        }
        @media (max-width: 693px) {
            font-size: 2.3rem;
            line-height: 3rem;
        }
        @media (max-width: 523px) {
            font-size: 2rem;
            line-height: 2.5rem;
            white-space: nowrap;
        }
    }
`
export const ContentBox = styled.div`
    display: flex;
    flex-direction: row;
    position: absolute;
    right: 2rem;
    top: 20rem;
    @media (max-width: 1118px) {
        flex-direction: column;
        right: 0;
        top: 17rem;
        width: 100%;
        align-items: center;
        justify-content: center;
        /* margin-bottom: 3rem; */
    }
    .item {
        width: 20rem;
        height: 20rem;
        margin: 0 1rem;
        display: flex;
        flex-direction: column;
        @media (max-width: 1118px) {
            width: 30rem;
            height: 25rem;
            margin: 1.5rem 0rem;
        }
        @media (max-width: 623px) {
            width: 20rem;
            height: 20rem;
        }
        @media (max-width: 413px) {
            width: 18rem;
            height: 18rem;
        }
        .item_1 {
            height: 60%;
            .youtube_video {
                object-fit: cover;
                height: 100%;
                width: 100%;
            }
        }
        .item_2 {
            height: 40%;
            font-family: "Orbitron";
            text-transform: uppercase; 
            h3 {
                margin: 0.5rem 0 0 1rem;
                display: flex;
                letter-spacing: 2px;
                flex-direction: column;
                line-height: 1.3rem;
                text-shadow: ${({theme}) => theme.theme === "lightTheme" ? "0 3px 6px rgba(0,0,0,48%)" : "1px 4px 5px rgba(0,0,0,40%)"};
                .title_2 {
                    margin-left: 3rem;
                }
            }
            p {
                letter-spacing: 1px;
                font-size: 0.9rem;
                margin-left: 0.7rem;
                font-weight: 700;
            }
        }
    }
`
export const TravelKey = styled.div`
    font-family: "Advent Pro";
    font-size: 2rem;
    position: absolute;
    z-index: 1000;
    top: 1rem;
    left: 1rem;
    letter-spacing: 1px;
    text-shadow: ${({theme}) => theme.theme === "darkTheme" ? "1px 4px 5px rgba(0,0,0,40%)" : null}; 
    display: none;
    @media (max-width: 1118px) {
        display: block;
    }
    @media (max-width: 478px) {
        font-size: 1.6rem;
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
export const YoutubeIntro = styled.div`
    position: absolute;
    top: 97rem;
    left: 50%;
    transform: translateX(-50%);
    margin-bottom: 3rem;
    display: none;
    @media (max-width: 1118px) {
        display: block;
    }
    @media (max-width: 623px) {
            top: 85rem;
    }
    @media (max-width: 413px) {
            top: 80rem;
    }
    .youtube_intro {
        &_content {
            h3 {
                font-family: "Advent Pro";
                text-transform: uppercase;
                font-size: 1.4rem;
                letter-spacing: 2px;
                line-height: 0.4rem; 
                text-shadow: ${({theme}) => theme.theme === "lightTheme" ? "0 3px 6px rgba(0,0,0,48%)" : "1px 4px 5px rgba(0,0,0,40%)"};
            }
        }
        &_desc {
            width: 15rem;
            display: flex;
            align-items: center;
            justify-content: space-between;
            a {
                font-family: "Fredericka the Great";
            font-size: 1.3rem;
            letter-spacing: 2px;
            text-shadow: ${({theme}) => theme.theme === "lightTheme" ? "0 3px 6px rgba(0,0,0,48%)" : "1px 4px 5px rgba(0,0,0,40%)"};
            color: ${({theme}) => theme.text};
            }
            img {
                width: 3rem;
                height: auto;
                filter: brightness(0.9);
            }
        }
    }
`