import styled from "styled-components";
import {Logo} from "../../components/logo/Logo.tsx";
import {Container} from "../../components/Container.ts";
import {FlexWrapper} from "../../components/FlexWrapper.tsx";
import {MobileMenu} from "./mobileMenu/MobileMenu.tsx";
import {theme} from "../../styles/Theme.ts";
import {HeaderMenu} from "./headerMenu/HeaderMenu.tsx";


const item = ["Home","Skills","Works","Testimony","Contact"]


export const Header = () => {
  return (
    <StyledHeader>
      <Container>
        <FlexWrapper justify={'space-between'} aling={"center"}>
          <Logo/>
          <HeaderMenu menuItems={item}/>
          <MobileMenu menuItems={item}/>
        </FlexWrapper>
      </Container>
    </StyledHeader>
  );
};
const StyledHeader = styled.header`
    background-color: ${theme.colors.highlight};
    padding: 20px 0;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 9999;
`