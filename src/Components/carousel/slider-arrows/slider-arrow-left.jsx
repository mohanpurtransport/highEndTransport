import { Fragment, useContext } from "react";
import { IndexContext } from "../../../utils/contexts/index.context";

import LeftArrowSVG from '/asset/IconsSVG/left.svg';


import {
            LeftArrowButton,
            LeftSliderButtonsDiv
        } from './slider-arrows.styles'


const SliderArrowLeft = () => {
    const {handlePrevious} = useContext(IndexContext)
    return (
        <Fragment>
            <LeftSliderButtonsDiv>
                <LeftArrowButton onClick={handlePrevious}>
                    <img src={LeftArrowSVG} alt="Left Arrow" />
                </LeftArrowButton>
            </LeftSliderButtonsDiv>
        </Fragment>
    )
}

export default SliderArrowLeft;