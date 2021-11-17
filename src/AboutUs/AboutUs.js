import React from "react";
import Navigation from '../Navigation/Navigation';
import Footer from "../Footer/Footer";
import { Nav, Tab } from "react-bootstrap";
import AboutHeaderImg from '../assests/m.png';
import ProfileImg1 from '../assests/profile-1.png';
import ProfileImg2 from '../assests/profile-2.png';
import ProfileImg3 from '../assests/profile-3.png';
import ProfileImg4 from '../assests/profile-4.png';
import WorldMap from '../assests/globe-particle-dark.png';
import NicholasMartin from '../assests/team/Nicholas-Martin.png';
import VikramReddy from '../assests/team/Vikram-Reddy.png';
import UjjwalSahay from '../assests/team/Ujjwal-Sahay.png';
import BhaveshDeshmukh from '../assests/team/Bhavesh-Deshmukh.png';
import BobbyCato from '../assests/team/Bobby-Cato.png';
import MoshoodBalogun from '../assests/team/Moshood-Balogun.png';
import AlanGordon from '../assests/team/Alan-Gordon.png';
import TobiasSperrin from '../assests/team/Tobias-Sperrin.png';
import JevazeRhule from '../assests/team/Jevaze-Rhule.png';
import FariahNanhoo from '../assests/team/Fariah-Nanhoo.png';
import DylanGordon from '../assests/team/Dylan-Gordon.png';
import TehreemBeg from '../assests/team/Tehreem-Beg.png';
import SurpriyaRanpise from '../assests/team/Surpriya-Ranpise.png';
import ArnoldSarfoKantanka from '../assests/team/Arnold-Sarfo-Kantanka.png';

