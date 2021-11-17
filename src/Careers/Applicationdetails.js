import React from "react";
import Footer from "../Footer/Footer";
import Navigation from '../Navigation/Navigation';
import * as yup from "yup";
import { Formik } from "formik";
import {useToasts} from "react-toast-notifications";
//import Phone from "../PhoneInput";


const Applicationdetails = () => {

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
        <Navigation/>
        <section className="teamAbout header text-white">
            <div className="container wide-block">
                <div className="row home-header-content align-items-center justify-content-center my-5 pb-0">
                    <div className="col-lg-8 text-center">
                    <h1>Want to make a difference? You have come to the right place </h1>
                    <p>Create the future with us</p>
                    </div>
                </div>
            </div>
        </section>
        <section className="job-details">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 text-white">
                        <h2>Application Security Architect -  Security Department</h2>
                        <p className="font-12">Ment Fintech - Ireland, Dublin Office</p>
                        <p>Ment Fintech has positioned itself as a Fintech Leader, pioneering revolutionary practices such as social trading, blockchain and machine-learning-based investment products. Ment Fintech operates in full transparency with its clients.</p>
                        <p>Our Research and Development department develops cutting-edge technologies, focusing on field-relevant areas, such as blockchain and artificial intelligence among others. We offer competitive fees and an organizational culture which is both professional and friendly.</p>
                        <p>Security is the most important concept in crypto trading and our exchange was designed with sophisticated safety measures as almost all tokens and coins are held in cold storage.</p>
                        <p>Security is all important for crypto exchanges and should never be compromised. We have developed an advanced security system to help prevent losses as a result of fraudulent activities and attacks.</p>
                        <p>Ment Fintech is looking for a talented and experienced Application and Security Architect to join the Ment Fintech team and become part of the Ment Family!</p>
                        <p>Ment Fintech Security Team is the sole security authority for the organization, from financial risks to technical IT solutions, the main objective of the Ment Team is to outline the security strategy for all aspects and departments, creating and managing major projects, researching new solutions and technologies, incident response to critical events and many more.</p>
                <p className="font-weight-bold mb-0">WHAT YOU’LL BE DOING:</p>
                        
                        <ul>
                             <li className="mt-2">•	Be a part of an innovative security team with challenging demands</li>
                             <li className="mt-2">•	Research and integrate new technologies</li>
                             <li className="mt-2">•	Establish and maintain security systems and associated applications in a multinational environment</li>
                             <li className="mt-2">•	Integrate tools, scripts and operating procedures for continuous efficiency improvement</li>
                             <li className="mt-2">•	Perform problem diagnosis, troubleshooting and resolutions at all time</li>
                             <li className="mt-2">•	Lead ongoing security projects and tasks.</li>
                        </ul>
                        <p className="font-weight-bold mb-0">REQUIREMENTS:</p>
                        
                        <ul>
                             <li className="mt-2">• Bachelor’s degree in computer science or business mgmt. preferred MA in research topic</li>
                             <li className="mt-2">•	3+ years of experience in Cyber security</li>
                             <li className="mt-2">•	Experience in designing and deploying applications in cloud environments (Microsoft Azure, AWS, Google)</li>
                             <li className="mt-2">•	Experience in defense in depth concept, Cryptography, secure development (SSDLC) methodology, Secure Architecture. Security tools such as: Fw, Ips, EDR</li>
                             <li className="mt-2">•	Vulnerability assessment tools</li>
                             <li className="mt-2">•	Excellent English communication skills.</li>
                        </ul>
                        <p className="font-weight-bold mb-0">ADVANTAGES: </p>
                        
                        <ul>
                             <li className="mt-2">•	Scripting and automation experience: (any of Shell/Bash, Perl, Python, Ruby, PowerShell)</li>
                             <li className="mt-2">•	Any of the following CISSP, VCP, CCNP, CCNA Security, MCITP, MCSE or any equivalent qualification</li>
                             <li className="mt-2">•	Have technical experience with Cryptocurrencies, Cryptography</li>
                             <li className="mt-2">•	Code Review \ PT capabilities.</li>
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
                                        {/* <div className="form-group">
                                            <label>Phone<em className="text-danger">*</em></label>
                                            <Phone phone={values.phone} change={handleChange}/>
                                            <span className="text-danger">{errors.phone}</span>
                                        </div> */}
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
                                        <button type="submit" className="schedule-call-modal w-100 btn-blue border-radius text-center mt-4">Apply Now</button>
                                    </from>
                                )}
                            </Formik>

                        </div>
                    </div>
                </div>
            </div>
        </section>
        <Footer/>
    </section>
  );
};

export default Applicationdetails;
