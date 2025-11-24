import styled from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle.ts";
import {theme} from "../../../styles/Theme.ts";

const Contact = styled.section`
    ${SectionTitle}{
        margin-top: -20px;
    }
`
const Form = styled.form`
    max-width: 540px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 16px;
    margin: 0 auto;
    
   & textarea{
        resize: none;
        height: 155px;
    }
`
const Field = styled.input`
    width: 100%;
    background-color:${theme.colors.highlight} ;
    border:none;
    padding: 7px 15px;

    font-family: "Poppins", sans-serif;
    font-weight: 400;
    font-size: 12px;
    letter-spacing: 0.05em;
    color: ${theme.colors.font};
    
    &::placeholder {
        color: ${theme.colors.placeholderColor};
        text-transform: capitalize;
       
    }
 &:focus-visible{
     outline:1px solid ${theme.colors.accent};
 }  

`
export const S ={
  Contact,
  Form,
  Field
}
