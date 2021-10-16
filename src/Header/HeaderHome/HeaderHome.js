import React from "react";
import Typewriter from 'typewriter-effect';
import Iphone from '../../assests/iphone.png';
import Google from '../../assests/google.png';
import Fade from 'react-reveal/Fade';

const HeaderHome = () => {

return (
    <section className="header">
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-lg-10 text-center text-white">
                    <h1>
                        <Typewriter
                            options={{
                            strings: [
                            'Mine Together <br/><span className="font-weight-bold">Trade Together</span>',
                            'Financial Software <br/>Development',
                            ],
                            autoStart: true,
                            loop: true,
                            delay: 80,
                            deleteSpeed: 100,
                            }}
                        />
                         
                    </h1>
                    <Fade bottom>
                        <h3 className="mb-5">One platform for Media, Mining and trading of modern digital assets</h3>
                        <a className="btn-blue border-radius" href="#">Start Trading</a>
                        <div className="appstore-block mt-5">
                            <a href="#"><img src={Iphone} alt="" /></a>
                            <a href="#"><img src={Google} alt="" /></a>
                        </div>
                    </Fade>
                </div>
            </div>
        </div>
    </section>
);
};
export default HeaderHome;

