import { styled } from "styled-components";
import { Heading } from "../../utils/commonStyles";


const QuickLinksContainer = styled.div`
    margin-top: 50px;
    margin-bottom: 50px;
` 

const QuickLinksHeading = styled.h1`
    ${Heading}

    &:hover{
        text-shadow: 0 0 1em ${(p) => p.theme.color.metallicGold}, 0 0 0.2em ${(p) => p.theme.color.metallicGold};
    }
`

export {
    QuickLinksHeading,
    QuickLinksContainer
}