import { Fragment, useContext, useEffect } from "react";
import { IndexContext } from "../../utils/contexts/index.context";

import ImageContainer from "./image-container/image-container";
import Text from "./text/text";
import SliderArrowLeft from "./slider-arrows/slider-arrow-left";
import SliderArrowRight from "./slider-arrows/slider-arrow-right";
import DotIndicators from "./dot-indicators/dot-indicators";

import { GridDiv,
        } from './carousel-slider.styles'

const CarouselSlider = () => {

    const {currentIndex, handleNext} = useContext(IndexContext);

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            handleNext();
        }, 5000)

        return () => {
                clearTimeout(timeoutId);
        }
     }, [currentIndex])

    return (
        <Fragment>
            <GridDiv>                
                <Text />
                <ImageContainer />
                <SliderArrowLeft/>
                <SliderArrowRight/>
                <DotIndicators />
            </GridDiv>
        </Fragment>
    )
}

export default CarouselSlider;