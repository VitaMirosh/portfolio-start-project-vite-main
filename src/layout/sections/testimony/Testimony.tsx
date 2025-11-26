import styled from "styled-components";
import {Icon} from "../../../components/icon/Icon.tsx";
import {SectionTitle} from "../../../components/SectionTitle.ts";
import {Slider} from "../../../components/slider/Slider.tsx";
import {FlexWrapper} from "../../../components/FlexWrapper.ts";
import {Container} from "../../../components/Container.ts";
import {S} from '../skills/Skills_Styles.ts'
import * as React from "react";



export const Testimony:React.FC = () => {
  return (
    <StyledTestimony id={"testimony"}>
      <Container>
        <SectionTitle>Testimony</SectionTitle>
        <FlexWrapper direction={"column"} aling={"center"}>
          <S.IconWrapper>
            <Icon iconId={"quotes"} fill={"rgb(245,5,5)"}/>
          </S.IconWrapper>
          <Slider/>
        </FlexWrapper>
      </Container>

    </StyledTestimony>

  );
};

const StyledTestimony = styled.section`
    background-color: #befffa;
    min-height: 50vh;

    ${S.IconWrapper} {
        margin: 28px 0 72px;
    }
    ${SectionTitle}{
        margin-top: 25px;
    }
`