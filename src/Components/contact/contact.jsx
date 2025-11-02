import { Fragment} from "react"
import ContactForm from "../contact-form/contact-form"
import TrailerImage from '/asset/truck-images/trailer-car.png'

import {
    ContactContainer, 
    ContactContents,
    ContactImageContainer,
    ContactHeading
        } from './contact.styles'


const Contact = () => {

    
    return (
        <Fragment>
            <ContactContainer>
                <ContactContents>
                    <ContactImageContainer>
                        <img src={TrailerImage} alt="trailer image" />
                    </ContactImageContainer>
                    <ContactForm />
                </ContactContents>
            </ContactContainer>
        </Fragment>
    )
}

export default Contact;