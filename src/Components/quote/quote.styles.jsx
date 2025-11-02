import { styled,css } from "styled-components";


const QuoteContainerAdditionalStyles = css`
    display: block;
    bottom: 0;
`

const BodyContainer = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: rgb(111,111,111,0.6);
    z-index: 25;
`

const QuoteContainer = styled.div`
    position: fixed;
    margin: auto;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 75%;
    height: fit-content;
    max-height:90%;
    z-index: 30;
    background-color: hsl(39deg 80% 95%);
    transition: bottom 1s ease-out;
    overflow:scroll;

    @media screen and (max-width: ${(p) => `${p.theme.bp.tablets}px`}){
        max-height:90%;
        min-width: 85%;
        height:fit-content;
        overflow:scroll;

    }
`

const CloseButton = styled.button`
        position: absolute;
        height: 50px;
        width: 50px;
        top: 0;
        right: 0;
        background: ${(p) => p.theme.color.lightMetallicGold};
        cursor: pointer;
        border-radius: 50%;
        margin: 5px;
        transition: .3s ease-in ;

        &:hover {
            background: ${(p) => p.theme.color.lightDarkBlue};
        }
`

const QuoteFormContainer = styled.div`
padding: 50px;
@media screen and (max-width: ${(p) => `${p.theme.bp.tablets}px`}){
    padding: 20px;
}
    h2{
        text-transform: capitalize;
        font-weight: 100;
        padding: 20px;
        border-bottom: 2px solid ${(p) => p.theme.color.grey};
        width: 100%;
        text-align: center;
    }
`
const commonFlexStyles = css`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: auto;
    grid-auto-rows: min-content;
    column-gap: 20px;
    margin-bottom: -25px;
 
    @media screen and (max-width: ${(p) => `${p.theme.bp.tablets}px`}){
        grid-template-columns: 1fr;
        grid-template-rows: repeat(4, 1fr);
    }
`
const NameDivContainer = styled.div`
    ${commonFlexStyles}


`


export {
    QuoteContainer,
    CloseButton,
    BodyContainer,
    QuoteFormContainer,
    NameDivContainer,

}