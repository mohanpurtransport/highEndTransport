import { Link } from "react-router-dom";
import { styled, css } from "styled-components";

const MobileMenuLinkListContainer = styled.div`
       /* width: 100%;
       padding: 15px;
       text-align: center;
       border: 10px solid ${(p) => p.theme.color.darkBlue};
       transition: .2s ease-in;
       cursor: pointer;

       &:hover{
        background: ${(p) => p.theme.color.darkBlue};
    } */
`

const MobileMenuLink = styled.a`
    width: 100%;
    padding: 15px;
    text-align: center;
    border: 1.5px solid ${(p) => p.theme.color.darkBlue};
    transition: .2s ease-in;
    cursor: pointer;
    color: black;
    text-decoration: none;
    font-size: large;
    padding: 15px;
    font-weight: bold;
    margin-top: -1px;
    display: flex;
    align-items: center;
    justify-content: center;


    div{
        width: 20px;
        height: 20px;
        background: url("/asset/IconsSVG/caret-down.svg") no-repeat;
        margin-left: 10px;
        transition: .2s ease-in;
    }

    &:hover{
        color: white;
        background: ${(p) => p.theme.color.darkBlue};

        div{
            background: url("/asset/IconsSVG/caret-down-white.svg") no-repeat;
        }
    }


`

const OpenedMenuListContainer = styled.div`
    list-style-type: none;
    width: 100%;

    
    div{
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
`

const OpenedMenuLink = styled(Link)`
    padding: 15px;
    width: 100%;
    border-bottom: 0.5px solid ${(p) => p.theme.color.darkGrey};
    border-left: 1.5px solid ${(p) => p.theme.color.darkBlue};
    border-right: 1.5px solid ${(p) => p.theme.color.darkBlue};
    text-align: center;
    width: 100%;
    color: black;
    text-decoration: none;
    padding: 15px;
    font-size: large;

`

export {
    MobileMenuLinkListContainer,
    MobileMenuLink,
    OpenedMenuListContainer,
    OpenedMenuLink
}