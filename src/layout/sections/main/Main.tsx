import styled from "styled-components";
import photo from '../../../assets/images/photo.webp'
import {FlexWrapper} from "../../../components/FlexWrapper.tsx";

export const Main = () => {
  return (
    < StyledMain>
      <FlexWrapper aling={"center"} justify={"space-around"}>
        <div>
          <span>Hi There</span>
          <Name>I am Vitaliia Miroshnychenko</Name>
          <MainTitle>A web Developer</MainTitle>
        </div>
        <Photo src={photo} alt=""/>
      </FlexWrapper>
    </ StyledMain>
  );
};

const StyledMain = styled.section`
    min-height: 100vh;
    background-color: #ffe6e6 ;
`

const Photo = styled.img`
    width: 350px;
    height: 450px;
    object-fit: cover;
     
`
const MainTitle = styled.h1`
  
`
const Name = styled.h2`

`