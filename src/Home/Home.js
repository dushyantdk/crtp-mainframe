import React, { useState } from "react";
import HeaderHome from "../Header/HeaderHome/HeaderHome";
import Navigation from '../Navigation/Navigation';
import Intro from '../Home/Into/Intro';
import CrytoTable from '../Home/CryptoTable/CryptoTbale';
import TradeConfidence from '../Home/TradeConfidence/TradeConfidence';
import NewTraders from "./NewTraders/NewTraders";
import Advantage from "./Advantage/Advantage";
import MajorCurrency from './MajorCurrency/MajorCurrency';
import Footer from "../Footer/Footer";

const Home = () => {
 
  return (
    <div className="home">
        <Navigation/>
        <HeaderHome/>
        <Intro/>
        <CrytoTable/>
        <TradeConfidence/>
        <NewTraders/>
        <Advantage/>
        <MajorCurrency/>
        <Footer/>
    </div>
  );
};

export default Home;
