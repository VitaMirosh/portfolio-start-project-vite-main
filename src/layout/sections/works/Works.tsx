import {SectionTitle} from "../../../components/SectionTitle.ts";
import {TabMenu, TabStatusType} from "./tabMenu/TabMenu.tsx";
import {FlexWrapper} from "../../../components/FlexWrapper.ts";
import {Work} from "./work/Work.tsx"
import socialImg from "../../../assets/images/pic11.webp";
import socialImg2 from "../../../assets/images/pic22.webp"
import {Container} from "../../../components/Container.ts";
import * as React from "react";
import {S} from "./Works_Styles.ts";
import {useState} from "react";


// const tabsItems = ["All", "landing page", "React", "spa"]

const tabsItems: Array<{status:TabStatusType, title: string }> = [
  {
    title: "All",
    status:"all",
  },
  {
    title: "Landing page",
    status:"landing",
  },
  {
    title: "React",
    status:"react",
  },
  {
    title: "Spa",
    status:"spa",
  }
]

const worksData = [
  {
    title: "Social Network",
    src: socialImg,
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    type: "spa"
  },
  {
    title: "Timer",
    src: socialImg2,
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    type: "react"
  }
]
export const Works: React.FC = () => {
  const [currentFilterStatus,setCurrentFilterStatus] = useState("all")

  let filteredWorks = worksData

  if (currentFilterStatus === "landing") {
    filteredWorks = worksData.filter(work=>work.type === "landing");
  }
  if (currentFilterStatus === "react") {
    filteredWorks = worksData.filter(work=>work.type === "react");
  }
  if (currentFilterStatus === "spa") {
    filteredWorks = worksData.filter(work=>work.type === "spa");
  }

  function changeFilterStatus (value:TabStatusType) {
    setCurrentFilterStatus(value)
  }
  return (
    <S.Works id={"works"}>
      <Container>
        <SectionTitle>My works</SectionTitle>
        <TabMenu tabsItems={tabsItems}
                 changeFilterStatus={changeFilterStatus}
                 currentFilterStatus={currentFilterStatus}/>
        <FlexWrapper justify={"space-between"} aling={"flex-start"} wrap={"wrap"}>
          {filteredWorks.map((w) => {
            return <Work title={w.title}
                         src={w.src}
                         text={w.text}/>
          })}
        </FlexWrapper>
      </Container>
    </S.Works>
  );
};

