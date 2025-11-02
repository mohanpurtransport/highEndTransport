import { styled, css } from "styled-components";
import { Link } from "react-router-dom";

const commonSpecialBannerStyles = css`

    color: white;
    padding: 10px 10px;
    background-color: ${(p) => p.theme.color.darkBlue};
    width: 25vw;
    height: 40px;
    text-align: center;
    cursor: pointer;
    align-self: center;

    @media screen and (max-width: ${(p) => `${p.theme.bp.tablets}px`}){
        width: 50vw;
    }
`
const SpecialBannerDiv = styled.div`
    position: absolute;
    right: 10vw;
    top: 0px;
    display: flex;
    align-items: center;
    justify-content: center;

    :last-child{
        background-color: ${(p) => p.theme.color.metallicGold};
    }

    @media screen and (max-width: ${(p) => `${p.theme.bp.tablets}px`}){
        right: 0vw;
    }
`
const SpecialBanner = styled.a`
    ${commonSpecialBannerStyles}
`

const SpecialBannerLink = styled(Link)`
    ${commonSpecialBannerStyles}
`

const NavDivContainer = styled.div`
    position: absolute;
    top: 60px;
    right: 0;
    left: 50vw;
    width: 50vw;
    padding: 10px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    z-index: 20;
    list-style-type: none;
    margin-right: 20px;

    a{
        text-decoration: none;
        cursor: pointer;
        color: ${(p) => p.theme.color.dark};
    }
    & > div {
        margin-right: 20px;
        display: flex;
        align-items: center;
    }
`


const ContentLink = styled(Link)`
    padding: 10px;
    text-transform: uppercase;
    font-weight: 700;

`

const SubContentLink = styled(Link)`
    font-weight: 300;
    border: 1px solid black;
`

const MobileDivContainer = styled.div`
    width: 100vw;
`

const HamburgerMenuIcon = styled.button`
    /* border: none;
    padding: 10px; */
    cursor: pointer;
    transition: transform 2s;

    

    img{
        position: absolute;
        top: 70px;
        right: 20px;

    }

    &:focus{
        img{
            transform: rotate(180deg);
        }
    }
`

const HamburgerMenu = styled.div`
    margin-top: -20px;
    width:100vw;
    position: relative;
    left: 0px;
    /* margin-right: -10px;
    margin-left: -5px; */
    /* right: calc(7vw/2);
    left: calc(6vw/2); */
    top: 0px;
    display: flex;
    flex-direction: column;
    z-index: 1;
    margin-bottom: 10px;
`

// const HamburgerContent = styled(Link)`
//     color: black;
//     text-decoration: none;
//     font-size: large;
//     padding: 15px;
//     text-align: center;
//     /* border: 1px solid ${(p) => p.theme.color.darkBlue}; */
//     transition: .2s ease-in;

//     &:hover{
//         background: ${(p) => p.theme.color.darkBlue};
//         color: white;
//     }
// `

const NavDiv = styled.div`
    z-index: 10;

`



export {
    NavDiv,
    NavDivContainer,
    ContentLink,
    MobileDivContainer,
    HamburgerMenuIcon,
    HamburgerMenu,
    SpecialBannerDiv,
    SpecialBanner,
    SpecialBannerLink,
    SubContentLink
}