import React from "react";

import "./page.css";

import Header from "../components/header";
import Carousell from "../components/carousel";

import image1 from '../assets/casinoimg/1_spaceman.jpg'
import image2 from '../assets/casinoimg/1_aviator.jpg'
import image3 from '../assets/casinoimg/1_mines.jpg'
import image4 from '../assets/casinoimg/1_roulette.jpg'
import image5 from '../assets/casinoimg/1_gatesofalypus.jpg'

export default function casino() {
  return (
    <div className="theme">
      <div>
        <Header />
      </div>
      <div className="row">
        <div className="casinocarousel container">
          <Carousell />
        </div>
        <div className="casinogame container">
            <div className="row">
                <img className="casinoimg" src={image1} />
                <img className="casinoimg" src={image2} />
                <img className="casinoimg" src={image3} />
                <img className="casinoimg" src={image4} />
                <img className="casinoimg" src={image5} />
            </div>
            <div className="row">
                <img className="casinoimg" src={image1} />
                <img className="casinoimg" src={image2} />
                <img className="casinoimg" src={image3} />
                <img className="casinoimg" src={image4} />
                <img className="casinoimg" src={image5} />
            </div>
            <div className="row">
                <img className="casinoimg" src={image1} />
                <img className="casinoimg" src={image2} />
                <img className="casinoimg" src={image3} />
                <img className="casinoimg" src={image4} />
                <img className="casinoimg" src={image5} />
            </div>
            <div className="row">
                <img className="casinoimg" src={image1} />
                <img className="casinoimg" src={image2} />
                <img className="casinoimg" src={image3} />
                <img className="casinoimg" src={image4} />
                <img className="casinoimg" src={image5} />
            </div>
        </div>
      </div>
    </div>
  );
}
