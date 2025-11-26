import {Icon} from "../icon/Icon.tsx";
import styled from "styled-components";
import {animateScroll as scroll} from "react-scroll";
import {useEffect, useState} from "react";

export const GoToBtn = () => {

  const [showBtn, setShowBtn] = useState(false)

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 200) {
        setShowBtn(true)
      } else {
        setShowBtn(false)
      }
    })
  }, [])
  return (
    <>
      {showBtn && (
        <StyledGoToBtn onClick={() => {
          scroll.scrollToTop()
        }}>
          <Icon iconId={"arrow"} height={"15"} width={"16"} viewBox={"0 0 16 15"}/>
        </StyledGoToBtn>
      )}
    </>
  );
};


const StyledGoToBtn = styled.button`
    background-color: rgba(255, 255, 255, 0.5);
    padding: 8px;
    position: fixed;
    right: 30px;
    bottom: 30px;
`