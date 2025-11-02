import { Fragment } from "react";
import { useParams } from "react-router-dom";
import AboutData from '../../data/aboutData.json'
import Template from "../../Components/template/template";

import {
    AboutMaterialContainer,
    ImageContainer
        } from './about-material.styles'


const AboutMaterial = () => {
    const aboutID = useParams();
    return (
        <Fragment>
        {console.log(aboutID.aboutID)}
            <Template data={AboutData[aboutID.aboutID]} />
        </Fragment>
    )
}

export default AboutMaterial;