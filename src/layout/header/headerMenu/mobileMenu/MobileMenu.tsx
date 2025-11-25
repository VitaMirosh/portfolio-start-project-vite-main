import {S} from "../../HeaderMenu_styles.ts";
import {Menu} from "../menu/Menu.tsx";
import * as React from "react";
import {useState} from "react";


export const MobileMenu: React.FC<{ menuItems: Array<string> }> = (props: { menuItems: Array<string> }) => {
  const [menuIsOpen, setMenuIsOpen] = useState(false)
  const onBurgerBtnClick = ()=>{
    setMenuIsOpen(!menuIsOpen)
  }
  return (
    <S.MobileMenu>
      <S.BurgerButton isOpen={menuIsOpen} onClick={onBurgerBtnClick}>
        <span></span>
      </S.BurgerButton>

      <S.MobileMenuPopup isOpen={menuIsOpen} onClick={()=>{setMenuIsOpen(false)}}>
        <Menu menuItems={props.menuItems}></Menu>
      </S.MobileMenuPopup>
    </S.MobileMenu>
  );
};

