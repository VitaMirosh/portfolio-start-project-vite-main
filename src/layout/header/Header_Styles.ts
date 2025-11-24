import styled from "styled-components";
import {theme} from "../../styles/Theme.ts";

const Header = styled.header`
    background-color: ${theme.colors.highlight};
    padding: 20px 0;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 9999;
`

export const S = {
  Header,
}