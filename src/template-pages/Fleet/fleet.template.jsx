import { Fragment } from "react";
import { useParams } from "react-router-dom";
import FleetData from '../../data/fleetData.json'
import Template from "../../Components/template/template";


const FleetMaterial = () => {
    const fleetID = useParams();
    return (
        <Fragment>
            <Template data={FleetData[fleetID.fleetID]} />
        </Fragment>
    )
}

export default FleetMaterial;