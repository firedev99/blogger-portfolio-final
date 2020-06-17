import styled from 'styled-components'

export const ToggleContainer = styled.button`
    background: transparent;
    border: 2px solid ${({ theme }) => theme.text};
    border-radius: 20px;
    cursor: pointer;
    display: flex;
    font-size: 0.5rem;
    outline: none;
    justify-content: space-between;
    margin: 0 auto;
    overflow: hidden;
    padding: 0.5rem;
    position: absolute;
    z-index: 1000;
    width: 5rem;
    height: 3rem;
    top: 1rem;
    right: 3rem;
    outline: none;
    @media (max-width: 999px) {
            width: 4rem;
            height: 2.5rem;
            right: 0.5rem;
            border-radius: 15px;
        }
    @media (max-width: 691px) {
            left: 0rem;
            top: 6rem;
        }
    @media (max-width: 594px) {
            top: 5.5rem;
    }
    @media (max-width: 428px) {
            top: 5rem;
    }
  svg {
    height: auto;
    width: 1.8rem;
    transition: all 0.3s linear;
    @media (max-width: 999px) {
            width: 1.2rem;
        }
    &:nth-child(1) {
        transform: ${({theme}) => theme.theme === "lightTheme" ? "translateY(0)" : "translateY(100px)" };
    }
    &:nth-child(2) {
        transform: ${({theme}) => theme.theme === "darkTheme" ? "translateY(0)" : "translateY(-100px)" };
    }
  }
`
