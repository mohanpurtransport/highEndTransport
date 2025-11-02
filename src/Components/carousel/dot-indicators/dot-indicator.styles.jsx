import { styled} from "styled-components";

// const IndicatorDotsDiv = styled.div`
//     display: flex;
//     justify-content: center;
//     gap: 10px;
//     position: relative;
//     transform: translateY(-450%);
//     padding: 10px;

//     @media screen and (max-width: ${(p) => `${p.theme.bp.tablets}px`}){
//      display: none;
//     }
// `

const DotDiv = styled.div`
  background-color: rgba(255,255,255,0.13);
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background-color: ${(p) => p.className === "activeClass" ? 'rgba(255,255,255,0.8)' : 'rgba(255,255,255,0.13)' };

  @media screen and (max-width: ${(p) => `${p.theme.bp.tablets}px`}){
    width: 10px;
    height: 10px;
  }
`

const IndicatorDotsDiv = styled.div`
  grid-column: 7/8;
  grid-row: 8/9;
  display: flex;
  gap: 10px;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: ${(p) => `${p.theme.bp.tablets}px`}){
    grid-row: 4/5;
    gap: 5px;
    align-items: center;
    }
`



export {
    IndicatorDotsDiv,
    DotDiv
}