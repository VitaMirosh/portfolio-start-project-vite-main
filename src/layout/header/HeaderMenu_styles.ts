import styled, {css} from "styled-components";
import {theme} from "../../styles/Theme.ts";
import {Link} from "react-scroll";

const MenuItem = styled.li`
    position: relative;

`
const Mask = styled.span`
    position: absolute;
    top: 0;
    left: 0;
    display: inline-block;
    height: 50%;
    overflow-y: hidden;
    color: ${theme.colors.font};
    transition: ${theme.animation.transition};

    & + & {
        top: 50%;

        span {
            display: inline-block;
            transform: translateY(-50%);
        }
    }
`

const NavLink = styled(Link)`
    font-family: 'Josefin Sans', sans-serif;
    font-weight: 400;
    font-size: 50px;
    text-align: center;
    color: transparent;

    &::before {
        content: "";
        display: inline-block;
        height: 3px;
        background-color: ${theme.colors.font};

        position: absolute;
        top: 50%;
        left: -10px;
        right: -10px;
        z-index: 1;
        transform: scale(0);
        transition: ${theme.animation.transition};
    }

    &:hover, &.active {
        &::before {
            transform: scale(1);
        }
       

        ${Mask} {
            transform: skewX(12deg) translateX(5px);
            color: ${theme.colors.accent};

            & + ${Mask} {
                transform: skewX(12deg) translateX(-5px);
            }
        }

    }
`

//mobile menu
const MobileMenu = styled.nav`
`
const MobileMenuPopup = styled.div<{ isOpen: boolean }>`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 9999;
    background-color: ${theme.colors.secondaryBg};
    display: none;
    display: flex;
    justify-content: center;
    align-items: center;
    transform:translateY(-100%);
    transition: 1s ease-in-out;

    
    ul {
        display: flex;
        gap: 10px;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        transition: 1s ease-in-out;
        

    }
    ${props => props.isOpen && css<{ isOpen: boolean }>`
        transform:translateY(0);
        & ul {
            gap:30px
        }
    `}
`

    const BurgerButton = styled.button<{ isOpen: boolean }>`
    position: fixed;
    top: -100px;
    right: -100px;
    width: 200px;
    height: 200px;
    z-index: 9999999999;

    span {
        display: block;
        width: 36px;
        height: 2px;
        background-color: ${theme.colors.font};
        position: absolute;
        left: 40px;
        bottom: 50px;


        ${props => props.isOpen && css<{ isOpen: boolean }>`
            background-color: ${props => props.isOpen ? theme.colors.secondaryBg : theme.colors.font};
        `}
        &::before {
            content: "";
            display: block;
            width: 36px;
            height: 2px;
            background-color: ${theme.colors.font};
            position: absolute;
            transform: translateY(-10px);

            ${props => props.isOpen && css<{ isOpen: boolean }>`
                transform: rotate(-45deg) translateY(0);
            `}
        }

        &::after {
            content: "";
            display: block;
            width: 24px;
            height: 2px;
            background-color: ${theme.colors.font};
            position: absolute;
            transform: translateY(10px);

            ${props => props.isOpen && css<{ isOpen: boolean }>`
                transform: rotate(45deg) translateY(0);
                width: 36px
            `}
        }

    }
`
//Desktop menu
const DesktopMenu = styled.nav`
    ul {
        display: flex;
        gap: 30px;
        justify-content: center;
    }
`

export const S = {
  NavLink,
  MenuItem,
  Mask,
  MobileMenu,
  MobileMenuPopup,
  BurgerButton,
  DesktopMenu
}