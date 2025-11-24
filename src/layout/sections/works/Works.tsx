import {SectionTitle} from "../../../components/SectionTitle.tsx";
import {TabMenu} from "./tabMenu/TabMenu.tsx";
import {FlexWrapper} from "../../../components/FlexWrapper.tsx";
import {Work} from "./work/Work.tsx"
import socialImg from "../../../assets/images/pic11.webp";
import socialImg2 from "../../../assets/images/pic22.webp"
import {Container} from "../../../components/Container.ts";
import * as React from "react";
import { S } from "./Works_Styles.ts";


const workItems = ["All", "landing page", "React", "spa"]
const workData = [
  {
    title: "Social Network",
    src: socialImg,
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
  },
  {
    title: "Timer",
    src: socialImg2,
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
  }
]
export const Works: React.FC = () => {
  return (
    <S.Works>
      <Container>
        <SectionTitle>My works</SectionTitle>
        <TabMenu menuItems={workItems}/>
        <FlexWrapper justify={"space-between"} aling={"flex-start"} wrap={"wrap"}>
          {workData.map((w) => {
            return <Work title={w.title}
                         src={w.src}
                         text={w.text}/>
          })}
        </FlexWrapper>
      </Container>
    </S.Works>
  );
};

