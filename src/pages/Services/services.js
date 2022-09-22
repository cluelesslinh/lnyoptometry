import React from "react";
import { Parallax, Background } from 'react-parallax';
import { MDBRow, MDBCol, } from 'mdb-react-ui-kit';
import "./services.css";

const Services = () => {
    return (
        <div>

            <section className="servicesBG">
                <Parallax className="services-bg-box" strength={600}>
                    <Background>
                        <img className="services-bg-img" src={process.env.PUBLIC_URL + "/images/auto-refractor.jpg"} alt="auto-refractor" /></Background>
                    <div className="servicesTitleBox">
                        <div className="servicesTitle">SERVICES</div>
                    </div>
                    <div className="servicesDescBox">
                        <div className="serviceDesc">Eye Exams, Contact Lenses, and Glasses in Pacific Beach, San Diego</div>
                    </div>
                </Parallax>
            </section>

            <section className="servicesPage">
                <MDBRow className="servicesRow">
                    <MDBCol className="servicesDesc col-12">
                        EARLY DIAGNOSIS OF EYE DISEASE IS CRITICAL. EYE DISEASE RARELY HAS ANY SYMPTOMS IN THE EARLY
                        STAGES. GLAUCOMA, CATARACTS, MACULAR DEGENERATION AND DIABETIC RETINOPATHY ARE ONLY SOME OF
                        THE REASONS AN ANNUAL EYE EXAMINATION IS SO IMPORTANT.
                    </MDBCol>

                    <MDBCol className="servicesDesc col-12">
                        COMPREHENSIVE EYE EXAMINATIONS FOR ADULTS AND CHILDREN.
                    </MDBCol>

                    <MDBCol className="servicesDesc col-12">
                        CONTACT LENS FITTING AND FOLLOW UP CARE.
                    </MDBCol>

                    <MDBCol className="servicesDesc col-12">
                        TREATMENT OF CERTAIN EYE DISEASES AND CONDITIONS.
                    </MDBCol>

                    <MDBCol className="servicesDesc col-12">
                        RED, PINK, OR SORE EYES.
                    </MDBCol>

                    <MDBCol className="servicesDesc col-12">
                        VISUAL FIELD TESTING.
                    </MDBCol>

                    <MDBCol className="servicesDesc col-12">
                        LASIK CONSULTATION AND CO-MANAGEMENT.
                    </MDBCol>

                    <MDBCol className="servicesDesc col-12">
                        REFRACTIVE SURGERY CO-MANAGEMENT.
                    </MDBCol>

                    <MDBCol className="servicesDesc col-12">
                        CONTACT LENSES (SOFT LENSES AND RIGID GAS PERMEABLE LENSES) FOR ASTIGMATISM, MULTIFOCALS,
                        AS WELL AS REGUALR COSMETIC FITS.
                    </MDBCol>

                    <MDBCol className="servicesDesc col-12">
                        ADVANCED EYE EXAM - USING DIGITAL RETINAL IMAGING TECHNOLOGY TO MONITOR CHANGES INSIDE YOUR
                        EYES. DIGITAL COPIES CAN BE EMAILED TO YOU AT NO ADDITIONAL COST.
                    </MDBCol>

                    <MDBCol className="servicesDesc col-12">
                        WIDE SELECTION OF DESIGNER FRAMES TO FIT EVERY STYLE AND BUDGET.
                    </MDBCol>

                    <MDBCol className="businessCardSite col-12">
                        WWW.LNYOPTOMETRY.NET
                    </MDBCol>
                    <MDBCol className="businessCardAddress col-12">
                        1890 GARNET AVE, SAN DIEGO, CA 92109
                    </MDBCol>
                    <MDBCol className="businessCardNumber col-12">
                        (858) 274-3777
                    </MDBCol>
                </MDBRow>

                <MDBRow className="imageRow">
                    <MDBCol className="col-6"><img className="servicesImg img-fluid"
                        src={process.env.PUBLIC_URL + "/images/inside-office.jpg"} alt="inside-office"
                    /></MDBCol>
                    <MDBCol className="col-6"><img className="servicesImg img-fluid"
                        src={process.env.PUBLIC_URL + "/images/retina.jpg"} alt="retina"
                    /></MDBCol>
                </MDBRow>
            </section>

        </div>
    );
};

export default Services;
