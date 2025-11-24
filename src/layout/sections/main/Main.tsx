import photo from '../../../assets/images/photo.webp'
import {FlexWrapper} from "../../../components/FlexWrapper.ts";
import {Container} from "../../../components/Container.ts";
import * as React from "react";
import {S} from './Main_Styles.ts';


export const Main: React.FC = () => {
  return (
    < S.Main>
      <Container>
        <FlexWrapper aling={"center"} justify={"space-around"} wrap={"wrap"}>
          <div>
            <S.SmallText>Hi There</S.SmallText>
            <S.Name>I am <span>Vitaliia Miroshnychenko</span></S.Name>
            <S.MainTitle>A Frontend Developer.</S.MainTitle>
          </div>
          <S.PhotoWrapper>
            <S.Photo src={photo} alt=""/>
          </S.PhotoWrapper>
        </FlexWrapper>
      </Container>
    </ S.Main>
  );
};

