import React from "react";
import Navigation from '../Navigation/Navigation';
import Footer from "../Footer/Footer";
import { Card, Accordion,Button } from "react-bootstrap";

const Careers = () => {
  return (
    <section className="contactus innerfooter career">
        <Navigation/>
        <section className="teamAbout header">
            <div className="container wide-block">
                <div className="row home-header-content align-items-center justify-content-center my-5 pb-0">
                    <div className="col-lg-8 text-center text-white">
                        <h1>Want to make a difference? You have come to the right place.</h1>
                        <p>Create the future with us.</p>
                    </div>
                </div>
                <div className="row align-items-center justify-content-center pb-5 mb-5">
                    <div className="col-lg-4 text-center opening-poistion">
                        <a className="schedule-call-modal btn-blue border-radius" href="/CareerDetail">Open positions</a>
                    </div>
                </div>
            </div>
        </section>
        <section className="location-offices py-5 text-white">
            <div className="container">
                <div className="row mb-4">
                    <div className="col-lg-12 text-center">
                        <h1>Where we can hire </h1>
                        <p>We ❤️ our remote culture at Ment and we currently have hiring entities in all the following states and countries.</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12">
                        <div className="row">
                            <div className="col-lg-6">
                                <h4>A diverse and inclusive workplace </h4>
                                <p>At Ment, we think that a diverse company is a strong company, and we work hard to foster a supportive and welcoming workplace.</p>
                            </div>
                            <div className="col-lg-6">
                                <h4>Keep growing </h4>
                                <p>Learn how you learn best. From books to conferences, you’ll get a yearly budget for your individual learning and development goals.</p>
                            </div>
                        </div>
                        <div className="row mt-5">
                            <div className="col-lg-6">
                                <h4>Invest in your future </h4>
                                <p>At Ment, you’ll have a stake in the future success of our platform with equity grants. For full-time employees, we offer competitive 401k planning with a 50% company match up to the IRS 402(g) annual limit.</p>
                            </div>
                            <div className="col-lg-6">
                                <h4>Work happier </h4>
                                <p>Build amazing things with autonomy, self-direction, and a healthy work-life balance. We offer flexible work schedules for all of our employees and Flexible PTO. We also believe that if a job allows for it, you should work wherever you’re happiest.</p>
                            </div>
                        </div>
                    </div>
                   
                </div>
            </div>
        </section>
        <section className="white-bg position-section">
            <div className="container">
                <div className="row my-5">
                    <div className="col-lg-12 text-center">
                        <h1>Open positions</h1>
                    </div>
                </div>
                <div className="row my-5">
                    <div className="col-lg-12">
                        <Accordion className="job-listing">
                            <Card>
                             {/*   <Card.Header>
                                <Accordion.Toggle as={Button} variant="link" eventKey="0">
                                   Design <span>2 Openings</span>
                                </Accordion.Toggle>
                                </Card.Header>
                                <Accordion.Collapse eventKey="0">
                                <Card.Body>
                                    <ul>
                                        <li>
                                            <a href="/careerdetail">Senior Designer, Accessibility & Design Systems
                                            <span>Ment Fintech - Ireland, Dublin Office</span></a>
                                        </li>
                                    </ul>
                                </Card.Body>
                                </Accordion.Collapse>
                            </Card>
                            <Card>
                                <Card.Header>
                                <Accordion.Toggle as={Button} variant="link" eventKey="1">
                                   Software Enginers <span>5 Openings</span>
                                </Accordion.Toggle>
                                </Card.Header>
                                <Accordion.Collapse eventKey="1">
                                <Card.Body>
                                    <ul>
                                        <li>
                                            <a href="#">Software Engineer - Salesforce</a>
                                            <span> Ment Fintech - Ireland, Dublin Office</span>
                                        </li>
                                    </ul>
                                </Card.Body>
                                </Accordion.Collapse>
                                <Card.Header>
                                <Accordion.Toggle as={Button} variant="link" eventKey="2">
                                Blockchain Developer  <span>5 Openings</span>
                                </Accordion.Toggle>
                                </Card.Header>
                                <Accordion.Collapse eventKey="2">
                                <Card.Body>
                                    <ul>
                                        <li>
                                            <a href="#">Senior Blockchain Developer & Blockchain Engineer</a>
                                            <span>Ment Fintech - Ireland, Dublin Office</span>
                                        </li>
                                    </ul>
                                </Card.Body>
                                </Accordion.Collapse> */}
                                <Card.Header>
                                <Accordion.Toggle as={Button} variant="link" eventKey="3">
                                Application Security Architect  <span>2 Openings</span>
                                </Accordion.Toggle>
                                </Card.Header>
                                <Accordion.Collapse eventKey="3">
                                <Card.Body>
                                    <ul>
                                        <li>
                                            <a href="/Applicationdetails">Application Security Architect -  Security Department</a>
                                            <span>Ment Fintech - Ireland, Dublin Office</span>
                                        </li>
                                    </ul>
                                </Card.Body>
                                </Accordion.Collapse>
                                <Card.Header>
                                <Accordion.Toggle as={Button} variant="link" eventKey="4">
                                Backend Engineer  <span>5 Openings</span>
                                </Accordion.Toggle>
                                </Card.Header>
                                <Accordion.Collapse eventKey="4">
                                <Card.Body>
                                    <ul>
                                        <li>
                                            <a href="/Backenddetails">Backend Engineer</a>
                                            <span>Ment Fintech - Ireland, Dublin Office</span>
                                        </li>
                                    </ul>
                                </Card.Body>
                                </Accordion.Collapse>
                                <Card.Header>
                                <Accordion.Toggle as={Button} variant="link" eventKey="5">
                                Blockchain & Crypto Product Manager  <span>2 Openings</span>
                                </Accordion.Toggle>
                                </Card.Header>
                                <Accordion.Collapse eventKey="5">
                                <Card.Body>
                                    <ul>
                                        <li>
                                            <a href="/Blockchaindetails">Blockchain & Crypto Product Manager</a>
                                            <span>Ment Fintech - Ireland, Dublin Office</span>
                                        </li>
                                    </ul>
                                </Card.Body>
                                </Accordion.Collapse>
                                <Card.Header>
                                <Accordion.Toggle as={Button} variant="link" eventKey="6">
                                Finance Controller  <span>2 Openings</span>
                                </Accordion.Toggle>
                                </Card.Header>
                                <Accordion.Collapse eventKey="6">
                                <Card.Body>
                                    <ul>
                                        <li>
                                            <a href="/Financedetails">Finance Controller</a>
                                            <span>Ment Fintech - Ireland, Dublin Office</span>
                                        </li>
                                    </ul>
                                </Card.Body>
                                </Accordion.Collapse>
                                <Card.Header>
                                <Accordion.Toggle as={Button} variant="link" eventKey="7">
                                IT Operations Engineer  <span>2 Openings</span>
                                </Accordion.Toggle>
                                </Card.Header>
                                <Accordion.Collapse eventKey="7">
                                <Card.Body>
                                    <ul>
                                        <li>
                                            <a href="/Operationsdetails">IT Operations Engineer</a>
                                            <span>Ment Fintech - Ireland, Dublin Office</span>
                                        </li>
                                    </ul>
                                </Card.Body>
                                </Accordion.Collapse>
                                <Card.Header>
                                <Accordion.Toggle as={Button} variant="link" eventKey="8">
                                Senior IT Asset Analyst  <span>2 Openings</span>
                                </Accordion.Toggle>
                                </Card.Header>
                                <Accordion.Collapse eventKey="8">
                                <Card.Body>
                                    <ul>
                                        <li>
                                            <a href="/Assetdetails">Senior IT Asset Analyst</a>
                                            <span>Ment Fintech - Ireland, Dublin Office</span>
                                        </li>
                                    </ul>
                                </Card.Body>
                                </Accordion.Collapse>
                                <Card.Header>
                                <Accordion.Toggle as={Button} variant="link" eventKey="9">
                                Senior Program Manager  <span>2 Openings</span>
                                </Accordion.Toggle>
                                </Card.Header>
                                <Accordion.Collapse eventKey="9">
                                <Card.Body>
                                    <ul>
                                        <li>
                                            <a href="/Managerdetails">Senior Program Manager</a>
                                            <span>Ment Fintech - Ireland, Dublin Office</span>
                                        </li>
                                    </ul>
                                </Card.Body>
                                </Accordion.Collapse>
                                <Card.Header>
                                <Accordion.Toggle as={Button} variant="link" eventKey="10">
                                Project Manager  <span>5 Openings</span>
                                </Accordion.Toggle>
                                </Card.Header>
                                <Accordion.Collapse eventKey="10">
                                <Card.Body>
                                    <ul>
                                        <li>
                                            <a href="/Projectdetails">Project Manager</a>
                                            <span>Ment Fintech - Ireland, Dublin Office</span>
                                        </li>
                                    </ul>
                                </Card.Body>
                                </Accordion.Collapse>
                               
                            </Card>
                        </Accordion>
                    </div>
                </div>
            </div>
        </section>
      
        <Footer/>
        
    </section>
  );
};

export default Careers;
