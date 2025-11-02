export const slideVariants = {
    // hover:{
    //     scale: 1.02,
    //     transition: { duration: 1 },
    //     backgroundRepeat: 'no-repeat',
    // },
    hiddenRight: {
        x: "100%",
        opacity: 0,
    },
    hiddenLeft: {
        x: "-100%",
        opacity: 0,
    },
    visible: {
        x: "0",
        opacity: 1,
        // transition: {
        //     duration: 0.5,
        // }
    },
    exit: {
        opacity: 0,
        // scale: 0.8,
        // transition: {
        //     duration: 0.5,
        // },
    },
};