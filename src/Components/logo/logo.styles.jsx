
import { styled } from "styled-components"


const LogoDivContainer = styled.div`
        background-color: ${(p) => p.theme.color.metallicGold};
        border-radius: 10px;
        width: 200px;
        margin: 20px;


img{
    width: 50px;
    height: 50px;
    position: relative;
    top: 20px;
    left: 10px;
}

@media screen and (max-width: ${(p) => `${p.theme.bp.tablets}px`}){
    margin-top: 50px;
    width: 100px;
    height: 60px;
    background: none;
    margin-left: 0px;
}
`

const LogoText = styled.div`
    font: ${(p) => p.theme.font.poppins};
    font-size: larger;
    font-weight: bold;
    text-transform: uppercase;
    line-height: 0.8rem;
    padding: 10px;
    position: relative;
    transform: translate(30%, -75%);
    color: black;

    &:active {
        color: red;
    }

    span{
        display: block;
        text-align: center;
        letter-spacing: 3px;
        font-size: 0.5rem;
        font-weight: 300;
        position: absolute;
        left: 35px;
    }

    @media screen and (max-width: ${(p) => `${p.theme.bp.tablets}px`}){
        transform: translate(10%, 40%);
    }
`

export {
    LogoDivContainer,
    LogoText
}