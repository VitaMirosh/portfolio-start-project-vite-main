import styled from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle.tsx";
import {Button} from "../../../components/Button.tsx";


export const Slogan = () => {
  return (
    <StyledSlogan>
      <SectionTitle>I am available for freelance</SectionTitle>
      <Button>Hire me</Button>
    </StyledSlogan>
  );
};

const StyledSlogan = styled.section`
    min-height: 30vh;
    background-color: #f8daff;
`