import { styled } from "styled-components";
import { Heading } from "../../utils/commonStyles";




const ContactHeading = styled.h1`
    ${Heading}
    padding-top: 100px;
    font-size: 1.5rem;
    text-transform: capitalize;
    @media screen and (max-width: ${(p) => `${p.theme.bp.desktops}px`}){
        padding-top: 0px;
        margin-top: 0px;
        font-size: 1.5rem;
    }
`




const FormContainer = styled.div`
    width: 90%;
    padding: 20px;

    @media screen and (max-width: ${(p) => `${p.theme.bp.desktops}px`}){
       max-width: 100%;
    }
`

const Button = styled.button`
  font-size: 18px;
  padding: 10px 10px 10px 5px;
  margin: 0 auto;
  display: table;
  width: 50%;
  border: none;
  border-radius: 0;
  margin-top: 10px;
  /* margin-left: 25%; */
  cursor: pointer;
  color: black;
  background: linear-gradient(to left, ${(p) => p.theme.color.metallicGold} 50%, ${(p) => p.theme.color.lightDarkBlue} 50%) right;
  background-size: 200%;
  transition: .5s ease-out;

  &:hover {
    background-position: left;
    color: white;
  }

  &:focus {
    transition: none;
    background: black;
    color: white;
  }

  @media screen and (max-width: ${(p) => `${p.theme.bp.desktops}px`}){
       min-width: 100%;
       margin-left: 0px;
    }
`


export {
    ContactHeading,
    FormContainer,
    Button,
}