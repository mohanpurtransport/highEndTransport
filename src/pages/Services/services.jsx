import { Fragment } from 'react'
import ServicesMaterial from '../../template-pages/Services/services.template';
import Footer from '../../Components/footer/footer';
import { Routes, Route } from 'react-router-dom';



const Services = () => {
    return (
        <Fragment>
            <Routes>
                <Route path=':servicesID' element={<ServicesMaterial />} />
            </Routes>
            <Footer />
        </Fragment>
    )
}

export default Services;