import { styled } from "styled-components";
import { Heading } from "../../utils/commonStyles";

const ImageContainer = styled.div`
     max-height: 35vh; 
     height: 35vh;
     width: 100%;
     margin: 0 auto;
     box-shadow: 5px 5px 5px 1px #000000;

     img {
         width: 100%;
         height: 100%;
         border-radius: 8px;
         object-fit: cover;
     }

     @media screen and (max-width: ${(p) => `${p.theme.bp.tablets}px`}){
        max-height: 20vh;
        height: 20vh;
     }
`

const AboutMaterialContainer = styled.div`

     display: grid;
     grid-template-columns: 1fr 1fr;
     align-items: center;

    h1{
        ${Heading}
        
    }

    p{
        font-size: 1.2rem;
        padding: 10px 50px;
    }
    @media screen and (max-width: ${(p) => `${p.theme.bp.tablets}px`}){
        display: block;
        p{
            font-size: 1rem;
        }
    }
    
`

export {
    AboutMaterialContainer,
    ImageContainer
}