const AboutUs = () => {
    const handleSelect = (eventKey) => alert(`selected ${eventKey}`);
  return (
    <div className="about">
        <Navigation/>
        <section className="aboutheader header">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6 text-white">
                        <h3 className="color-light-blue mb-0">About Us</h3>
                        <h1>Crypto Mainframe</h1>
                        <h3>An innovative web & mobile platform for the management of modern digital assets.</h3>
                    </div>
                    <div className="col-lg-6">
                        <img src={AboutHeaderImg} alt="" />
                    </div>
                </div>
            </div>
        </section>
        <section className="about-profile">
            <div className="container">
                <div className="row justify-content-between">
                    <div className="col-lg-5 text-white">
                        <h3 class="color-light-blue">why it matters</h3>
                        <h2 className="mb-4">Company Profile</h2>
                        <p>Crypto Mainframe is the brainchild of Mainframe Consulting Ltd., an established London firm with successful corporate projects in distributed computing and data management solutions.</p>
                        <p>Developed in 2017, Crypto Mainframe News (CMN) is an established source of collated news, market data, and analysis for digital assets.</p>
                        <p>The Company has now built a single solution for the symbiotic operations of mining and trading, providing digital asset systems with the simultaneous market and network support. Users diversify holdings and investment strategies between the Mining Pool (MP) and a p2p Exchange (CM.Ex), supported by integrated news, data analysis and a suite of algorithms based on Artificial Intelligence and Natural Language Processing.</p>
                    </div>
                    <div className="col-lg-6">
                        <div className="row ">
                            <div className="col-lg-6 mb-4">
                                <div className="c-profileblock text-white">
                                    <img src={ProfileImg1} alt="" />
                                    <h3>Trustworthy</h3>
                                    <p>International operations with HQ in the reputable jurisdiction of the United Kingdom.</p>
                                </div>
                            </div>
                            <div className="col-lg-6 mb-4">
                                <div className="c-profileblock text-white">
                                    <img src={ProfileImg2} alt="" />
                                    <h3>Data Support</h3>
                                    <p>Supported by 24-7 news, data analysis and TradingView charting tools.</p>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-6 mb-4">
                                <div className="c-profileblock text-white">
                                    <img src={ProfileImg3} alt="" />
                                    <h3>Trading</h3>
                                    <p>All mineable assets have liquid trading pairs.</p>
                                </div>
                            </div>
                            <div className="col-lg-6 mb-4">
                                <div className="c-profileblock text-white">
                                    <img src={ProfileImg4} alt="" />
                                    <h3>Portable Access</h3>
                                    <p>Innovative asset management on PC and Mobile.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>    
            </div>
        </section>
        <section className="region-office white-bg">
             <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <h3 class="color-light-blue">About Us</h3>
                        <h2>Global Business Offices</h2>
                        <div class="where-offices">
                            <ul>
                                <li><span>India</span>Ment Tech Headquarter Office</li>
                                <li><span>UK</span>Ment Tech Branch</li>
                            </ul>
                            <div className="register-block">
                                <p>Register by January 31st for exclusive deals, crypto trading games and the Early Registration Prize Draw.</p>
                                <a href="#" className="btn-white border-radius">Register Now</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <img src={WorldMap} alt="" />
                    </div>
                </div>
            </div>
        </section>
        <section className="m-team">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 text-white text-center mb-5">
                        <h3 class="color-light-blue">Our Team</h3>
                        <h2>Crypto Mainframe</h2>
                        <p>At Crypto Mainframe, we are on a mission to accelerate the world's transition to cryptocurrency.</p>
                    </div>
                </div>
                <div className="row  text-white">
                    <div className="col-lg-12">
                        <div className="row justify-content-center">
                            <div class="col-lg-6 mb-4">
                                <a class="team-block hover-grow no-underline">
                                    <img class="img-fluid rounded-2" src={NicholasMartin} alt="" />
                                    <h3>Nicholas Martin</h3>
                                    <p>Founder & Chief Executive Officer</p>
                                    <p>As a cyber security expert, Certified Ethical Hacker (CEH) and successful entrepreneur, Nicholas took an early interest in crypto assets and blockchain technology. He founded Crypto Mainframe in 2017 to develop a Platform that solves long-standing problems in the industry such as misinformation, the centralisation of mining systems and poor technical solutions that competitors have rushed to market.
</p>
                                </a>
                            </div>
                        </div>    
                        <div className="row justify-content-center">
                            
                            <div class="col-lg-2 mb-4">
                                <a class="team-block hover-grow no-underline">
                                    <img class="img-fluid rounded-2" src={VikramReddy} alt="" />
                                    <h3>Vikram Reddy</h3>
                                    <p>Head of Operations</p>
                                </a>
                            </div>
                            <div class="col-lg-2 mb-4">
                                <a class="team-block hover-grow no-underline">
                                    <img class="img-fluid rounded-2" src={UjjwalSahay} alt="" />
                                    <h3>Ujjwal Sahay</h3>
                                    <p>Chief Product Officer</p>
                                </a>
                            </div>
                            <div class="col-lg-2 mb-4">
                                <a class="team-block hover-grow no-underline">
                                    <img class="img-fluid rounded-2" src={BhaveshDeshmukh} alt="" />
                                    <h3>Bhavesh Deshmukh</h3>
                                    <p>Chief Technology Officer</p>
                                </a>
                            </div>
                            <div class="col-lg-2 mb-4">
                                <a class="team-block hover-grow no-underline">
                                    <img class="img-fluid rounded-2" src={BobbyCato} alt="" />
                                    <h3>Bobby Cato</h3>
                                    <p>Chief Business Development Officer</p>
                                </a>
                            </div>
                        </div>
                        <div className="row justify-content-center">
                            <div class="col-lg-2 mb-4">
                                <a class="team-block hover-grow no-underline">
                                    <img class="img-fluid rounded-2" src={MoshoodBalogun} alt="" />
                                    <h3>Moshood Balogun</h3>
                                    <p>Head of Branding & Creative Development</p>
                                </a>
                            </div>
                            <div class="col-lg-2 mb-4">
                                <a class="team-block hover-grow no-underline">
                                    <img class="img-fluid rounded-2" src={AlanGordon} alt="" />
                                    <h3>Alan Gordon</h3>
                                    <p>Head of Research</p>
                                </a>
                            </div>
                            <div class="col-lg-2 mb-4">
                                <a class="team-block hover-grow no-underline">
                                    <img class="img-fluid rounded-2" src={TobiasSperrin} alt="" />
                                    <h3>Tobias Sperrin</h3>
                                    <p>Chief Product Officer</p>
                                </a>
                            </div>
                            <div class="col-lg-2 mb-4">
                                <a class="team-block hover-grow no-underline">
                                    <img class="img-fluid rounded-2" src={JevazeRhule} alt="" />
                                    <h3>Jevaze Rhule</h3>
                                    <p>Head of Sales</p>
                                </a>
                            </div>
                            <div class="col-lg-2 mb-4">
                                <a class="team-block hover-grow no-underline">
                                    <img class="img-fluid rounded-2" src={FariahNanhoo} alt="" />
                                    <h3>Fariah Nanhoo</h3>
                                    <p>Head of Marketing</p>
                                </a>
                            </div>
                        </div>
                        <div className="row justify-content-center">
                            <div class="col-lg-2 mb-4">
                                <a class="team-block hover-grow no-underline">
                                    <img class="img-fluid rounded-2" src={DylanGordon} alt="" />
                                    <h3>Dylan Gordon</h3>
                                    <p>Administrative Support</p>
                                </a>
                            </div>
                            <div class="col-lg-2 mb-4">
                                <a class="team-block hover-grow no-underline">
                                    <img class="img-fluid rounded-2" src={TehreemBeg} alt="" />
                                    <h3>Tehreem Beg</h3>
                                    <p>Marketing Analyst</p>
                                </a>
                            </div>
                            <div class="col-lg-2 mb-4">
                                <a class="team-block hover-grow no-underline">
                                    <img class="img-fluid rounded-2" src={SurpriyaRanpise} alt="" />
                                    <h3>Surpriya Ranpise</h3>
                                    <p>Quality Assurance</p>
                                </a>
                            </div>
                            <div class="col-lg-2 mb-4">
                                <a class="team-block hover-grow no-underline">
                                    <img class="img-fluid rounded-2" src={ArnoldSarfoKantanka} alt="" />
                                    <h3>Arnold Sarfo-Kantanka</h3>
                                    <p>Business Development</p>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section className="values">
            <div className="container">
                 <div className="row mb-4">
                    <div className="col-lg-12 text-white text-center mb-5">
                        <h3 class="color-light-blue">Our Team</h3>
                        <h2>Our Values</h2>
                        <p>Cryptocurrency in Every Wallet™. At cryptomainframe.exchange, we are on a mission to accelerate the world's transition to cryptocurrency.</p>
                    </div>
                </div>
                <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                <div className="row">
                    <div className="col-lg-3 position-relative">
                        <div className="tablisting align-top">
                            <Nav variant="pills" className="">
                                <Nav.Item className="w-100">
                                    <Nav.Link eventKey="first">Think Clearly</Nav.Link>
                                </Nav.Item>
                                <Nav.Item className="w-100">
                                    <Nav.Link eventKey="second">Be Resourceful</Nav.Link>
                                </Nav.Item>
                                <Nav.Item className="w-100">
                                    <Nav.Link eventKey="third">Stay Determined</Nav.Link>
                                </Nav.Item>
                                <Nav.Item className="w-100">
                                    <Nav.Link eventKey="four">Think Clearly</Nav.Link>
                                </Nav.Item>
                                <Nav.Item className="w-100">
                                    <Nav.Link eventKey="five">Be Resourceful</Nav.Link>
                                </Nav.Item>
                                <Nav.Item className="w-100">
                                    <Nav.Link eventKey="six">Stay Determined</Nav.Link>
                                </Nav.Item>
                            </Nav>
                        </div>
                    </div>
                    <div className="col-lg-9">
                        <div className="talisting-content">
                            <Tab.Content>
                                <Tab.Pane eventKey="first">
                                    <div className="row text-white">
                                        <div className="col-lg-6 mb-5">
                                            <div className="p-s-blcok">
                                                <h3 className="many">We consider clarity of thought to be the single most important trait we look for in our colleagues</h3>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 mb-5">
                                            <div className="p-s-blcok">
                                                <h3 className="many">We think about the message we want to deliver before we speak, and know what is important and what is not</h3>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 mb-5">
                                            <div className="p-s-blcok">
                                                <h3 className="many">We are concise and articulate, putting effort into making things simple and easy to understand</h3>
                                            </div>
                                        </div>
                                    </div>
                                </Tab.Pane>
                                <Tab.Pane eventKey="second">
                                    <div className="row text-white">
                                        <div className="col-lg-6 mb-5">
                                            <div className="p-s-blcok">
                                                <h3 className="many">We go beyond the surface to gain a deep understanding of every issue</h3>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 mb-5">
                                            <div className="p-s-blcok">
                                                <h3 className="many">We always find a way to get things done with what’s available, but we are not shy about asking for help when it’s needed</h3>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 mb-5">
                                            <div className="p-s-blcok">
                                                <h3 className="many">We believe that great ideas can come from anywhere, regardless of seniority and experience</h3>
                                            </div>
                                        </div>
                                    </div>
                                </Tab.Pane>
                                <Tab.Pane eventKey="third">
                                    <div className="row text-white">
                                        <div className="col-lg-6 mb-5">
                                            <div className="p-s-blcok">
                                                <h3 className="many">We never give up, carry each other through hard times, and recognise grit in our colleagues</h3>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 mb-5">
                                            <div className="p-s-blcok">
                                                <h3 className="many">We understand that building a world-changing company is a monumental task, but we love every minute of it</h3>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 mb-5">
                                            <div className="p-s-blcok">
                                                <h3 className="many">We celebrate milestones together, recharge, and get back to work</h3>
                                            </div>
                                        </div>
                                    </div>
                                </Tab.Pane>
                                <Tab.Pane eventKey="four">
                                    <div className="row text-white">
                                        <div className="col-lg-6 mb-5">
                                            <div className="p-s-blcok">
                                                <h3 className="many">We think big, take smart risks, and do things that have never been done before</h3>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 mb-5">
                                            <div className="p-s-blcok">
                                                <h3 className="many">We are not afraid to make tough choices that align with our long-term objectives</h3>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 mb-5">
                                            <div className="p-s-blcok">
                                                <h3 className="many">We know that it always seems impossible until it’s done</h3>
                                            </div>
                                        </div>
                                    </div>
                                </Tab.Pane>
                                <Tab.Pane eventKey="five">
                                    <div className="row text-white">
                                        <div className="col-lg-6 mb-5">
                                            <div className="p-s-blcok">
                                                <h3 className="many">We are all empowered to take initiative, make the right decisions, and act as owners</h3>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 mb-5">
                                            <div className="p-s-blcok">
                                                <h3 className="many">We are committed to protecting our company culture and seek to bring in the best people we’ve ever worked with</h3>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 mb-5">
                                            <div className="p-s-blcok">
                                                <h3 className="many">We aim to surprise and inspire with the quality and speed of our decision-making</h3>
                                            </div>
                                        </div>
                                    </div>
                                </Tab.Pane>
                                <Tab.Pane eventKey="six">
                                    <div className="row text-white">
                                        <div className="col-lg-6 mb-5">
                                            <div className="p-s-blcok">
                                                <h3 className="many">We don’t seek the limelight and focus on doing what is best for the company and the users</h3>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 mb-5">
                                            <div className="p-s-blcok">
                                                <h3 className="many">We leave our egos at the door and learn from our mistakes, knowing that we are always stronger as a team</h3>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 mb-5">
                                            <div className="p-s-blcok">
                                                <h3 className="many">We think twice before spending, but are aggressive when it comes to investing in what matters</h3>
                                            </div>
                                        </div>
                                    </div>
                                </Tab.Pane>
                            </Tab.Content>
                        </div>
                    </div>
                </div>  
                </Tab.Container>  
            </div>
        </section>
        <section className="jointeam">
            <div  classname="container">
                <div className="row justify-content-center">
                    <div className="col-lg-8">
                        <div className="joinnow">
                            <h2>We are hiring</h2>
                            <h3>We are always on the lookout for talent</h3>
                            <a href="/" class="learns">Vacancies</a>
                        </div>
                    </div>    
                </div>    
            </div>
        </section>
        <Footer/>
    </div>
  );
};

export default AboutUs;
