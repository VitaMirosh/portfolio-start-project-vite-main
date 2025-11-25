import photo from '../../../assets/images/photo.png'
import {FlexWrapper} from "../../../components/FlexWrapper.ts";
import {Container} from "../../../components/Container.ts";
import * as React from "react";
import {S} from './Main_Styles.ts';
import Typewriter from 'typewriter-effect';



export const Main: React.FC = () => {
  return (
    < S.Main>
      <Container>
        <FlexWrapper aling={"center"} justify={"space-around"} wrap={"wrap"}>
          <div>
            <S.SmallText>Hi There</S.SmallText>
            <S.Name>I am <span>Vitaliia Miroshnychenko</span></S.Name>
            {/*<S.MainTitle>A Frontend Developer.</S.MainTitle>*/}
            <S.MainTitle>
              <p>A Frontend Developer.</p>
              <Typewriter
                options={{
                  strings: ["A Frontend Developer."],
                  autoStart: true,
                  loop: true,
                  delay:150
                }}
              />
            </S.MainTitle>
          </div>
          <S.PhotoWrapper>
            <S.Photo src={photo} alt=""/>
          </S.PhotoWrapper>
        </FlexWrapper>
      </Container>
    </ S.Main>
  );
};

