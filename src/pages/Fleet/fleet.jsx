import { Fragment } from 'react'
import FleetMaterial from '../../template-pages/Fleet/fleet.template';
import Footer from '../../Components/footer/footer';
import { Route, Routes } from 'react-router-dom';

const Fleet = () => {
    return (
        <Fragment>
            <Routes>
                <Route path=':fleetID' element={<FleetMaterial />} />
            </Routes>
            <Footer />
        </Fragment>
    )
}

export default Fleet;