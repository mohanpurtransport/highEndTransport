import { Fragment, useContext } from "react";
import { IndexContext } from "../../../utils/contexts/index.context";
import URLData from '../../../data/carouselImageAndText.json'
import {
        IndicatorDotsDiv,
        DotDiv
    } from './dot-indicator.styles'

const DotIndicators = () => {
    const {currentIndex, handleDotClick} = useContext(IndexContext);

    return (
        <Fragment>
            <IndicatorDotsDiv>
            {
                URLData.imageURLs.map((_, index) => (
                    <DotDiv key={index} onClick={() => handleDotClick(index)} className={`${currentIndex === index ? "activeClass" : ""}`}></DotDiv>
                ))
            }
            </IndicatorDotsDiv>
        </Fragment>
    )
}

export default DotIndicators;