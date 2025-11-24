import { S } from "../../HeaderMenu_styles.ts";
import {Menu} from "../menu/Menu.tsx";
import * as React from "react";


export const DesktopMenu: React.FC<{ menuItems: Array<string> }> = (props: { menuItems: Array<string> }) => {
  return (
    <S.DesktopMenu>
      <Menu menuItems={props.menuItems}></Menu>
    </S.DesktopMenu>
  );
};
