import { Fragment, useState, useRef } from "react";
import CloseSVG from '/asset/IconsSVG/close.svg'
import FormInput from '../form-input/form-input'
import emailjs from '@emailjs/browser';
import ReCAPTCHA from "react-google-recaptcha";

import {
        QuoteContainer,
        BodyContainer,
        QuoteFormContainer,
        NameDivContainer,
        CloseButton
        } from './quote.styles'
import { Button } from "../contact-form/contact-form.styles";

        const defaultFormFields = {
            firstName: '',
            lastName: '',
            phoneNumber: '',
            email: '',
            company: '',
            title: '',
            shipmentDetails: ''
        }

const Quote = ({quoteOpen, onQuoteClick}) => {
    const [formFields, setFormFields] = useState(defaultFormFields);
    const {firstName, lastName, phoneNumber, email, company, title, shipmentDetails} = formFields;
    const [formSent, setFormSent] = useState(false);
    const [captchaError, setCaptchaError] = useState(false);
    const [error, setError] = useState(false);
    const form = useRef();
    const captchaRef = useRef(null);

    const handleChange = (e) => {
        const {value, name} = e.target;
        setFormFields({...formFields, [name] : value});
    }

    const handleSubmit =(e) => {
        e.preventDefault();
        setCaptchaError(false);
        setError(false);

        emailjs.sendForm(`${import.meta.env.VITE_SERVICE_EMAILJS}`,`${import.meta.env.VITE_QUOTE_TEMPLATE_KEY}`,form.current,`${import.meta.env.VITE_USER_EMAILJS}`)
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
            <BodyContainer onClick={onQuoteClick}>
                <QuoteContainer $quoteOpen={quoteOpen} onClick = {e => e.stopPropagation()}>
                    <CloseButton onClick={onQuoteClick}>
                        <img src={CloseSVG} alt="close button" />
                    </CloseButton>
                    <QuoteFormContainer>
                     <h2>Get a Quote</h2>
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
                        <NameDivContainer>
                            <FormInput
                                quoteFlex="yes"
                                label="First Name"
                                type='text' 
                                required 
                                onChange={handleChange}  
                                name='firstName'
                                value={firstName}
                            />
                            <FormInput
                                quoteFlex="yes"
                                label="Last Name"
                                type='text' 
                                required 
                                onChange={handleChange}  
                                name='lastName'
                                value={lastName}
                            />

                            <FormInput
                                quoteFlex="yes"
                                label="Phone Number"
                                type='tel' 
                                size= '10'
                                pattern='[0-9]{10}'
                                maxLength='10'
                                minLength='10'
                                required 
                                onChange={handleChange}  
                                name='phoneNumber'
                                value={phoneNumber}
                            />
                            <FormInput
                                quoteFlex="yes"
                                label="Email"
                                type='email' 
                                required 
                                onChange={handleChange}  
                                name='email'
                                value={email}
                            />
                        </NameDivContainer>
                        <FormInput
                            label="Company Name"
                            type='text' 
                            required 
                            onChange={handleChange}  
                            name='company'
                            value={company}
                        />
                        <FormInput
                            label="Title/Position"
                            type='text' 
                            onChange={handleChange}  
                            name='title'
                            value={title}
                        />
                        <FormInput
                            textArea="yes"
                            label="Shipment Details"
                            type='text' 
                            required 
                            onChange={handleChange}  
                            name='shipmentDetails'
                            value={shipmentDetails}
                        />

                        {
                            captchaError && <div style={{"color": "red", "textAlign": "center"}}>Please check the CAPTCHA to submit the form</div>
                        }
                        <div className="captcha" style={{transform:"scale(0.85)", margin:"0 auto", display:"table"}}>
                            <ReCAPTCHA 
                                sitekey={import.meta.env.VITE_CAPTCHA_SITE_KEY}
                                ref={captchaRef}              
                            />
                        </div>

                        <Button>Submit Request</Button>
                     </form>
                    </QuoteFormContainer>
                </QuoteContainer>
            </BodyContainer>
        </Fragment>
    )
}

export default Quote;