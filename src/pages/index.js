import React from 'react';
import {
    HomeTop, TopTitleBox, TopTitle, TopDescriptionBox, TopDescription, MissionStatement,
    MSmain, MSdescriptionBOX, MStitle, MSdescription, MSsub, Row
} from "./indexstyle";

const Home = () => {
    return (
        <div>
            <HomeTop>
                <TopTitleBox>
                    <TopTitle>LNY OPTOMETRY</TopTitle>
                </TopTitleBox>
                <TopDescriptionBox>
                    <TopDescription>Eye Exams, Contact Lenses, and Glasses in Pacific Beach, San Diego</TopDescription>
                    <TopDescription>1890 Garnet Ave. San Diego, CA 92109</TopDescription>
                    <TopDescription>(858) 274-3777</TopDescription>
                    <TopDescription>Office hours: by appointment only due to COVID-19</TopDescription>
                </TopDescriptionBox>
            </HomeTop>
            <MissionStatement>
                <Row>
                    <MSmain><img class="img-fluid"
                        src={process.env.PUBLIC_URL + "/images/home-ms-main.jpg"} alt="Glasses-Showcase"
                    /></MSmain>
                    <MSdescriptionBOX>
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
                    </MSdescriptionBOX>
                </Row>
                <Row>
                    <MSsub><img src={process.env.PUBLIC_URL + "/images/home-ms-1.jpg"} alt="LNYsign"
                    /></MSsub>
                    <MSsub><img src={process.env.PUBLIC_URL + "/images/home-ms-2.jpg"} alt="oculars"
                    /></MSsub>
                    <MSsub><img src={process.env.PUBLIC_URL + "/images/home-ms-3.jpg"} alt="retina"
                    /></MSsub>
                </Row>
            </MissionStatement>
        </div >
    );
};

export default Home;
