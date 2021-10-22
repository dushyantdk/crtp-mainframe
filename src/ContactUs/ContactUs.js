import React from "react";
import Navigation from '../Navigation/Navigation';
import Footer from "../Footer/Footer";
import ContactImg from '../assests/contact.png';
import { Form, Button } from "react-bootstrap";
import IndiaOffice from '../assests/india-office.jpg';
import UKOffice from '../assests/uk-office.jpg';


const ContactUs = () => {
 
  return (
    <div className="contact-section">
        <Navigation/>
        <section className="app-header header">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 text-white">
                        <h3 className="color-light-blue">Contact Us</h3>
                        <h1>Crypto Mainframe</h1>
                        <p>Have anything to share with us? Have a question, suggestion or tip for us? Don’t hesitate, Just fill up the form below and we will get back to you ASAP.</p>
                    </div>
                    <div className="col-lg-6 text-center">
                        <img src={ContactImg} alt="" />
                    </div>
                </div>
            </div>
        </section>
        <section className="contact-white">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-7">
                        <div className="row location-offices">
                            <div className="col-lg-6">
                                <div class="bg-white  no-underline hover-grow">
                                    <img class="img-fluid" src={IndiaOffice} alt="" />
                                    <h3 class="mb-3 mt-3 pr-2 pl-2">MENT HEADQUARTERS</h3>
                                    <p class="pr-3 pl-3">MENT TECH, 47/1 , First floor, Bhawanipur Colony, Indore, 452001</p>
                                    <hr class="mb-0" />
                                    <p class="p-3">Email: info@ment.tech</p>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div class="bg-white  no-underline hover-grow">
                                    <img class="img-fluid" src={UKOffice} alt="" />
                                    <h3 class="mb-3 mt-3 pr-2 pl-2">Crypto Mainframe LTD</h3>
                                    <p class="pr-3 pl-3">One Avenue, 23 Finsbury Circus, London, England, EC2M 7EA</p>
                                    <hr class="mb-0" />
                                    <p class="p-3">Email: info@ment.tech</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-5">
                        <div className="contact-form">
                            <Form>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>Your Name</Form.Label>
                                    <Form.Control type="text" placeholder="Enter Name" />
                                    <Form.Text className="text-muted">
                                    We'll never share your email with anyone else.
                                    </Form.Text>
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Label>Email Address</Form.Label>
                                    <Form.Control type="text" placeholder="Enter Email" />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Label>Phone</Form.Label>
                                    <Form.Control type="number" placeholder="Phone" />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Label>Company</Form.Label>
                                    <Form.Control type="text" placeholder="Company" />
                                </Form.Group>
                                <Button variant="primary" type="submit">
                                    Submit
                                </Button>
                            </Form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <Footer/>
    </div>
  );
};

export default ContactUs;
