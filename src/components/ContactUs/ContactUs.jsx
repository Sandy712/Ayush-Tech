import React from 'react'
import "./ContactUs.css"

function ContactUs() {
    return (
        <div className="contact-us">
            <section className="contact-section mb-4">
                <h2 className="contact-title h1-responsive font-weight-bold text-center my-4">
                    Contact Us
                </h2>
                <p className="contact-description text-center w-responsive mx-auto mb-5">
                    Do you have any questions? Please do not hesitate to contact us directly.
                    Our team will come back to you within a matter of hours to help you.
                </p>

                <div className="contact-form-container container">
                    <div className="row">
                        <div className="contact-form col-md-6 mb-md-0 mb-5">
                            <form
                                id="contact-form"
                                name="contact-form"
                                action="mail.php"
                                method="POST"
                                className="needs-validation"
                                noValidate
                            >
                                <div className="row">
                                    <div className="col-md-6 mb-3">
                                        <div className="md-form">
                                            <input
                                                type="text"
                                                id="name"
                                                name="name"
                                                className="form-control"
                                                required
                                            />
                                            <label for="name" className="">
                                                Your Name
                                            </label>
                                            
                                        </div>
                                    </div>

                                    <div className="col-md-6 mb-3">
                                        <div className="md-form">
                                            <input
                                                type="email"
                                                id="email"
                                                name="email"
                                                className="form-control"
                                                required
                                            />
                                            <label for="email" className="">
                                                Your Email
                                            </label>
                                            
                                        </div>
                                    </div>
                                </div>

                                <div className="row mb-3">
                                    <div className="col-md-12">
                                        <div className="md-form">
                                            <input
                                                type="text"
                                                id="subject"
                                                name="subject"
                                                className="form-control"
                                                required
                                            />
                                            <label for="subject" className="">
                                                Subject
                                            </label>
                                            
                                        </div>
                                    </div>
                                </div>

                                <div className="row mb-3">
                                    <div className="col-md-12">
                                        <div className="md-form">
                                            <textarea
                                                type="text"
                                                id="message"
                                                name="message"
                                                rows="2"
                                                className="form-control md-textarea"
                                                required
                                            ></textarea>
                                            <label for="message" className="">
                                                Your Message
                                            </label>
                                            
                                        </div>
                                    </div>
                                </div>

                                <div className="d-flex justify-content-center">
                                    <button type="submit" className="btn btn-primary">
                                        Send
                                    </button>
                                </div>
                                <div className="status text-center"></div>
                            </form>
                        </div>

                        <div className="contact-info col-md-6 text-center">
                            <ul className="list-unstyled mb-0 text-center text-md-start">
                                <li>
                                    <i className="fas fa-map-marker-alt fa-2x"></i>
                                    <p>San Francisco, CA 94126, USA</p>
                                </li>
                                <li>
                                    <i className="fas fa-phone mt-4 fa-2x"></i>
                                    <p>+ 01 234 567 89</p>
                                </li>
                                <li>
                                    <i className="fas fa-envelope mt-4 fa-2x"></i>
                                    <p>contact@ayush-tech.com</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default ContactUs
