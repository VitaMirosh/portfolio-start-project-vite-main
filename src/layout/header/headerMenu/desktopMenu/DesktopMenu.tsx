import { S } from "../../HeaderMenu_styles.ts";
import {Menu} from "../menu/Menu.tsx";
import * as React from "react";


export const DesktopMenu: React.FC = () => {
  return (
    <S.DesktopMenu>
      <Menu/>
    </S.DesktopMenu>
  );
};
