import React from "react";
import laptop from '../../assests/laptop.png';
import { bounce } from 'react-animations';
import Radium, {StyleRoot} from 'radium';

const Intro = () => {

    const styles = {
        bounce: {
          animation: 'x 1s',
          animationName: Radium.keyframes(bounce, 'bounce')
        }
      }

return (
    <section className="intro">
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-lg-12 text-center text-white">
                    <h2>We are an International Team of Passionate Blockchain Enthusiasts.</h2>
                    <h3>Crypto Mainframe has spent two years developing a unique platform that will allow crypto users to simultaneously diversify portfolio assets and investment
                        methods in a secure environment.</h3>
                </div>
            </div>
            <div className="row justify-content-center lapi-shadow">
                <div className="col-lg-10">
                    <img style={styles.bounce} src={laptop} alit="" />
                </div>
            </div>    
        </div>
    </section>
);
};
export default Intro;

