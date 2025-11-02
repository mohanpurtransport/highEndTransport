import { createContext, useState, useContext, useEffect } from "react";

const ViewportWidth = createContext(window.innerWidth);

const ViewportWidthProvider = ({children}) => {
    const [width, setWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResizeCallback = () => setWidth(window.innerWidth);
        window.addEventListener("resize", handleResizeCallback);

        return () => {window.removeEventListener("resize", handleResizeCallback)}
    }, [])

   return(
     <ViewportWidth.Provider value={width}>
        {children}
    </ViewportWidth.Provider>
    )
}

export default ViewportWidthProvider;
export const useViewportWidth = () => useContext(ViewportWidth);