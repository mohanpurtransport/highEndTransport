import { css } from "styled-components";

export const Heading = css`
    text-transform: uppercase;
    text-align: center;
    padding: 20px;
    margin-top: 50px;
    letter-spacing: 0.05rem;
    font-size: 3rem;
    font-weight: 300;

    @media screen and (max-width: ${(p) => `${p.theme.bp.tablets}px`}){
        font-size: 2rem;
    }
`

export const ImageContainer = css`
    max-height: 40vh; 
    height: 40vh;
    width: 100%;
    margin: 0 auto;
    box-shadow: 5px 5px 5px 1px #000000;

    img {
        width: 100%;
        height: 100%;
        border-radius: 8px;
        object-fit: cover;
    }

    // @media screen and (min-width: ${(p) => `${p.theme.bp.largeDesktops}px`}){
    //     max-height: 45vh; 
    //     height: 45vh;
    // }

    @media screen and (max-width: ${(p) => `${p.theme.bp.tablets}px`}){
    max-height: 27vh;
    height: 20vh;
    }
`