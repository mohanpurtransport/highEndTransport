import { styled, css } from "styled-components";
import { ImageContainer, Heading } from "../../utils/commonStyles"

const commonParaStyles = css`

    p{
        font-size: 1.1rem;
        padding: 10px 50px 10px 30px;
        line-height: 1.5rem;
         transition: 0.5s ease-in;
        ul{
            list-style-type: disc;
        }
        b{
            text-transform: uppercase;
            color: ${(p) => p.theme.color.darkBlue};
            font-size: 1.2rem;
        }
        span{
            font-weight: 900;
        }
        
    }
    @media screen and (max-width: ${(p) => `${p.theme.bp.tablets}px`}){

        p{
            font-size: 1rem;
            b{
                font-size: 1.1rem;
            }
        }
    }
`

const TemplateImageContainer = styled.div`
    transition: 0.5s ease-in;
    ${ImageContainer}
`
const ContactTextHeading = styled.h1`
    ${Heading}
    color: ${(p) => p.theme.color.darkBlue};
`

const TitleAndParaContainer = styled.div`
     display: grid;
     grid-template-columns: 1fr 1fr;
     align-items: center;
     margin: 100px 10px;

    h1{
        ${Heading}
        color: ${(p) => p.theme.color.darkBlue};
    }

    ${commonParaStyles}
    @media screen and (max-width: ${(p) => `${p.theme.bp.tablets}px`}){
        margin: 100px 40px;
        display: block;
    }
    @media screen and (max-width: ${(p) => `${p.theme.bp.phones}px`}){
        margin: 100px 10px 75px 10px;
    }
`

const TitleImageAndParaContainer = styled.div`
    margin-top: 50px;
    padding-bottom: 50px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    div{
        ${commonParaStyles}
    }

    @media screen and (max-width: ${(p) => `${p.theme.bp.tablets}px`}){
        display: flex;
        flex-direction: column-reverse;
        p{
            margin: 0px 40px;
        }
    }

    @media screen and (max-width: ${(p) => `${p.theme.bp.phones}px`}){
        p{
            margin: 0px 10px 0px 10px;
        }
    }
`

const AdditionalImageContainer = styled.div`
        height: auto;
        max-height: 700px;
        width: 50vw;
        overflow: visible;
        img{
            height: 100%;
            width: 100%;
            object-fit: cover;
        }

        @media screen and (max-width: ${(p) => `${p.theme.bp.tablets}px`}){
            width: 60vw;
        }

        @media screen and (max-width: ${(p) => `${p.theme.bp.phones}px`}){
            width: 80vw;
        }
`

const ContactAndTextContainer = styled.div`
    background-color: ${(p) => p.theme.color.grey};
    margin-top: 50px;
    padding-bottom: 50px;
`

const Contents = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
    align-items: center;
    /* div{
        ${commonParaStyles}
        
    } */
    @media screen and (max-width: ${(p) => `${p.theme.bp.desktops}px`}){
        display: flex;
        flex-direction: column-reverse;
    }
`

const ContentsTextContainer = styled.div`
    ${commonParaStyles}

    h1{
        margin-top: 0px;
    }
    @media screen and (max-width: ${(p) => `${p.theme.bp.tablets}px`}){
        margin: 50px 40px 10px 40px;
    }
    @media screen and (max-width: ${(p) => `${p.theme.bp.phones}px`}){
        margin: 50px 10px 10px 10px;
    }
`



export {
    TemplateImageContainer,
    TitleAndParaContainer,
    ContactAndTextContainer,
    Contents,
    ContactTextHeading,
    ContentsTextContainer,
    TitleImageAndParaContainer,
    AdditionalImageContainer
}