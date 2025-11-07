import styled from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle.tsx";
import {Menu} from "../../../components/menu/Menu.tsx";
import {FlexWrapper} from "../../../components/FlexWrapper.tsx";
import {Work} from "./work/Work.tsx"
import socialImg from "../../../assets/images/pic11.webp";
import socialImg2 from "../../../assets/images/pic22.webp"


const workItems = ["All", "landing page", "React", "spa"]

export const Works = () => {
  return (
    <StyledWorks>
      <SectionTitle>My works</SectionTitle>
      <Menu menuItems={workItems}/>
      <FlexWrapper justify={"space-around"}>
        <Work title={"Social Network"}
              text={"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit."}
              src={socialImg}/>
        <Work title={"Timer"}
              text={"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit  ut labore et dolore magna aliqua Ut enim"}
              src={socialImg2}/>
      </FlexWrapper>
    </StyledWorks>
  );
};

const StyledWorks = styled.section`
    min-height: 100vh;
    background-color: #94bcff;
`