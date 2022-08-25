import React, { useState } from 'react';
import Carousel from 'react-simply-carousel';
import "./gallery.css";

const Gallery = ({ images }) => {

  const [activeSlide, setActiveSlide] = useState(0);

  return (
    <div>
      <Carousel
        activeSlideIndex={activeSlide}
        onRequestChange={setActiveSlide}
        itemsToShow={1}
        itemsToScroll={1}
        easing={'ease'}
        forwardBtnProps={{
          style: {
            background: 'transparent',
            position: 'absolute',
            right: 0,
            border: 'none',
            width: '50vw',
            height: '75vh',
            zIndex: '1'
          }
        }}
        backwardBtnProps={{
          style: {
            background: 'transparent',
            position: 'absolute',
            left: 0,
            border: 'none',
            width: '50vw',
            height: '75vh',
            zIndex: '1'
          }
        }}
        dotsNav={{
          show: true,
          itemBtnProps: {
            style: {
              backgroundColor: 'silver',
              height: 16,
              width: 16,
              borderRadius: "50%",
              border: 0,
              margin: '1.5em .5em 3em .5em'
            }
          },
          activeItemBtnProps: {
            style: {
              height: 16,
              width: 16,
              borderRadius: "50%",
              border: 0,
              background: "black",
              margin: '1.5em .5em 3em .5em'
            }
          }
        }}
      >
        <div><img className="gallery-img" src={process.env.PUBLIC_URL + "/images/home-ms-1.jpg"} alt="LNY-sign" /></div>
        <div><img className="gallery-img" src={process.env.PUBLIC_URL + "/images/home-location-1.jpg"} alt="front-office-view" /></div>
        <div><img className="gallery-img" src={process.env.PUBLIC_URL + "/images/home-bottom.jpg"} alt="fendi-sign" /></div>
        <div><img className="gallery-img" src={process.env.PUBLIC_URL + "/images/home-location-2.jpg"} alt="face-mirror" /></div>
        <div><img className="gallery-img" src={process.env.PUBLIC_URL + "/images/inside-office.jpg"} alt="inside-office" /></div>
        <div><img className="gallery-img" src={process.env.PUBLIC_URL + "/images/glasses-cleaner.jpg"} alt="glasses-cleaner" /></div>
        <div><img className="gallery-img" src={process.env.PUBLIC_URL + "/images/LNYcup.jpg"} alt="LNY-cup" /></div>
        <div><img className="gallery-img" src={process.env.PUBLIC_URL + "/images/rayban-display.jpg"} alt="rayban-display" /></div>
        <div><img className="gallery-img" src={process.env.PUBLIC_URL + "/images/coach-glasses.jpg"} alt="coach-glasses" /></div>
        <div><img className="gallery-img" src={process.env.PUBLIC_URL + "/images/prada-display.jpg"} alt="prada-display" /></div>
        <div><img className="gallery-img" src={process.env.PUBLIC_URL + "/images/home-top.jpg"} alt="glasses-turntable" /></div>
        <div><img className="gallery-img" src={process.env.PUBLIC_URL + "/images/home-ms-main.jpg"} alt="glasses-sidecase" /></div>
      </Carousel>
    </div>
  );
}

export default Gallery;