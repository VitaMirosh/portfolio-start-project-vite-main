import styled from "styled-components";
import {Logo} from "../../components/logo/Logo.tsx";
import {Menu} from "../../components/menu/Menu.tsx";


const item = ["Home","Skills","Works","Testimony","Contact"]


export const Header = () => {
  return (
    <StyledHeader>
     <Logo/>
     <Menu menuItems={item}/>
    </StyledHeader>
  );
};
const StyledHeader = styled.header`
    background-color: teal;
    display: flex;
    justify-content: space-between;
`