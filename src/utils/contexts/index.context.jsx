import { createContext, useState } from "react";

export const IndexContext = createContext({
    currentIndex: 0,
    setCurrentIndex: () => null,
    handleNext: () => null,
    handlePrevious: () => null,
    handleDotClick: () => null,
})

export const IndexProvider = ({children}) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const lengthOfImages = 4;

    const handleNext = () => {
        (currentIndex + 1 === lengthOfImages ) ?
            setCurrentIndex(0) :
            setCurrentIndex(currentIndex+1)
    }

    const handlePrevious = () => {
        (currentIndex-1 < 0) ?
            setCurrentIndex(lengthOfImages -1) :
            setCurrentIndex(currentIndex -1)
    }

    const handleDotClick = (index) => {
        setCurrentIndex(index);
    }

    const value = {
        currentIndex,
        setCurrentIndex,
        handleNext,
        handlePrevious,
        handleDotClick
    }

    return (
        <IndexContext.Provider value={value}>
            {children}
        </IndexContext.Provider>
    )
}