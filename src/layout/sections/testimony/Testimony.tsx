import styled from "styled-components";
import {Icon} from "../../../components/icon/Icon.tsx";
import {SectionTitle} from "../../../components/SectionTitle.tsx";
import {Slider} from "../../../components/slider/Slider.tsx";
import {FlexWrapper} from "../../../components/FlexWrapper.tsx";


export const Testimony = () => {
  return (
    <StyledTestimony>
      <SectionTitle>Testimony</SectionTitle>
      <FlexWrapper direction={"column"} aling={"center"}>
        <Icon iconId={"quotes"}/>
        <Slider/>
      </FlexWrapper>

    </StyledTestimony>

  );
};

const StyledTestimony = styled.section`
    background-color: #befffa;
    min-height: 50vh;
`