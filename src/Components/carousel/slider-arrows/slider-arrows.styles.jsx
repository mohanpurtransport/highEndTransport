import { styled} from "styled-components";

const LeftSliderButtonsDiv = styled.div`
        grid-column: 1/2;
        grid-row: 4/6;
        display: block;
        margin-left: auto;
        margin-right: auto;
        margin: auto;

        @media screen and (max-width: ${(p) => `${p.theme.bp.tablets}px`}){
            grid-row: 2/4;
            margin: auto;
        }
//     display: flex;
//     justify-content: space-between;
//     align-items: center;
//     width: 100vw;
//     position: relative;
//     bottom: 35vh;

//     @media screen and (max-width: ${(p) => `${p.theme.bp.tablets}px`}){
//         top: -220px;
 //    }
 `

 const RightSliderButtonDiv = styled(LeftSliderButtonsDiv)`
    grid-column: 13/14;
 `
const arrowButton = styled.div`
    width: 50px;
    height: 50px;
    padding: 10px;

`

const LeftArrowButton = styled(arrowButton) `
    
`

const RightArrowButton = styled(arrowButton) `

`

// const SliderButtonsDiv = styled.div`

// `

export {
    LeftArrowButton,
    RightArrowButton,
    LeftSliderButtonsDiv,
    RightSliderButtonDiv
}