import React from 'react';
import Navbar from './Navbar';


const HeroSection = () => {
    return (
      <section className="heroSection" id="heroSection">
        <Navbar />
        <div className="container">
          <div className="banner">
            <div className="largeBox">
              <h1 className="title">Delicious</h1>
            </div>
            <div className="combined_boxes">
              <div className="imageBox">
                <img src="/pizza.jpg" alt="hero" />
              </div>
              <div className="textAndLogo">
                <div className="textWithSvg">
                  <h1 className="title">Food</h1>
                  <h1 className="title dishes_title">Dishes</h1>
                  
                </div>
                <img className="logo" src="/logo.png" height="250px" width="250px" alt="logo" />
              </div>
            </div>
          </div>
          <div className="banner">
            <div className="imageBox">
              <img src="/wine.jpg" alt="hero" />
            </div>
            <h1 className="title dishes_title">&Drinks</h1>
          </div>
        </div>
      </section>
    );
  };

export default HeroSection