import React from 'react';
import $ from 'jquery';
import "./gallery.css";

const Gallery = () => {

  return (

    <div>

      <div id="myCarousel" className="carousel slide carousel-fade" data-ride="carousel" data-interval="false">

        <div className="carousel-inner">

          <ol className="carousel-indicators">
            <li data-target="#myCarousel" data-slide-to="0" className="imageDot active"></li>
            <li data-target="#myCarousel" data-slide-to="1" className="imageDot"></li>
            <li data-target="#myCarousel" data-slide-to="2" className="imageDot"></li>
            <li data-target="#myCarousel" data-slide-to="3" className="imageDot"></li>
            <li data-target="#myCarousel" data-slide-to="4" className="imageDot"></li>
            <li data-target="#myCarousel" data-slide-to="5" className="imageDot"></li>
            <li data-target="#myCarousel" data-slide-to="6" className="imageDot"></li>
            <li data-target="#myCarousel" data-slide-to="7" className="imageDot"></li>
            <li data-target="#myCarousel" data-slide-to="8" className="imageDot"></li>
            <li data-target="#myCarousel" data-slide-to="9" className="imageDot"></li>
            <li data-target="#myCarousel" data-slide-to="10" className="imageDot"></li>
            <li data-target="#myCarousel" data-slide-to="11" className="imageDot"></li>
          </ol>

          <div className="galleryFooter footerHide">
            <div className="footerTitle">LNY optometry</div>
            <div className="footerDesc">Eye Exams, Contact Lenses, and Glasses in San Diego.</div>
          </div>

          <div className="carousel-item active">
            <img className="d-block w-100 gallery-img" src={process.env.PUBLIC_URL + "/images/home-ms-1.jpg"} alt="LNY-sign" />
          </div>
          <div className="carousel-item">
            <img className="d-block w-100 gallery-img" src={process.env.PUBLIC_URL + "/images/home-location-1.jpg"} alt="front-office-view" />
          </div>
          <div className="carousel-item">
            <img className="d-block w-100 gallery-img" src={process.env.PUBLIC_URL + "/images/home-bottom.jpg"} alt="fendi-sign" />
          </div>
          <div className="carousel-item">
            <img className="d-block w-100 gallery-img" src={process.env.PUBLIC_URL + "/images/home-location-2.jpg"} alt="face-mirror" />
          </div>
          <div className="carousel-item">
            <img className="d-block w-100 gallery-img" src={process.env.PUBLIC_URL + "/images/inside-office.jpg"} alt="inside-office" />
          </div>
          <div className="carousel-item">
            <img className="d-block w-100 gallery-img" src={process.env.PUBLIC_URL + "/images/glasses-cleaner.jpg"} alt="glasses-cleaner" />
          </div>
          <div className="carousel-item">
            <img className="d-block w-100 gallery-img" src={process.env.PUBLIC_URL + "/images/LNYcup.jpg"} alt="LNY-cup" />
          </div>
          <div className="carousel-item">
            <img className="d-block w-100 gallery-img" src={process.env.PUBLIC_URL + "/images/rayban-display.jpg"} alt="rayban-display" />
          </div>
          <div className="carousel-item">
            <img className="d-block w-100 gallery-img" src={process.env.PUBLIC_URL + "/images/coach-glasses.jpg"} alt="coach-glasses" />
          </div>
          <div className="carousel-item">
            <img className="d-block w-100 gallery-img" src={process.env.PUBLIC_URL + "/images/prada-display.jpg"} alt="prada-display" />
          </div>
          <div className="carousel-item">
            <img className="d-block w-100 gallery-img" src={process.env.PUBLIC_URL + "/images/home-top.jpg"} alt="glasses-turntable" />
          </div>
          <div className="carousel-item">
            <img className="d-block w-100 gallery-img" src={process.env.PUBLIC_URL + "/images/home-ms-main.jpg"} alt="glasses-sidecase" />
          </div>

        </div>

        <a className="carousel-control-prev prevBtn" href="#myCarousel" role="button" data-slide="prev">
          <span className="carousel-control-prev-icon prevIcon hidden" aria-hidden="true"></span>
          <span className="sr-only">Previous</span>
        </a>
        <a className="carousel-control-next nextBtn" href="#myCarousel" role="button" data-slide="next">
          <span className="carousel-control-next-icon nextIcon hidden" aria-hidden="true"></span>
          <span className="sr-only">Next</span>
        </a>

      </div>
    </div>
  );
}

export default Gallery;