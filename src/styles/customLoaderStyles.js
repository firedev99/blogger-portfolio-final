import styled from 'styled-components'
import { motion } from 'framer-motion'

export const LoaderWrapper = styled(motion.div)`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    font-family: "Advent Pro";
    height: 100vh;
    width: 100%;
    position: fixed;
    overflow: hidden;
    scroll-behavior: none;
    background: #1F1F1F;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    text-align: center;
    z-index: 2000;
        img {
            position: absolute;
            width: 320px;
            height: 320px;
            object-fit: cover;
        }
`
export const LoadingText = styled.div`
    position: relative;
    font-family: "Advent Pro";
    top: 13rem;
    color: whitesmoke;
    font-size: 1.3rem;
    letter-spacing: 3px;
`