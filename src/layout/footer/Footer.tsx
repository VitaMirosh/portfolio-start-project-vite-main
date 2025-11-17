import styled from "styled-components";
import {Icon} from "../../components/icon/Icon.tsx";
import {FlexWrapper} from "../../components/FlexWrapper.tsx";
import {theme} from "../../styles/Theme.ts";


export const Footer = () => {
  return (
    <StyledFooter>
      <FlexWrapper direction={"column"} aling={"center"}>
        <Name>Vitaliia</Name>
        <SocialList>
          <SocialItem>
            <SocialLink>
              <Icon height={"21px"} width={"21px"}  viewBox={"0 0 21px 21px"} iconId={"instagram"}/>
            </SocialLink>
          </SocialItem>

          <SocialItem>
            <SocialLink>
              <Icon height={"21px"} width={"21px"} viewBox={"0 0 21px 21px"} iconId={"telegram"}/>
            </SocialLink>
          </SocialItem>

          <SocialItem>
            <SocialLink>
              <Icon height={"21px"} width={"21px"}  viewBox={"0 0 21px 21px"} iconId={"link"}/>
            </SocialLink>
          </SocialItem>

        </SocialList>
        <Copyright>© 2025 Miroshnychenko Vitallia, All Rights Reserved.</Copyright>
      </FlexWrapper>

    </StyledFooter>
  );
};

const StyledFooter = styled.footer`
    background-color: ${theme.colors.secondaryBg};
    padding:40px 0

`
const Name = styled.span`
    font-family: "Josefin Sans", sans-serif;
    font-weight: 700;
    font-size: 22px;
    letter-spacing: 3px;

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
    
     color:${theme.colors.accent} ;
    &:hover {
        color:${theme.colors.font};
        transform:translateY(-4px);
    }
`

const Copyright = styled.small`
    font-weight: 400;
    font-size: 12px;
    text-align: center;
    color: rgba(255, 255, 255, 0.5);



`