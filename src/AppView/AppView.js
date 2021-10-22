import React from "react";
import Navigation from '../Navigation/Navigation';
import Footer from "../Footer/Footer";
import SwiperCore, { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'

import AppHeaderImg from '../assests/app-header.png';
import GoogleImg from '../assests/google.png';
import IphoneImg from '../assests/iphone.png';
import KeyfeatureImg from '../assests/key-feature.png';
import Image1 from "../assests/1.jpg";
import Image2 from "../assests/2.jpg";
import Image3 from "../assests/3.jpg";
import Image5 from "../assests/5.jpg";
import Image6 from "../assests/6.jpg";

SwiperCore.use([Autoplay]);

const AppView = () => {
 
  return (
    <div className="appview">
        <Navigation/>
        <section className="app-header header">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 text-white">
                        <h3 className="color-light-blue">SECURELY BUY, SELL, EARN, SEND & TRACK</h3>
                        <h2>The Next-Generation</h2>
                        <h1>Digital Exchange App</h1>
                        <p><a href="#"><img src={GoogleImg} alt="" /></a> <a href="#"><img src={IphoneImg} alt="" /></a></p>
                    </div>
                    <div className="col-lg-6">
                        <img src={AppHeaderImg} alt="" />
                    </div>
                </div>
            </div>
        </section>
        <section class="keyfeature-section">
            <div class="container">
                <div class="row justify-content-center mb-5">
                    <div class="col-lg-8 text-center text-white">
                        <h2 class="gradient-text">Key Features</h2>
                        <p class="text-white">All the power of Elephant crypto Coin exchange, in the palm of your hand.</p>
                    </div>
                </div>
                <div class="row align-items-center">
                    <div class="col-lg-6">
                        <div class="d-flex justify-content-center align-items-center">
                        <img src={KeyfeatureImg} alt="" />
                        </div>
                    </div>
                    <div class="col-lg-6">
                        <div class="mb-3">
                        <h3 class="text-white"> Buy</h3>
                        <p class="text-white mb-0"> FIAT: Top with bank transfer, debit or credit card, or Elephantccx </p>
                        <p class="text-white mb-0"> CYRPTO: Buy crypto with flat wallet with debit or credit card</p>
                        </div>
                        <div class="mb-3">
                        <h3 class="text-white"> Send</h3>
                        <p class="text-white mb-0"> CRYPTO: Send crypto to ElephantCCX App users instantly without fees.</p>
                        <p class="text-white mb-0"> CYRPTO: Withdraw crypto to external wallet addresses with a small fixed fee</p>
                        </div>
                        <div class="mb-3">
                        <h3 class="text-white">Track Coins</h3>
                        <p class="text-white mb-0"> CRYPTO: Monitor 200+ coins at your fingertips, Prices, volume, market cap, % change and more</p>
                        <p class="text-white mb-0"> CYRPTO: USD and BTC-8H, 1D, 1M, 3M, 6M</p>
                        </div>
                        <div class="mb-3">
                            <p><a href="#"><img src={GoogleImg} alt="" /></a> <a href="#"><img src={IphoneImg} alt="" /></a></p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section className="app-slider">
            <div className="container">
            <div className="row justify-content-center">
                <div className="col-lg-10 text-center">
                    <div className="coin-title">
                    <h2 className="mt-4 mt-md-0 gradient-text">
                        Simple & Beautiful Interface
                    </h2>
                    </div>
                    <p className="pt-3">
                    ElephantCCX app is the most complete Bitcoin exchange app where
                    you can trade, convert crypto to fiat and back, stake, lend, and
                    leverage trade Bitcoin with 300+ cryptocurrencies. This app is
                    specially designed to give you a complete crypto experience in a
                    single place.
                    </p>
                    
                </div>
            </div>
            <div className="row">
                <div className="col-lg-12">
                    <div>
                        <Swiper
                            centeredSlides
                            loop={true}
                            autoplay
                            breakpoints={{
                            576: {
                                slidesPerView: 1,
                                spaceBetween: 20,
                            },
                            1200: {
                                slidesPerView: 3,
                                spaceBetween: 50,
                            },
                            }}
                        >
                        <SwiperSlide>
                        <img src={Image1} alt="..." />
                        </SwiperSlide>
                        <SwiperSlide>
                        <img src={Image2} alt="..." />
                        </SwiperSlide>
                        <SwiperSlide>
                        <img src={Image3} alt="..." />
                        </SwiperSlide>
                        <SwiperSlide>
                        <img src={Image5} alt="..." />
                        </SwiperSlide>
                        <SwiperSlide>
                        <img src={Image6} alt="..." />
                        </SwiperSlide>
                        </Swiper>
                    </div>
                </div>
            </div>
            </div>
        </section>
        <Footer/>
    </div>
  );
};

export default AppView;
