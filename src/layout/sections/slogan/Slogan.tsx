import styled from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle.ts";
import {Button} from "../../../components/Button.ts";
import {Container} from "../../../components/Container.ts";
import {FlexWrapper} from "../../../components/FlexWrapper.ts";
import * as React from "react";


export const Slogan:React.FC = () => {
  return (
    <StyledSlogan id={"slogan"}>
      <Container>
        <FlexWrapper direction={"column"} aling={"center"}>
          <SectionTitle>I am available for freelance</SectionTitle>
          <Button>Hire me</Button>
        </FlexWrapper>
      </Container>

    </StyledSlogan>
  );
};

const StyledSlogan = styled.section`
    min-height: 30vh;
    background-color: #f8daff;
`