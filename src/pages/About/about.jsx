import { Fragment } from 'react'
import AboutMaterial from '../../template-pages/About/about-material';
import Footer from '../../Components/footer/footer';
import { Route, Routes } from 'react-router-dom';

const About = () => {
    return (
        <Fragment>
            <Routes>
                <Route path=':aboutID' element={<AboutMaterial />} />
            </Routes>
            <Footer />
        </Fragment>
    )
}

export default About;