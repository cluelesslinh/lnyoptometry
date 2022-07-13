import React from 'react';
import { Parallax, Background } from 'react-parallax';
import { MDBRow, MDBCol } from 'mdb-react-ui-kit';
import "./indexstyle.css";
import {
    TopTitleBox, TopTitle, TopDescriptionBox, TopDescription, MSContainer, MStitle, MSdescription,
    MidTitleBox, MidTitle, MidDescBox, MidDesc, WbgBox
} from "./indexstyle";

const Home = () => {
    return (
        <div>
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

        </div >
    );
};

export default Home;
