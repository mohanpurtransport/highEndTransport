import { Fragment, useState, useRef } from "react";
import emailjs from '@emailjs/browser';
import FormInput from "../form-input/form-input"
import ReCAPTCHA from "react-google-recaptcha";

import {
    ContactHeading,
    FormContainer,
    Button
        } from './contact-form.styles'

const defaultFormFields = {
    displayName: '',
    email: '',
    company: '',
    message: ''
}

const ContactForm = () => {

    const [formFields, setFormFields] = useState(defaultFormFields);
    const [formSent, setFormSent] = useState(false);
    const [captchaError, setCaptchaError] = useState(false);
    const [error, setError] = useState(false);
    const {displayName, email, company, message} = formFields;
    const form = useRef();
    const captchaRef = useRef(null);
    
    const handleChange =(e) => {
        const {name, value} = e.target;
        setFormFields({...formFields, [name]: value});
    }

    const handleSubmit =(e) => {
        e.preventDefault();
        setCaptchaError(false);
        setError(false);


        emailjs.sendForm(`${import.meta.env.VITE_SERVICE_EMAILJS}`,`${import.meta.env.VITE_CONTACT_TEMPLATE_KEY}`,form.current,`${import.meta.env.VITE_USER_EMAILJS}`)
                .then((result) => {
                    console.log(result.text);
                    console.log("successful");
                    setFormFields(defaultFormFields);
                    setFormSent(true);
                    captchaRef.current.reset();
                }, (error) => {
                    if(error.text === "reCAPTCHA: The g-recaptcha-response parameter not found"){
                        console.log("Found the CAPTCHA error")
                        setCaptchaError(true);
                    } else {
                        console.log(error.text);
                        setError(true);

                    }
                });
    }
    
    return (
        <Fragment>
                <FormContainer>
                    <ContactHeading >
                        Contact Us
                    </ContactHeading>
                    {
                        formSent && 
                        <div style={{"color": "green", "textAlign": "center"}}>
                            Thank you for contacting us. We will get back to you shortly.
                        </div>
                    }
                    {
                        error &&
                        <div style={{"color": "red", "textAlign": "center"}}>
                            Please make sure all the fields are filled up and try again!
                        </div>
                    }
                    <form ref={form} onSubmit={handleSubmit}>
                        <FormInput
                            label="Name"
                            type='text' 
                            required 
                            onChange={handleChange}  
                            name='displayName'
                            value={displayName}
                        />

                        <FormInput
                            label="Email Address"
                            type='email' 
                            required 
                            onChange={handleChange}  
                            name='email'
                            value={email}
                        />

                        <FormInput
                            label="Company Name"
                            type='text' 
                            onChange={handleChange}  
                            name='company'
                            value={company}
                        />

                        <FormInput
                            textArea="yes"
                            label="Message"
                            type='text' 
                            required 
                            onChange={handleChange}  
                            name='message'
                            value={message}
                        />

                        {
                            captchaError && <div style={{"color": "red", "textAlign": "center"}}>Please check the CAPTCHA to submit the form</div>
                        }
                        <div style={{transform:"scale(0.85)", margin:"0 auto", display:"table"}}>
                            <ReCAPTCHA 
                                sitekey={import.meta.env.VITE_CAPTCHA_SITE_KEY} 
                                ref={captchaRef}          
                            />
                        </div>
                        <Button type='submit'>Send</Button>

                    </form>
                </FormContainer>

        </Fragment>
    )
}

export default ContactForm;