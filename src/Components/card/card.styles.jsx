import { string } from "prop-types";
import { Link } from "react-router-dom";
import { styled } from "styled-components";

const CardContainer = styled.div`
    flex: 1 200px;
    width: 100%;
    height: 290px;
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 20px;
    transition: .5s ease-out;
    color: black;
    &:hover {
        border-radius: 30px;
        box-shadow: 15px 15px 30px #bebebe,
                -15px -15px 30px #ffffff;
        background-color: ${(p) => p.theme.color.darkBlue};
        color: #ffffff;

    }
`


const ImageDiv = styled('div').withConfig({
    shouldForwardProp: (prop) =>
    !['ogimage', 'altimage'].includes(prop),
})`
    background: url(${p => p.ogimage}) no-repeat;
    height: 100px;
    width: 100px;
    

    ${CardContainer}:hover & {
        background: url(${(p) => p.altimage}) no-repeat;
    }

`
const CardHeading = styled.div`
    text-transform: uppercase;
    text-align: center;
    font-size: 1.5rem;
    line-height: 1.2;
    font-weight: 300;
    white-space: pre-line;
`

const CardButtonDiv = styled(Link)`

`

const CardButton = styled.div`
    font-size: 0.9rem;
    text-align: center;
    text-transform: uppercase;
    padding: 10px;
    border: 1px solid ${(p) => p.theme.color.metallicGold};
    color: ${(p) => p.theme.color.metallicGold};
    cursor: pointer;
`

export {
    CardContainer,
    ImageDiv,
    CardHeading,
    CardButtonDiv,
    CardButton
}