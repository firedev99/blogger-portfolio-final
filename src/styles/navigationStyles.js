import styled from 'styled-components'
import { motion } from 'framer-motion'

export const MenuCircle = styled.div`
    .menu {
        position: fixed;
        z-index: 2000;
        bottom: 3rem;
        right: 1rem;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 6rem;
        height: 6rem;
        border-radius: 50%;
        background: #D40F0F;
        color: #333;
        transform: translateY(0);
        transition: transform 0.3s ease;
        box-shadow: 1px 3px 6px rgba(0,0,0, 51%);
        cursor: pointer;
        outline: none;
        filter: brightness(0.75);
        @media (max-width: 1370px) {
            bottom: 6rem;
        }
        @media (max-width: 480px) {
            bottom: 4rem;
            width: 5rem;
            height: 5rem;
        }
        span {
            font-family: "Orbitron";
            letter-spacing: 2px;
            font-weight: 700;
            color: whitesmoke;
        }
    }
    .menu.hidden {
        transform: translateY(300%);
    }
`

export const NavigationWrapper = styled(motion.div)`
    position: fixed;
    z-index: 2500;
    height: 100vh;
    width: 100%;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: #1F1F1F;
    overflow: hidden;
    scroll-behavior: none;
    @media screen 
    and (max-height: 450px) 
    and (orientation: landscape) {
        height: 160vh;
    }
`
export const Circles = styled.div`
    position: relative;
    width: 60rem;
    height: 35rem;
    transform: translateX(-50%);
    left: 50%;
    @media (max-width: 1101px) {
        width: 43rem;
        height: 43rem;
    }
`
export const CircleOne = styled.div`
    position: absolute;
    width: 25rem;
    height: 25rem;
    border-radius: 50%;
    border: 2px solid whitesmoke;
    left: 0;
    filter: brightness(0.7);
    @media (max-width: 1101px) {
        display: none;
    }
`
export const CircleTwo = styled.div`
    position: absolute;
    width: 35rem;
    height: 35rem;
    border-radius: 50%;
    border: 2px solid whitesmoke;
    right: 0.5rem;
    filter: brightness(0.7);
    @media (max-width: 1101px) {
        left: 3rem;
    }
    @media (max-width: 448px) {
           width: 30rem;
           height: 30rem;
           left: 6.5rem;
    }
`
export const KeyName = styled.div`
    font-family: "Advent Pro";
    font-size: 2rem;
    position: absolute;
    top: 2rem;
    right: 13.85rem;
    letter-spacing: 1px;
    text-shadow: ${({theme}) => theme.theme === "darkTheme" ? "1px 4px 5px rgba(0,0,0,40%)" : null}; 
    @media (max-width: 842px) {
            white-space: nowrap;
            right: 0;
            left: 16rem;
    }
    @media (max-width: 448px) {
           left: 17.7rem;
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
export const NavLinks = styled(motion.div)`
    position: absolute;
    z-index: 100;
    right: -3.5rem;
    top: 7rem;
    @media (max-width: 842px) {
        right: 0;                
    }
    @media (max-width: 693px) {
        top: 8rem;
        right: 5rem;                
    }
    @media (max-width: 570px) {
        right: 11rem;
    }
    @media (max-width: 448px) {
           right: 12rem;
    }
    @media screen 
    and (max-height: 450px) 
    and (orientation: landscape) {
        top: 5rem;
    }
    li {
        list-style-type: none;
        a {
            color: whitesmoke;
            font-family: "Advent Pro";
            font-size: 3.2rem;
            line-height: 5rem;
            letter-spacing: 8px;
            font-weight: 700;
            filter: brightness(0.8);
            @media (max-width: 842px) {
                font-size: 2.5rem;
                line-height: 4.2rem;
            }
            @media (max-width: 570px) {
                font-size: 2.1rem;
                line-height: 3.5rem;
                letter-spacing: 2px;
            }
            @media (max-width: 448px) {
                font-size: 2rem;
                line-height: 3.5rem;
                letter-spacing: 3px;
            }
            
        }
        .active {
                font-family: "Fredericka the Great";
                font-size: 3.8rem;
                @media (max-width: 842px) {
                    font-size: 3rem;
                }
                @media (max-width: 570px) {
                    font-size: 2.5rem;
                    letter-spacing: 4px;
                }
                @media (max-width: 448px) {
                    letter-spacing: 2px;
                    font-size: 2.1rem;
                }
            } 
    }
`
export const ExitButton = styled(motion.div)`
    position: absolute;
    bottom: 3rem;
    left: 10rem;
    @media (max-width: 842px) {
            bottom: 3.7rem;
            left: 2rem;
        }
    @media (max-width: 448px) {
           left: 1rem;
           bottom: 3.65rem;
    }
    @media screen 
    and (max-height: 450px) 
    and (orientation: landscape) {
        top: 10rem;
    }
    button {
        background: transparent;
        border: none;
        outline: none;
        font-family: "Advent Pro";
        font-size: 2rem;
        letter-spacing: 5px;
        font-weight: 700;
        color: whitesmoke;
        filter: brightness(0.8);
        cursor: pointer;
        @media (max-width: 842px) {
            font-size: 1.5rem;
        }
        @media (max-width: 448px) {
            font-size: 1.3rem;
        }
        
    }
`
export const SocialLinks = styled(motion.div)`
    position: absolute;
    right: 10rem;
    bottom: 3.5rem;
    width: 20rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    @media (max-width: 842px) {
           width: 15rem;
           bottom: 3.7rem;
           right: 2rem;
    }
    @media (max-width: 448px) {
           width: 13rem;
           right: 1rem;
    }
    a {
        color: whitesmoke;
        filter: brightness(0.8);
        font-family: "Bebas Neue";
        font-size: 1.5rem;
        letter-spacing:4px;
        @media (max-width: 842px) {
            font-size: 1.3rem;
            letter-spacing: 1;
        }
        @media (max-width: 448px) {
           font-size: 1.1rem;
           letter-border-spacing: 0;
        }
    }
`