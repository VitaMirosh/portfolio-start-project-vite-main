import styled from "styled-components";
import {Icon} from "../../../components/icon/Icon.tsx";
import {SectionTitle} from "../../../components/SectionTitle.tsx";
import {Slider} from "../../../components/slider/Slider.tsx";
import {FlexWrapper} from "../../../components/FlexWrapper.tsx";
import {IconWrapper} from "../skills/skill/Skill.tsx";
import {Container} from "../../../components/Container.ts";


export const Testimony = () => {
  return (
    <StyledTestimony>
      <Container>
        <SectionTitle>Testimony</SectionTitle>
        <FlexWrapper direction={"column"} aling={"center"}>
          <IconWrapper>
            <Icon iconId={"quotes"} fill={"rgb(5,236,245)"}/>
          </IconWrapper>
          <Slider/>
        </FlexWrapper>
      </Container>

    </StyledTestimony>

  );
};

const StyledTestimony = styled.section`
    background-color: #befffa;
    min-height: 50vh;

    ${IconWrapper} {
        margin: 28px 0 72px;
    }
    ${SectionTitle}{
        margin-top: 25px;
    }
`