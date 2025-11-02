import { Link } from "react-router-dom";
import { styled, css } from "styled-components";

const MenuLinkListContainer = styled.div`
    padding: 20px 10px;
    position: relative;
    transition: 0.2s ease-in;

`



const HoveredMenuContainer = styled.div`
    position: absolute;
    /* background: hsl(39deg 80% 95%); */
    /* background-color: black; */
    top: 47px;
    left: 0px;
    min-width: 200px;
    width: fit-content;
    height: fit-content;
    display: flex;
    flex-direction: column;
    padding-top: 11px;


`
const MenuLink = styled(Link)`
    padding: 10px;
    text-transform: uppercase;
    font-weight: 700;

    &:hover{
        border-top: 3px solid ${(p) => p.theme.color.darkBlue};
    }

    ${(p) => p.hovered && css`
             border-top: 3px solid ${(p) => p.theme.color.darkBlue};
        `
    }
    /* & + div {
        &:hover{
        border-top: 3px solid ${(p) => p.theme.color.darkBlue};
        }
    } */
    ${HoveredMenuContainer}:hover {
        border-top: 3px solid ${(p) => p.theme.color.darkBlue};
    }
`

const HoveredMenuLink = styled(Link)`
    padding: 20px;
    font-size: 1.02rem;
    background: hsl(39deg 80% 95%);
    border: 1px solid ${(p) => p.theme.color.darkBlue};
    &:hover {
        background: ${(p) => p.theme.color.darkBlue};
        color: white;
        font-size: 1.05rem;
    }
`

export {
    MenuLinkListContainer,
    MenuLink,
    HoveredMenuContainer,
    HoveredMenuLink
}