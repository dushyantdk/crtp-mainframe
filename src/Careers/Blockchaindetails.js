import React from "react";
import CopyRight from "../Footer/CopyRight";
import Footer from "../Footer/Footer";
import Navigation from "../Header/Navigation/Navigation";
import * as yup from "yup";
import { Formik } from "formik";
import {useToasts} from "react-toast-notifications";
import Phone from "../PhoneInput";

const Blockchaindetails = () => {

    const { addToast } = useToasts();

    const careerSchema = yup.object({
        first_name: yup
            .string()
            .required("name is required")
            .min(3, "first name must be minimum of 3 characters")
            .max(50, "name can be maximum 8 characters long"),
        last_name: yup
            .string()
            .required("last name is required")
            .min(3, "name must be minimum of 3 characters")
            .max(50, "name can be maximum 8 characters long"),
        email: yup
            .string()
            .email("Invalid Email")
            .required("Email is required")
            .email("Please Enter A Valid Email Address"),
        phone: yup
            .string()
            .required("Mobile Number is required")
            .min(10, "Please Enter A Valid Mobile Number For Verification")
            .max(15, "Please Enter A Valid Mobile Number For Verification")
            .matches(
                /^\d*\.?\d*$/,
                "Please Enter A Valid Mobile Number For Verification"
            ),
        location: yup
            .string()
            .required("location is required")
            .min(2, "Company name must be minimum of 2 characters"),
        file: yup
            .mixed()
            .required('A file is required')
    });

    const userFormInitialValues = {
        first_name: "",
        last_name: "",
        email: "",
        phone: "",
        location: "",
        file: "",
    };

    const handleUserSubmit = (values) => {

        fetch(`https://ment.tech/api/contactUs`, values)
            .then(response => {
                addToast("Thank you for submitting form", {
                    appearance: "success",
                    autoDismiss: true,
                });
            })
            .catch(error => {
                addToast("Something went wrong", {
                    appearance: "error",
                    autoDismiss: true,
                });
            })
    }

  return (
    <section className="contactus innerfooter career">
        <section className="teamAbout white-header">
            <Navigation/>
            <div className="container wide-block">
                <div className="row home-header-content align-items-center justify-content-center my-5 pb-0">
                    <div className="col-lg-8 text-center">
                       
                    <h1>Want to make a difference? You have come to the right place </h1>
                    <p>Create the future with us</p>
                    </div>
                </div>
                <div className="row justify-content-center">
                        <div className="col-lg-10 col-md-12 col-sm-12 text-center"> 
                            <div className="d-flex justify-content-between blog-left-socail mb-5">
                                    <span>Follow</span>
                                    <a href="https://www.instagram.com/mentfintech/"><i class="fab fa-instagram"></i></a>
                                    <a href="https://www.facebook.com/Ment-Fintech-Ltd-105174808364154"><i class="fab fa-facebook-f"></i></a>
                                    <a href="https://twitter.com/ment_fintech"><i class="fab fa-twitter"></i></a>
                                    <a href="https://t.me/Mentfintech"><i class="fab fa-telegram-plane"></i></a>
                                    <a href="https://www.linkedin.com/company/ment-ie/"><i class="fab fa-linkedin-in"></i></a>
                                    <a href="https://www.youtube.com/channel/UC_3SFkoApivR81hA2PJ9Kyw"><i class="fab fa-youtube"></i></a>
                                    <a href="https://www.reddit.com/user/MentFintech"><i class="fab fa-reddit-alien"></i></a>
                                      {/*  <li className="mt-2"><a href="#"><i class="fab fa-discord"></i></a></li> */}
                            </div>
                        </div>
                    </div>
            </div>
        </section>
        <section className="job-details">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8">
                        <h2>Blockchain & Crypto Product Manager</h2>
                        <p className="font-12">Ment Fintech - Ireland, Dublin Office</p>
                        <p>Ment Fintech has positioned itself as a Fintech Leader, pioneering revolutionary practices such as social trading, blockchain and machine-learning-based investment products. Ment Fintech operates in full transparency with its clients.</p>
                        <p>Our Research and Development department develops cutting-edge technologies, focusing on field-relevant areas, such as blockchain and artificial intelligence among others. We offer competitive fees and an organizational culture which is both professional and friendly.</p>
                        
                        <p>Ment Fintech is looking for a talented and experienced Application and Security Architect to join the Ment Fintech team and become part of the Ment Family!</p>
                        <p>The position calls for someone who can take initiative, work independently, enjoy working hard in a challenging environment and learn on the job quickly to make a difference.</p>
                       
                <p className="font-weight-bold mb-0">WHAT YOU???LL BE DOING:</p>
                        
                        <ul>
                             <li className="mt-2">???	Be involved in every aspect of the product development process, from brainstorming the next great product innovation to tweaking UI right before launch</li>
                             <li className="mt-2">???	Serve as the primary point of contact for all aspects of your product domain</li>
                             <li className="mt-2">???	Design, manage and launch new features that are all about increasing user engagement and our competitive edge</li>
                             <li className="mt-2">???	Develop a detailed product roadmap based on the company???s existing strategic plan, and manage all product milestones through agile workflow</li>
                             <li className="mt-2">???	Ensure that the engineering team, testers, customer support team have a good knowledge of the products and services at all time</li>
                             <li className="mt-2">???	Work closely with marketing, customer service, sales, Compliance, and customer service departments to identify new product needs</li>
                             <li className="mt-2">???	Work closely with the Engineering team to build new features and make changes and improvements as needed</li>
                             <li className="mt-2">???	Ensure that the product adheres to the highest standards of usability and quality.</li>
                             <li className="mt-2">???	Create required deliverables for all project lifecycle phases, including project schedules, scope documents, mockups, wireframes and requirements</li>
                             <li className="mt-2">???	Track and measure user engagement and analyze results. Leverage data to optimize critical flows and user paths in order to increase conversion rates and overall growth</li>
                             <li className="mt-2">???	Proactively seek out, track and remove barriers to completing a project.</li>
                        </ul>
                        <p className="font-weight-bold mb-0">REQUIREMENTS:</p>
                        
                        <ul>
                             <li className="mt-2">???	Have the ability to understand and take ownership of business needs and translate them to simple, effective and scalable product solutions</li>
                             <li className="mt-2">???	Experience with customer facing financial applications, crypto assets, wallets and Custody solutions, financial systems and business processes </li>
                             <li className="mt-2">???	Have strong written, verbal communication and presentation skills, including the ability to communicate between technical and non-technical personnel</li>
                            <li className="mt-2"> ???	Great interpersonal relations and ability to collaborate with multiple functions</li>
                            <li className="mt-2">???	Have a proven ability to manage and follow up on multiple concurrent tasks and requests on tight deadlines</li>
                            <li className="mt-2">???	Familiar with project management procedures and methodology, especially requirements management, planning, scheduling and agile methodologies</li>
                            <li className="mt-2">???	Excellent English communication skills.</li>
                        </ul>
                        <p className="font-weight-bold mb-0">ADVANTAGES: </p>
                        
                        <ul>
                             <li className="mt-2">???	Knowledge of Fintech World and Blockchain development</li>
                             <li className="mt-2">???	Ability to work well with interfaces as well as work independently</li>
                             <li className="mt-2">???	Excellent organizational and project management skills.</li>
                    
                        </ul>
                        <p>Inclusion and diversity are fundamental to our culture and core values. Our rich diversity makes us more innovative and more creative, which helps us better serve our clients and our communities.</p>
                        <p>Ireland<br/>
                        Location</p>
                    </div>
                    <div className="col-lg-4">
                        <div className="form-bg">
                            <Formik
                                validationSchema={careerSchema}
                                initialValues={userFormInitialValues}
                                onSubmit={values => {
                                    handleUserSubmit(values);
                                }}
                            >
                                {({
                                      handleSubmit,
                                      handleChange,
                                      values,
                                      errors
                                  }) => (
                                    <from noValidate onSubmit={handleSubmit}>
                                        <div className="form-group">
                                            <label>First Name<em className="text-danger">*</em></label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                name="first_name"
                                                value={values.first_name}
                                                onChange={handleChange}
                                            />
                                            <span className="text-danger">{errors.first_name}</span>
                                        </div>
                                        <div className="form-group">
                                            <label>Last Name<em className="text-danger">*</em></label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                name="last_name"
                                                value={values.last_name}
                                                onChange={handleChange}
                                            />
                                            <span className="text-danger">{errors.last_name}</span>
                                        </div>
                                        <div className="form-group">
                                            <label>Email <em className="text-danger">*</em></label>
                                            <input
                                                type="email"
                                                className="form-control"
                                                name="email"
                                                value={values.email}
                                                onChange={handleChange}
                                            />
                                            <span className="text-danger">{errors.email}</span>
                                        </div>
                                        <div className="form-group">
                                            <label>Phone<em className="text-danger">*</em></label>
                                            <Phone phone={values.phone} change={handleChange}/>
                                            <span className="text-danger">{errors.phone}</span>
                                        </div>
                                        <div className="form-group">
                                            <label>Location (City)<em className="text-danger">*</em></label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                name="location"
                                                value={values.location}
                                                onChange={handleChange}
                                            />
                                            <span className="text-danger">{errors.location}</span>
                                        </div>
                                        <div className="from-group">
                                            <label>Resume<em className="text-danger">*</em></label>
                                            <input
                                                type="file"
                                                className="form-control"
                                                name="file"
                                                value={values.file}
                                                onChange={handleChange}
                                            />
                                            <span className="text-danger">{errors.file}</span>
                                        </div>
                                        <button type="submit" className="schedule-call-modal w-100 btn btn-primary text-center mt-4">Apply Now</button>
                                    </from>
                                )}
                            </Formik>

                        </div>
                    </div>
                </div>
            </div>
        </section>
        <Footer/>
        <CopyRight/>
    </section>
  );
};

export default Blockchaindetails;
