import { Fragment, useContext } from "react";
import { IndexContext } from "../../../utils/contexts/index.context";

import RightArrowSVG from '/asset/IconsSVG/right.svg' 

import {
    RightArrowButton,
    RightSliderButtonDiv,
} from './slider-arrows.styles'

const SliderArrowRight = () => {
    const {handleNext} = useContext(IndexContext);
    return (
        <Fragment>
            <RightSliderButtonDiv>
                <RightArrowButton onClick={handleNext}>
                    <img src={RightArrowSVG} alt="Right Arrow" />
                </RightArrowButton>
            </RightSliderButtonDiv>
        </Fragment>
    )
}

export default SliderArrowRight;