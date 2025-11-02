import { Fragment, useContext } from "react";
// import {motion, AnimatePresence} from "framer-motion";
// import { slideVariants } from '../../../utils/slideVariants'
import URLData from '../../../data/carouselImageAndText.json';
import { IndexContext } from "../../../utils/contexts/index.context";

import {
            ImageContainerDiv
        } from './image-container.styles'


const ImageContainer = () => {
    const{currentIndex} = useContext(IndexContext);

    return (
        <Fragment>
            <ImageContainerDiv>
                <img 
                    src={URLData.imageURLs[currentIndex]}
                    alt="truck images"
                    key={URLData.imageURLs[currentIndex]}
                />
            </ImageContainerDiv>
        </Fragment>
    )
    // return (
    //     <Fragment>
    //         <ImageContainerDiv>
    //             <AnimatePresence>
    //                 <motion.img 
    //                     src={src} 
    //                     alt="truck image" 
    //                     key={src}
    //                     variants={slideVariants}
    //                     initial="visible"
    //                     animate={{ x: [null, 0] }}
    //                     exit="exit"
    //                 />
    //             </AnimatePresence>
    //         </ImageContainerDiv>
    //     </Fragment>
    // )
}

export default ImageContainer;