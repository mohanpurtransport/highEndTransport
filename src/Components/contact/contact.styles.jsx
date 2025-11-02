import { styled } from "styled-components";
import { Heading } from "../../utils/commonStyles";


const ContactContainer = styled.div`
    background-color: ${(p) => p.theme.color.grey};
    margin-top: 50px;
    padding-bottom: 50px;
`

const ContactHeading = styled.h1`
    ${Heading}
    padding-top: 100px;

    @media screen and (max-width: ${(p) => `${p.theme.bp.desktops}px`}){
        padding-top: 0px;
        margin-top: 0px;
    }
`


const ContactContents = styled.div`
    width: 100%;
    display: flex;
    gap: 20px;
    align-items: center;

    @media screen and (max-width: ${(p) => `${p.theme.bp.desktops}px`}){
        flex-direction: column-reverse;
        padding-top: 50px;
    }
`

const ContactImageContainer = styled.div`
    max-width: 50%;
    align-self: flex-end;

    @media screen and (max-width: ${(p) => `${p.theme.bp.desktops}px`}){
       align-self: center;
       max-width: 75%;
       display: none;
    }


    img{
        max-width: 100%;
        object-fit: cover;
        overflow: hidden;
    }

`


export {
    ContactContainer,
    ContactContents,
    ContactImageContainer,
    ContactHeading
}