import React from 'react';
import { Link } from 'react-scroll';
import $ from 'jquery';
import { Parallax, Background } from 'react-parallax';
import { MDBRow, MDBCol, } from 'mdb-react-ui-kit';
import "./indexstyle.css";
import "./sidenavindex.js";
import {
    TopTitleBox, TopTitle, TopDescriptionBox, TopDescription, MSContainer, MStitle, MSdescription,
    MidTitleBox, MidTitle, MidDescBox, MidDesc, WbgBox, WbgDescBox, WbgDesc, BotTitleBox, BotTitle,
    BotDescBox, BotDesc, LocContainer, LocTitle, LocDesc, OffHours
} from "./indexstyle";

const Home = () => {

    $(window).scroll(function () {

        var scroll = $(window).scrollTop();

        $('.dot').each(function () {
            var elementPositionTop = parseFloat($(this).offset().top) + (parseFloat($(this).height() / 2));

            if (elementPositionTop >= 0 && elementPositionTop <= 915 || elementPositionTop >= 1725 &&
                elementPositionTop <= 2300 || elementPositionTop >= 3220 && elementPositionTop <= 3800
                || elementPositionTop >= 4540) {
                $(this).addClass('whiteDot');
            } else {
                $(this).removeClass('whiteDot');
            }
        });
    });

    $(window).scroll(function () {

        var scroll = $(window).scrollTop();

        $('.dropItem').each(function () {
            var elementPositionTop = parseFloat($(this).offset().top) + (parseFloat($(this).height() / 2));

            if (elementPositionTop >= 0 && elementPositionTop <= 900 || elementPositionTop >= 1710 &&
                elementPositionTop <= 2285 || elementPositionTop >= 3205 && elementPositionTop <= 3785
                || elementPositionTop >= 4525) {
                $(this).addClass('whiteText') &&
                    $(this).removeClass('blackText');
            } else {
                $(this).removeClass('whiteText') &&
                    $(this).addClass('blackText');
            }
        });
    });

    return (

        <div>

            <section id="LNYoptometry">
                <Parallax className="home-top-bg" strength={750}>
                    <Background>
                        <img className="home-topimg" src={process.env.PUBLIC_URL + "/images/home-top.jpg"} alt="main-entrance" /></Background>
                    <TopTitleBox>
                        <TopTitle>LNY OPTOMETRY</TopTitle>
                    </TopTitleBox>
                    <TopDescriptionBox>
                        <TopDescription>Eye Exams, Contact Lenses, and Glasses in Pacific Beach, San Diego</TopDescription>
                        <TopDescription>1890 Garnet Ave. San Diego, CA 92109</TopDescription>
                        <TopDescription>(858) 274-3777</TopDescription>
                        <TopDescription>Office hours: by appointment only due to COVID-19</TopDescription>
                    </TopDescriptionBox>
                </Parallax>

                <MSContainer>

                    <MDBRow className="MSRow">
                        <MDBCol className="col-12 col-sm-8"><img class="MSmain img-fluid"
                            src={process.env.PUBLIC_URL + "/images/home-ms-main.jpg"} alt="Glasses-Showcase"
                        /></MDBCol>
                        <MDBCol className="MSdescBox col-12 col-sm-4">
                            <MSdescription><MStitle>MISSION STATEMENT:</MStitle></MSdescription>
                            <MSdescription>The mission is simple: provide quality eye care with a personal touch and excellent customer
                                service that patients will want to return year after year.
                            </MSdescription>
                            <MSdescription>At LNY optometry, we care for your eyes and are commited to understanding your eye related
                                concerns using state of the art diagnostic technology.
                            </MSdescription>
                            <MSdescription>We also take the extra time needed to answer all of your questions and help you find the best
                                products to help you see clearly. Our practice features a large selection of designer frames to fit every
                                style and budget.
                            </MSdescription>
                        </MDBCol>
                    </MDBRow>
                    <MDBRow className="MSRow">
                        <MDBCol className="col-12 col-md-4 col-sm-4"><img class="MSsub img-fluid" src={process.env.PUBLIC_URL + "/images/home-ms-1.jpg"} alt="LNYsign"
                        /></MDBCol>
                        <MDBCol className="col-12 col-md-4 col-sm-4"><img class="MSsub img-fluid" src={process.env.PUBLIC_URL + "/images/home-ms-2.jpg"} alt="oculars"
                        /></MDBCol>
                        <MDBCol className="col-12 col-md-4 col-sm-4"><img class="MSsub img-fluid" src={process.env.PUBLIC_URL + "/images/home-ms-3.jpg"} alt="retina"
                        /></MDBCol>
                    </MDBRow>
                </MSContainer>
            </section>

            <section id="WhyBuyGlasses">
                <Parallax className="home-mid-bg" strength={750}>
                    <Background>
                        <img className="home-midimg" src={process.env.PUBLIC_URL + "/images/home-middle.jpg"} alt="glasses-closeup" /></Background>
                    <MidTitleBox>
                        <MidTitle>WHY BUY GLASSES FROM YOUR OPTOMETRIST?</MidTitle>
                    </MidTitleBox>
                    <MidDescBox>
                        <MidDesc>Because every pair of quality glasses will achieve that elusive great fit and look.</MidDesc>
                    </MidDescBox>
                </Parallax>

                <WbgBox>
                    <MDBRow className="WbgRow">
                        <MDBCol className="col-6 col-lg-3 col-md-3"><img class="WbgSub img-fluid"
                            src={process.env.PUBLIC_URL + "/images/home-wbg-1.jpg"} alt="Glasses-Incase"
                        /></MDBCol>
                        <MDBCol className="col-6 col-lg-3 col-md-3"><img class="WbgSub img-fluid"
                            src={process.env.PUBLIC_URL + "/images/home-wbg-2.jpg"} alt="Protractor"
                        /></MDBCol>
                        <MDBCol className="col-6 col-lg-3 col-md-3"><img class="WbgSub img-fluid"
                            src={process.env.PUBLIC_URL + "/images/home-wbg-3.jpg"} alt="Microscope"
                        /></MDBCol>
                        <MDBCol className="col-6 col-lg-3 col-md-3"><img class="WbgSub img-fluid"
                            src={process.env.PUBLIC_URL + "/images/home-wbg-4.jpg"} alt="Toolset"
                        /></MDBCol>
                    </MDBRow>
                </WbgBox>

                <WbgDescBox>
                    <MDBRow className="WbgRow">
                        <MDBCol className="col-12 col-lg-6 col-md-6">
                            <WbgDesc>
                                Craftsmanship takes more than one hour to achieve. There are dozens of critical steps
                                in the manufacturing of eyeglasses and huge differences in the quality of frames, lenses,
                                and lens coatings. Your glasses will be used everyday and we will walk you through the
                                several decisions you will make in selecting quality glasses that will provide you with a
                                great fit and look.
                            </WbgDesc>
                            <WbgDesc>
                                <b>Material Options:</b> Modern technology has created <b>High Index</b> lenses
                                that bend light differently so that stronger corrections are thinner and more
                                attractive. <b>Polycarbonate</b> and Trivex lenses are the most impact resistant
                                lenses available and are always the lens of choice for young people and active
                                patients. <b>Aspheric Lenses</b> provide special visual and cosmetic benefits for
                                stronger corrections and increase edge to edge clarity. These lenses eliminate the
                                bulgy appearance of strong plus lenses and greatly enhances the appearance of finished
                                eyewear. Persons with strong nearsighted corrections also benefit from thinner and
                                lighter weight glasses when their lenses are aspheric. These lenses positioned closer
                                to the face which gives less eye magnification with farsighted corrections and less
                                small eyes look with nearsighted corrections.
                            </WbgDesc>
                            <WbgDesc>
                                <b>Tint Options: Photochromic</b> or <b>Transition Lenses</b> will darken as you go from
                                indoors to outdoors to a moderate shade of grey or brown. <b>Polarized Lenses</b>
                                eliminate reflected glare. They are especially appropiate for drivers, fishermen, hunters,
                                and other types of outdoor activities. <b>Solid and Gradient Tints</b> are also available.
                            </WbgDesc>
                        </MDBCol>

                        <MDBCol className="col-12 col-lg-6 col-md-6">
                            <WbgDesc>
                                <b>Lens Options: Digital (Free Form) Lenses</b> in <b>Single Vision. Bifocals. Trifocals. </b>
                                Digital Free Form <b>Progressive Addition Lenses</b> (no line bifocals) provide all the benefits
                                of bifocals but add the feature of continuous clear vision at all distances, including mid-range
                                distance (arm's length). Progressive have the cosmetic advantage of appearing to be single
                                vision lenses so they never reveal the user wears bifocals. Progressives are available in all
                                lens materials and also made in aspheric form.
                            </WbgDesc>
                            <WbgDesc>
                                <b>Coatings: Anti Reflective Coatings</b> are much like those used in fine cameras. These
                                coatings are particularly effective for reducing eye fatigue for computer operators and anyone
                                driving at night. They also enhance appearance by removing all distracting reflections.
                                Ultraviolet rays in sunlight pose potential harm to the eyes. <b>UV Coatings</b> or polycarbonate
                                and high index lenses can completely block hazardous UV light. <b>Scratch Resistance Coatings</b>
                                help protect lenses from normal scratching.
                            </WbgDesc>
                            <WbgDesc>
                                <b>The importance of sunglasses:</b> Ultraviolet radiation from the sun is getting more intense
                                because of ozone depletion. Look for sunglasses that provide at least 98% protections from both
                                UVA and UVB rays.
                            </WbgDesc>
                        </MDBCol>
                    </MDBRow>
                </WbgDescBox>
            </section>

            <section id="LocationContact">
                <Parallax className="home-bot-bg" strength={750}>
                    <Background>
                        <img className="home-botimg" src={process.env.PUBLIC_URL + "/images/home-bottom.jpg"} alt="sidewall" /></Background>
                    <BotTitleBox>
                        <BotTitle>LOCATION & CONTACT INFO</BotTitle>
                    </BotTitleBox>
                    <BotDescBox>
                        <BotDesc>1890 Garnet Ave. San Diego, CA 92109</BotDesc>
                        <BotDesc><a href="https://www.google.com/maps/place/32%C2%B048'06.5%22N+117%C2%B014'09.8%22W/@32.8018039,-117.2535652,14"
                            className="locationCoord" target="blank">32°48'06.5"N 117°14'09.8"W</a></BotDesc>
                        <BotDesc>(858) 274-3777</BotDesc>
                    </BotDescBox>
                </Parallax>

                <LocContainer>
                    <MDBRow className="LocRow">
                        <MDBCol className="col-12 col-lg-4 col-md-4 col-sm-4">
                            <LocTitle>LOCATION</LocTitle>
                            <LocDesc>We are pleased to introduce you to our office. Conveniently located in Pacific Beach,
                                Pacific Plaza II, at the intersection of Garnet Ave and Lamont Street, across from the
                                Broken Yolk Restaurant, and just behind Bruegger's Bagels.
                            </LocDesc>
                        </MDBCol>
                        <MDBCol className="col-12 col-lg-4 col-md-4 col-sm-4">
                            <LocTitle>OFFICE HOURS</LocTitle>
                            <OffHours>MONDAY 10AM-6PM</OffHours>
                            <OffHours>TUESDAY 10AM-6PM</OffHours>
                            <OffHours>WEDNESDAY 10AM-2PM</OffHours>
                            <OffHours>THURSDAY 10AM-6PM</OffHours>
                            <OffHours>FRIDAY 10AM-6PM</OffHours>
                            <OffHours>SATURDAY BY APPOINTMENT</OffHours>
                        </MDBCol>
                        <MDBCol className="col-12 col-lg-4 col-md-4 col-sm-4">
                            <LocTitle>CONTACT INFO</LocTitle>
                            <LocDesc>DR. YOSUKE YONEMASU, OD</LocDesc>
                            <LocDesc>DR. KRISTINE PHAM, OD</LocDesc>
                            <LocDesc>1890 GARNET AVE. SAN DIEGO, CA 92109</LocDesc>
                            <LocDesc>(858) 274-3777</LocDesc>
                            <LocDesc>LNYoptometry@gmail.com</LocDesc>
                            <locDesc><a href="https://www.google.com/maps/place/32%C2%B048'06.5%22N+117%C2%B014'09.8%22W/@32.8018039,-117.2535652,14"
                                className="locationCoord" target="blank">32°48'06.5"N 117°14'09.8"W</a></locDesc>
                        </MDBCol>
                    </MDBRow>
                    <MDBRow className="LocRow">
                        <MDBCol className="col-12 col-md-6 col-sm-6"><img class="LocSub img-fluid" src={process.env.PUBLIC_URL + "/images/home-location-1.jpg"} alt="front-office"
                        /></MDBCol>
                        <MDBCol className="col-12 col-md-6 col-sm-6"><img class="LocSub img-fluid" src={process.env.PUBLIC_URL + "/images/home-location-2.jpg"} alt="guest-table"
                        /></MDBCol>
                    </MDBRow>
                </LocContainer>
            </section>

            <div class='sideNav'>
                <ul className="dropDownLNY">
                    <li>
                        <a className="dropItem" href="#LNYoptometry">
                            <span className='hidden sideLNY'>LNY OPTOMETRY</span>
                        </a>
                        <Link activeClass="active" className="dot" spy to="LNYoptometry">
                        </Link>
                    </li>
                </ul>
                <ul className="dropDownWBG">
                    <li>
                        <a className="dropItem" href="#WhyBuyGlasses">
                            <span className="hidden sideWBG">WHY BUY GLASSES FROM YOUR OPTOMETRIST?</span>
                        </a>
                        <Link activeClass="active" className="dot" spy to="WhyBuyGlasses">
                        </Link>
                    </li>
                </ul>
                <ul className="dropDownLOC">
                    <li>
                        <a className="dropItem" href="#LocationContact">
                            <span className="hidden sideLOC">LOCATION & CONNTACT INFO</span>
                        </a>
                        <Link activeClass="active" className="dot" spy to="LocationContact">
                        </Link>
                    </li>
                </ul>
            </div>

        </div >
    );
};

export default Home;
