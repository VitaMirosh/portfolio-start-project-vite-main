import styled from "styled-components";


const Slider = styled.div`
    display: flex;
    max-width: 500px;
    width: 100%;
    flex-direction: column;
    align-items: center;
    border:1px solid red
`
const Slide = styled.div`
  text-align: center;
`
const Text = styled.p`

`
const Name = styled.span`
    font-family: "Josefin Sans", sans-serif;
    font-weight: 600;
    font-size: 16px;
    letter-spacing: 1px;
    text-transform: uppercase;
    margin: 22px 0 32px;
    display: inline-block;


`

export const S = {
  Slider,
  Slide,
  Text,
  Name,


}
