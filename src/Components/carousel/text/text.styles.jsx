import { styled, css} from "styled-components";

const commonTextContainerStyles = css`
    @media screen and (max-width: ${(p) => `${p.theme.bp.tablets}px`}){
        grid-row: 5/7; 
        grid-column: 1/14;
        border-radius: 10px;
        color: black;
        background-color: transparent;
    }
`

const TextContainerDiv = styled.div`
    grid-column: 3/6;
    grid-row: 2/5;
    z-index: 1;
    background-color: ${(p) => p.theme.color.lightYellow};
    color: black;
    box-sizing: content-box;
    padding: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    /* border-radius: 10px 100px / 120px; */
    font-size: 1.2rem;
    font-weight: 400;
    letter-spacing: 0.05rem;
    transition: .5s ease-in;


    @media screen and (max-width: ${(p) => `${p.theme.bp.largeDesktops}px`}){
        grid-column: 2/6;
        grid-row: 2/5;
    }

    ${commonTextContainerStyles}
`

const TextContainerDivRight= styled(TextContainerDiv)`
    grid-column: 9/12;
    grid-row: 4/7;
    /* border-radius: 100px / 120px 10px; */


    @media screen and (max-width: ${(p) => `${p.theme.bp.largeDesktops}px`}){
        grid-column: 9/13;
    }

    ${commonTextContainerStyles}
    
`

const TextDiv = styled.div`
    text-align: center;
    text-transform: uppercase;
    white-space: pre-line;
    color: black;

    &:after{
        content: "➤";
    }

    @media screen and (max-width: ${(p) => `${p.theme.bp.tablets}px`}){
        &:after{
            content: "";
        }
    }
`


export {
    TextContainerDiv,
    TextContainerDivRight,
    TextDiv,

}