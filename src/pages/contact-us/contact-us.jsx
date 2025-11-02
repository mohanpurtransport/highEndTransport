import { Fragment } from 'react'
import './contact-us.styles.css'
import Contact from '../../Components/contact/contact'
import Footer from '../../Components/footer/footer'

const ContactUs = () => {
    return (
        <Fragment>
            <div className='text-on-top'>
                <p>At High End Transport, we pride ourselves on offering <b>comprehensive transportation solutions tailored to meet the unique needs of our clients</b>. Whether you require shunting services for streamlined operations, local work for timely deliveries, or efficient linehaul services for long-distance transportation, our team is dedicated to providing reliable, safe, and cost-effective solutions that drive your business forward. <b>Contact us today to learn more about how we can support your transportation needs.</b></p>
            </div>
                <div className='map'>
                    <div className='contact-info'>
                        <h2>How can we help you?</h2>
                        <p><b>Visit us:</b> 2778 Slough St, Mississauga ON L4T 1G3</p>
                        <p><b>Email us:</b> <a href="mailto: highendtransprt@gmail.com?subject=High End Transportation Query- redirect from website">highendtransprt@gmail.com</a></p>
                        <p><b>Call us:</b> <a href="tel:4166279128">416-627-9128</a></p>
                    </div>
                    <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2884.1265129192293!2d-79.66073628752419!3d43.707919848768384!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b3c047891ba7f%3A0x7ad58712fc8aca04!2s2778%20Slough%20St%2C%20Mississauga%2C%20ON%20L4T%201G3!5e0!3m2!1sen!2sca!4v1762016483589!5m2!1sen!2sca" 
                    width="600" 
                    height="450" 
                    style={{ border: 0 }}
                    allowFullScreen="" 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                    />
                </div>
            <Contact />
            <Footer />
        </Fragment>
    )
}

export default ContactUs;

