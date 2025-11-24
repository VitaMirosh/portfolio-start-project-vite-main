import {S} from "../../HeaderMenu_styles.ts";
import {Menu} from "../menu/Menu.tsx";
import * as React from "react";


export const MobileMenu: React.FC<{ menuItems: Array<string> }> = (props: { menuItems: Array<string> }) => {
  return (
    <S.MobileMenu>
      <S.BurgerButton isOpen={false}>
        <span></span>
      </S.BurgerButton>

      <S.MobileMenuPopup isOpen={false}>
        <Menu menuItems={props.menuItems}></Menu>
      </S.MobileMenuPopup>
    </S.MobileMenu>
  );
};

