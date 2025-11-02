import { Fragment } from "react";
import { useParams } from "react-router-dom";
import ServicesData from '../../data/servicesData.json'
import Template from "../../Components/template/template";


const ServicesMaterial = () => {
    const servicesID = useParams();
    return (
        <Fragment>
            <Template data={ServicesData[servicesID.servicesID]} />
        </Fragment>
    )
}

export default ServicesMaterial;