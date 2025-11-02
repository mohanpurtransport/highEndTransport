import { styled} from "styled-components";

const GridDiv = styled.div`
    display: grid;
    grid-template-columns: repeat(13, 1fr);
    grid-template-rows: repeat(8, 60px);
    column-gap: 5px;
    row-gap: 5px;
    background-image: linear-gradient(
            180deg,
            hsl(0deg 0% 100%) 0%,
            hsl(39deg 80% 95%) 11%,
            hsl(40deg 78% 90%) 22%,
            hsl(40deg 76% 85%) 33%,
            hsl(41deg 73% 80%) 44%,
            hsl(42deg 71% 75%) 56%,
            hsl(43deg 69% 70%) 67%,
            hsl(44deg 67% 64%) 78%,
            hsl(45deg 66% 59%) 89%,
            hsl(46deg 65% 52%) 100%
          );

    @media screen and (max-width: ${(p) => `${p.theme.bp.tablets}px`}){
        grid-template-rows: repeat(6, 60px);
    }
`


export {
    GridDiv,
}