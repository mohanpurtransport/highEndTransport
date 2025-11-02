import { Fragment } from "react";

import CarouselSlider from "../../Components/carousel/carousel-slider";
import QuickLinks from "../../Components/quicklinks/quicklinks";
import Contact from "../../Components/contact/contact";
import Footer from "../../Components/footer/footer";

const Home = () => {
    return (
        <Fragment>
            <CarouselSlider />
            <QuickLinks />
            <Contact />
            <Footer />
        </Fragment>
    )
}

export default Home;