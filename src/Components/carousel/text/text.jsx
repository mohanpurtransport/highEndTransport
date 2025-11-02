import { Fragment, useContext } from "react";
import { Link } from "react-router-dom";
// import {AnimatePresence, motion} from "framer-motion"
// import { slideVariants } from '../../../utils/slideVariants'
import TextData from '../../../data/carouselImageAndText.json'
import { IndexContext } from "../../../utils/contexts/index.context";
import {
            TextContainerDiv,
            TextContainerDivRight,
            TextDiv,
        } from './text.styles'




const Text = () => {
    const{currentIndex} = useContext(IndexContext);

    return (
        <Fragment>
                
                    {
                        (currentIndex%2 === 0) ?
                        (
                            <TextContainerDiv>
                                <Link to={TextData.textPath[currentIndex]}>
                                    <TextDiv>
                                            {
                                                TextData.text[currentIndex]
                                            }
                                    </TextDiv>
                                </Link>
                            </TextContainerDiv>
                        ) :
                        (
                            <TextContainerDivRight>
                                <Link to={TextData.textPath[currentIndex]}>
                                        <TextDiv>
                                            {
                                                TextData.text[currentIndex]
                                            }
                                        </TextDiv>
                                    </Link>
                            </TextContainerDivRight>
                        )
                                
                }
               

        </Fragment>
    )
}

export default Text;

// <AnimatePresence>
// <motion.div

//     variants={slideVariants}
//     initial="visible"
//     animate={{ x: [null, 0] }}
//     exit="exit"
//     whileHover={{
//         scale: 1.02,
//         transition: { duration: 1 },
//         backgroundRepeat: 'no-repeat',
//     }}
// >