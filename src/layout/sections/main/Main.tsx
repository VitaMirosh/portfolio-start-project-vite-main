import styled from "styled-components";
import photo from '../../../assets/images/photo.webp'
import {FlexWrapper} from "../../../components/FlexWrapper.tsx";
import {Container} from "../../../components/Container.ts";
import {theme} from "../../../styles/Theme.ts";
import {font} from "../../../styles/Common.ts";

export const Main = () => {
  return (
    < StyledMain>
      <Container>
        <FlexWrapper aling={"center"} justify={"space-around"} wrap={"wrap"}>
          <div>
            <SmallText>Hi There</SmallText>
            <Name>I am <span>Vitaliia Miroshnychenko</span></Name>
            <MainTitle>A Frontend Developer.</MainTitle>
          </div>
          <PhotoWrapper>
            <Photo src={photo} alt=""/>
          </PhotoWrapper>

        </FlexWrapper>
      </Container>
    </ StyledMain>
  );
};

const StyledMain = styled.section`
    min-height: 100vh;
    background-color: #ffe6e6;
    display: flex;
    
`
const PhotoWrapper=styled.div`
  position : relative;
    z-index: 0;
    margin-top: 65px;
    
    &::before{
        content: "";
        width: 360px;
        height: 470px;
        border: 5px solid ${theme.colors.accent};
        
        position: absolute;
        top:-24px;
        left:24px;
        z-index: -1;
        
        @media ${theme.media.mobile} {
            width: 314px;
            height: 414px;
            top:-17px;
            left:20px;
           
        }
    }
    
`

const Photo = styled.img`
    width: 350px;
    height: 430px;
    object-fit: cover;
    margin-right: 15px;

    @media ${theme.media.mobile} {
        width: 310px;
        height: 380px;
    }
`
const MainTitle = styled.h1`
    ${font({ family:"'Josefin Sans', sans-serif", weight:400, Fmax:27, Fmin:20})}
    
`

const Name = styled.h2`
    ${font({ family:"'Josefin Sans', sans-serif", weight:700,Fmax:50,Fmin:25})}
   
    letter-spacing: 0.05em;
    margin: 10px 0;
    
span{
    position: relative;
    z-index: 0;
    white-space: nowrap;
  
    
    &::before{
        content:"";
        display:inline-block;
        width: 100%;
        height: 15px;
        background-color: ${theme.colors.accent};
        position: absolute;
        bottom: 0;
        z-index: -1;
       
        }
    }
}
    @media ${theme.media.mobile} {
        margin: 15px 0 22px;
        
    }

`
const SmallText = styled.span`
    font-weight: 400;
    font-size: 14px;
`