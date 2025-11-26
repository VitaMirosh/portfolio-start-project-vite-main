import photo from '../../../assets/images/photo.png'
import {FlexWrapper} from "../../../components/FlexWrapper.ts";
import {Container} from "../../../components/Container.ts";
import * as React from "react";
import {S} from './Main_Styles.ts';
import Typewriter from 'typewriter-effect';
import Tilt from 'react-parallax-tilt';


export const Main: React.FC = () => {
  return (
    < S.Main id={"home"}>
      <Container>
        <FlexWrapper aling={"center"} justify={"space-around"} wrap={"wrap"}>
          <div>
            <S.SmallText>Hi There</S.SmallText>
            <S.Name>I am <span>Vitaliia Miroshnychenko</span></S.Name>
            <S.MainTitle>
              <p>A Frontend Developer.</p>
              <Typewriter
                options={{
                  strings: ["A Frontend Developer."],
                  autoStart: true,
                  loop: true,
                  delay: 150
                }}
              />
            </S.MainTitle>
          </div>

            <S.PhotoWrapper>
              <Tilt>
              <S.Photo src={photo} alt=""/>
              </Tilt>
            </S.PhotoWrapper>
        </FlexWrapper>
      </Container>
    </ S.Main>
  );
};



