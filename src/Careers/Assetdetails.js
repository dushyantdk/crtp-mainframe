import React from "react";
import CopyRight from "../Footer/CopyRight";
import Footer from "../Footer/Footer";
import Navigation from "../Header/Navigation/Navigation";
import * as yup from "yup";
import { Formik } from "formik";
import {useToasts} from "react-toast-notifications";
import Phone from "../PhoneInput";

const Assetdetails = () => {

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
                        <h2>Senior IT Asset Analyst</h2>
                        <p className="font-12">Ment Fintech - Ireland, Dublin Office</p>
                        <p>Ment Fintech has positioned itself as a Fintech Leader, pioneering revolutionary practices such as social trading, blockchain and machine-learning-based investment products. Ment Fintech operates in full transparency with its clients.</p>
                        <p>Our Research and Development department develops cutting-edge technologies, focusing on field-relevant areas, such as blockchain and artificial intelligence among others. We offer competitive fees and an organizational culture which is both professional and friendly.</p>
                        
                        <p>Ment Fintech is looking for a talented and experienced Application and Security Architect to join the Ment Fintech team and become part of the Ment Family!</p>
                        <p>We are looking for a leader to drive strategy to deliver Irish regional objectives. You will be the business owner responsible for defining and implementing the regional vision that meets our customers??? needs while meeting business performance goals.</p>
                        <p>A successful candidate shall be a big thinker who is highly analytical and customer focused with a strong track record of delivering results, earning trust and insisting on the highest standards. </p>
                        <p>Join us and enjoy a professional, rewarding job atmosphere at a company that puts emphasis on professional standards. We offer competitive fees and great benefits for the right applicant. </p>
                <p className="font-weight-bold mb-0">WHAT YOU???LL BE DOING:</p>
                        
                        <ul>
                             <li className="mt-2">???	Contribute to the development and enforcement of IT Asset processes and procedures established to maintain standards and procurement, maintenance, and disposal of IT assets in a way maintaining accurate records of inventory and costs</li>
                             <li className="mt-2">???	Conduct analysis of IT Asset processes and procedures to identify opportunities, provide recommendations and implement approved changes that will create efficiencies and improve the quality of the data</li>
                             <li className="mt-2">???	Conduct data analysis to identify opportunities, provide recommendations and implement approved changes that will reduce costs and/or risk</li>
                            
                             <li className="mt-2">???	Identify compliance issues, provide recommended solutions and implement approved changes</li>
                             <li className="mt-2">???	Develop and report key performance metrics for measuring IT assets</li>
                             <li className="mt-2">???	Support the enhancement of the IT Asset Management data repository</li>
                             <li className="mt-2">???	Facilitate contract reviews and renewals</li>
                             <li className="mt-2">???	Review and approve IT asset purchases.</li>
                        </ul>
                        <p className="font-weight-bold mb-0">REQUIREMENTS:</p>
                        
                        <ul>
                             <li className="mt-2">???	Bachelor's degree in Computer Science or closely related field, or combination of education and relevant experience</li>
                             <li className="mt-2">???	Minimum 4 years IT asset management experience, including management of multiple concurrent projects</li>
                             <li className="mt-2">???	Experience in working with business users to establish priorities and manage expectations</li>
                            <li className="mt-2"> ???	Self-starter, with the ability to handle multiple tasks and deadlines with minimal supervision</li>
                            <li className="mt-2">???	Excellent client service, interpersonal and communication skills</li>
                            <li className="mt-2">???	Strong verbal and written communication skills and capable of performing tasks in a dynamic environment many times working under tight delivery schedules </li>
                            <li className="mt-2">???	An attitude and commitment to being an active participant of our employee-owned culture is a must</li>
                            <li className="mt-2">???	Excellent English communication skills.</li>
                        </ul>
                        <p className="font-weight-bold mb-0">ADVANTAGES: </p>
                        
                        <ul>
                             <li className="mt-2">???	Experience with ServiceNow</li>
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

export default Assetdetails;
