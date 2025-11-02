import { styled } from "styled-components";

const CardsContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 40px;
    margin: 20px 100px;

    @media screen and (max-width: ${(p) => `${p.theme.bp.phones}px`}){
        grid-template-columns: repeat(1, 1fr);
        margin: 20px 50px;
    }

    @media screen and (min-width: ${(p) => `${p.theme.bp.phones}px`}){
        grid-template-columns: repeat(2, 1fr);
    }

    @media screen and (min-width: ${(p) => `${p.theme.bp.desktops}px`}){
        grid-template-columns: repeat(4, 1fr);
    }

`

export {
    CardsContainer
}