import styled from "styled-components";
import {Icon} from "../../components/icon/Icon.tsx";
import {FlexWrapper} from "../../components/FlexWrapper.tsx";


export const Footer = () => {
  return (
    <StyledFooter>
      <FlexWrapper direction={"column"} aling={"center"}>
        <Name>Vitaliia</Name>
        <SocialList>
          <SocialItem>
            <SocialLink>
              <Icon height={"21px"} width={"21px"} viewBox={"0 0 21px 21px"} iconId={"instagram"}/>
            </SocialLink>
          </SocialItem>

          <SocialItem>
            <SocialLink>
              <Icon height={"21px"} width={"21px"} viewBox={"0 0 21px 21px"} iconId={"telegram"}/>
            </SocialLink>
          </SocialItem>

          <SocialItem>
            <SocialLink>
              <Icon height={"21px"} width={"21px"} viewBox={"0 0 21px 21px"} iconId={"link"}/>
            </SocialLink>
          </SocialItem>

        </SocialList>
        <Copyright>© 2025 Miroshnychenko Vitallia, All Rights Reserved.</Copyright>
      </FlexWrapper>

    </StyledFooter>
  );
};

const StyledFooter = styled.footer`
    background-color: #ffc267;
    min-height: 30vh;

`
const Name = styled.span`

`
const SocialList = styled.ul`
    display: flex;
    gap: 30px;

`
const SocialItem = styled.li`

`

const SocialLink = styled.a`

`

const Copyright = styled.small`

`