import {Icon} from "../../components/icon/Icon.tsx";
import {FlexWrapper} from "../../components/FlexWrapper.tsx";
import {S} from "./Footer_Styles.ts";
import * as React from "react";


const socialItemData = [
  {
    iconId: "instagram"
  },
  {
    iconId: "telegram"
  },
  {
    iconId: "linkedin"
  },


]


export const Footer:React.FC = () => {
  return (
    <S.Footer>
      <FlexWrapper direction={"column"} aling={"center"}>
        <S.Name>Vitaliia</S.Name>
        <S.SocialList>

          {socialItemData.map((s, index) => {
            return <S.SocialItem key={index}>
              <S.SocialLink>
                <Icon height={"21px"} width={"21px"} viewBox={"0 0 21px 21px"} iconId={s.iconId}/>
              </S.SocialLink>
            </S.SocialItem>
          })}

        </S.SocialList>
        <S.Copyright>© 2025 Miroshnychenko Vitallia, All Rights Reserved.</S.Copyright>
      </FlexWrapper>
    </S.Footer>
  );
};

