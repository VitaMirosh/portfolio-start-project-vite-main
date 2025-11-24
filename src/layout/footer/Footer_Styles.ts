import styled from "styled-components";
import {theme} from "../../styles/Theme.ts";
import { font } from "../../styles/Common.ts";

const Footer = styled.footer`
    background-color: ${theme.colors.secondaryBg};
    padding: 40px 0



`
const Name = styled.span`
    ${font({family: '"Josefin Sans", sans-serif', weight: 700, Fmax: 22, Fmin: 16})}
    font-family: "Josefin Sans", sans-serif;
    letter-spacing: 3px;
    margin-top: -15px;

`
const SocialList = styled.ul`
    display: flex;
    gap: 20px;
    margin: 30px 0;

`
const SocialItem = styled.li`

`

const SocialLink = styled.a`
    background-color: rgba(255, 255, 255, 0.69);
    border-radius: 50px;
    width: 35px;
    height: 35px;

    display: flex;
    justify-content: center;
    align-items: center;

    color: ${theme.colors.accent};

    &:hover {
        color: ${theme.colors.font};
        transform: translateY(-4px);
    }
`

const Copyright = styled.small`
    font-weight: 400;
    font-size: 12px;
    text-align: center;
    color: rgba(255, 255, 255, 0.5);
`
 export const S = {
   Footer,
   Name,
   SocialList,
   SocialItem,
   SocialLink,
   Copyright
 }