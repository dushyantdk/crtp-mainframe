import React from "react";
import CopyRight from "../Footer/CopyRight";
import Footer from "../Footer/Footer";
import Navigation from "../Header/Navigation/Navigation";
import * as yup from "yup";
import { Formik } from "formik";
import {useToasts} from "react-toast-notifications";
import Phone from "../PhoneInput";

const CareerDetail = () => {

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
                                      {/* <li><a href="#"><i class="fab fa-discord"></i></a></li> */}
                            </div>
                        </div>
                    </div>
            </div>
        </section>
        <section className="job-details">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8">
                        <h2>Senior Designer, Accessibility & Design Systems</h2>
                        <p className="font-12">Remote - Europe </p>
                        <p>Github is looking for an experienced systems designer, specializing in accessibility, to lead accessible and inclusive design initiatives. You will be part of a team of skilled designers and engineers, including new teammates specializing in accessibility—you’ll have the opportunity to shape this function and have a high impact on our design system and github applications. This position is embedded on the design infrastructure team, part of the design organization.</p>
                        <p>Github is a home for all developers, so we want to ensure our applications and websites are inclusive to our customers. This role will focus on the design and delivery of inclusive ui patterns, the internal experience of implementing accessibility compliant ui, and works closely with platform and feature teams. You’ll be working closely with designers and engineers working on our design system and ui infrastructure, so that we evolve systems for the needs of our product. Our team is composed of talented individuals who have backgrounds in product design, design systems, design ops, and illustration; as well as css experts, and engineers with front-end and full-stack experience working in Rails and React.js.</p>
                        <p className="font-weight-bold mb-0">What we're looking for:</p>
                        <p>Senior designers at github are strong individual contributors; they're given a lot of autonomy and trust to work on high impact design projects. For this specific role, we're looking for someone who values the following:</p>
                        <ul>
                            <li><span className="font-weight-bold">Systems thinking: </span>Our team has to apply decisions holistically, making sure to look at new patterns in context to the larger system of the product, as well as ensuring we support experiences for individual features.</li>
                            <li><span className="font-weight-bold">Systems thinking: </span>Our team has to apply decisions holistically, making sure to look at new patterns in context to the larger system of the product, as well as ensuring we support experiences for individual features.</li>
                            <li><span className="font-weight-bold">Systems thinking: </span>Our team has to apply decisions holistically, making sure to look at new patterns in context to the larger system of the product, as well as ensuring we support experiences for individual features.</li>
                            <li><span className="font-weight-bold">Systems thinking: </span>Our team has to apply decisions holistically, making sure to look at new patterns in context to the larger system of the product, as well as ensuring we support experiences for individual features.</li>
                            <li><span className="font-weight-bold">Systems thinking: </span>Our team has to apply decisions holistically, making sure to look at new patterns in context to the larger system of the product, as well as ensuring we support experiences for individual features.</li>
                        </ul>
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

export default CareerDetail;
