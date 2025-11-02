import { Link } from "react-router-dom";
import { styled } from "styled-components";

const FooterContainer = styled.div`
    background: ${(p) => p.theme.color.darkGrey};
    padding: 50px;
    color: whitesmoke;
`


const SocialATag = styled('a').withConfig({
    shouldForwardProp: (prop) =>
    !['ogicon', 'alticon'].includes(prop),
})`
    width: 30px;
    height: 30px;
    background: url(${(p) => p.ogicon}) no-repeat;
    background-size: contain;
    cursor: pointer;


    &:hover{
        background: url(${(p) => p.alticon}) no-repeat;
        background-size: contain;
    }
`

const FirstRowDiv = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 50px;
`

const FooterLogoDiv = styled.div`
    margin-top: -50px;

`
const SecondRowDiv = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    /* align-items: center;
    justify-content: center; */
    margin: 0 auto;
    margin-bottom: 50px;

    /* div{
        text-align: center;
    } */

    @media screen and (max-width: ${(p) => `${p.theme.bp.phones}px`}){
        grid-template-columns: 1fr;

        div {
            text-align: center;
        }
    }
`

const FooterLink = styled(Link)`
    padding: 10px;
    text-transform: capitalize;
    color: white;
    font-weight: 700;


    /* &:after{
        content: " ●";
    } */

`

const FooterSubRoute = styled.div`
    margin-top: 20px;
    text-decoration: none;
    display: flex;
    flex-direction: column;
    @media screen and (max-width: ${(p) => `${p.theme.bp.phones}px`}){
        margin-bottom: 30px;
    }
`

const FooterSubRouteLink = styled(Link)`
    color: rgba(211,211,211,0.7);
    /* text-align: center; */
    padding: 10px;

    @media screen and (max-width: ${(p) => `${p.theme.bp.phones}px`}){
        text-align: center;
    }
`

const ThirdRowDiv = styled.div`
    text-align: center;
    padding-top: 20px;
    @media screen and (max-width: ${(p) => `${p.theme.bp.phones}px`}){
        text-align: center;
    }
`
export {
    FooterContainer,
    SocialATag,
    FirstRowDiv,
    FooterLogoDiv,
    SecondRowDiv,
    FooterLink,
    FooterSubRoute,
    FooterSubRouteLink,
    ThirdRowDiv
}