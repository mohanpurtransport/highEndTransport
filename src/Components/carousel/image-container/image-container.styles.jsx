import { styled} from "styled-components";

export const ImageContainerDiv = styled.div`

     min-height: 45vh; 
     width: 100%;
     margin: 0 auto;
     grid-column: 1/14;
     grid-row: 1/9;
     box-shadow: 5px 5px 5px 1px #000000;
     background-color: ${(p) => p.theme.color.darkBlue};
     transition: .5s linear;

     img {
         width: 100%;
         height: 100%;
         border-radius: 8px;
         object-fit: cover;

     }

     @media screen and (max-width: ${(p) => `${p.theme.bp.tablets}px`}){
//         width: 100%;
        grid-column: 1/14;
        grid-row: 1/5;
        min-height: 20vh;

         img{
             object-fit: cover;
         }
     }

`

// export const ImageContainerDiv = styled.div`

// `