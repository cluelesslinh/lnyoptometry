import React from 'react';
import { Parallax, Background } from 'react-parallax';
import { MDBRow, MDBCol, } from 'mdb-react-ui-kit';
import "./ourdoctors.css";

const OurDoctors = () => {
    return (
        <div>

            <section className="odBG">
                <Parallax className="od-bg-box" strength={750}>
                    <Background>
                        <img className="od-bg-img" src={process.env.PUBLIC_URL + "/images/prada-display.jpg"} alt="prada-display" /></Background>
                    <odtitlebox>
                        <odtitle>OUR DOCTORS</odtitle>
                    </odtitlebox>
                    <oddescbox>
                        <oddesc>
                            Eye Exams, Contact Lenses, and Glasses in Pacific Beach, San Diego.
                        </oddesc>
                    </oddescbox>
                </Parallax>
            </section>

            <section className="odPage">
                <MDBRow className="odRow col-xl-7 col-lg-12">
                    <MDBCol className="oddesc col-12">
                        MISSION STATEMENT:
                    </MDBCol>
                    <MDBCol className="oddesc col-12">
                        Our mission is verify simple: provide quality eye care with a personal touch and excellent
                        customer service that patients will want to return year after year.
                    </MDBCol>
                    <MDBCol className="odName col-12">DR. YOSUKE YONESMASU, OD</MDBCol>
                    <MDBCol className="oddesc col-12">
                        Dr. Yonemasu attended University of California, San Diego and graduated with a Bachelor of
                        Science Degree in Bio Engineering in May of 2001. In 2005, he earned his Doctorate from the
                        University of California, Berkeley School of Optometry. Dr. Yonemasu's extensive training
                        encompassed all aspects of optometric care and included a managing doctor position at Eyexam
                        of California, Lenscrafters. His versatility in multiple languages also allows him to conduct
                        exams in Japanese and Spanish. When Dr. Yonemasu is not seeing patients, he finds harmony and
                        relaxation playing his guitars.
                    </MDBCol>
                    <MDBCol className="odImg col-12">
                        <img src={process.env.PUBLIC_URL + "/images/Yosuke-Yonemasu.jpg"} alt="yosuke-yonemasu"
                            className="yosukeImg img-fluid" />
                    </MDBCol>
                    <MDBCol className="odFooter col-12">
                        WWW.LNYOPTOMETRY.NET  |  1890 GARNET AVE, SAN DIEGO, CA, 92109 | (858) 274-3777
                    </MDBCol>
                </MDBRow>
            </section>

        </div>
    );
};

export default OurDoctors;
