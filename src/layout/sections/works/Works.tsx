import styled from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle.tsx";
import {TabMenu} from "./tabMenu/TabMenu.tsx";
import {FlexWrapper} from "../../../components/FlexWrapper.tsx";
import {Work} from "./work/Work.tsx"
import socialImg from "../../../assets/images/pic11.webp";
import socialImg2 from "../../../assets/images/pic22.webp"
import {Container} from "../../../components/Container.ts";


const workItems = ["All", "landing page", "React", "spa"]

export const Works = () => {
  return (
    <StyledWorks>
      <Container>
        <SectionTitle>My works</SectionTitle>
        <TabMenu menuItems={workItems}/>
        <FlexWrapper justify={"space-between"} aling={"flex-start"} wrap={"wrap"}>
          <Work title={"Social Network"}
                text={"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit."}
                src={socialImg}/>
          <Work title={"Timer"}
                text={"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit  ut labore et dolore magna aliqua Ut enim"}
                src={socialImg2}/>
        </FlexWrapper>
      </Container>
    </StyledWorks>
  );
};

const StyledWorks = styled.section`
   ${FlexWrapper} {
       gap:30px
   }
    ${SectionTitle}{
        margin-top: -10px;
      
    }  
`