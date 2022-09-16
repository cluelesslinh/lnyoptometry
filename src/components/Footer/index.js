import React from 'react';
import { Link } from 'react-scroll';
import {
    MDBFooter,
    MDBContainer,
    MDBCol,
    MDBRow,
} from 'mdb-react-ui-kit';
import { FooterDesc } from './FooterElements';
import './footer.css';

const LNYfooter = () => {
    return (
        <MDBFooter className="footerLNY text-white">
            <div className="btnContainer">
                <Link className="topBtn" spy to="navbar"><span className="btnText">TOP</span></Link>
            </div>
            < MDBContainer fluid className="footerContainer">
                <MDBRow>
                    <MDBCol className="footerDescCol col-12 col-sm-5 col-md-6 col-lg-6">
                        <FooterDesc>Dr. Yosuke Yonemasu, OD</FooterDesc>
                        <FooterDesc>Dr. Kristine Pham, OD</FooterDesc>
                        <FooterDesc>1890 Garnet Ave. San Diego, CA 92109</FooterDesc>
                        <FooterDesc>LNYoptometry@gmail.com</FooterDesc>
                        <FooterDesc>Monday 10AM-6PM</FooterDesc>
                        <FooterDesc>Tuesday 10AM-6PM</FooterDesc>
                        <FooterDesc>Wednesday 10AM-6PM</FooterDesc>
                        <FooterDesc>Thursday 10AM-6PM</FooterDesc>
                        <FooterDesc>Friday 10AM-6PM</FooterDesc>
                        <FooterDesc>Saturday by Appointment</FooterDesc>
                    </MDBCol>

                    <MDBCol className="footerLinkCol col-12 col-sm-7 col-md-6 col-lg-6">
                        <ul>
                            <li>
                                <a href='https://www.dropbox.com/sh/7ipguo7wxve5ymg/AAAt9McEsGv_si_kotIDRmAva?dl=0'
                                    className="footerLink" target="blank">
                                    PATIENT PAPERWORK
                                </a>
                            </li>
                            <li>
                                <a href='https://www.nvisioncenters.com/'
                                    className="footerLink" target="blank">
                                    Nvision LASIK Center
                                </a>
                            </li>
                            <li>
                                <a href='https://www.eyeglassguide.com/'
                                    className="footerLink" target="blank">
                                    Eye Glasses Guide
                                </a>
                            </li>
                            <li>
                                <a href='https://www.allaboutvision.com/'
                                    className="footerLink" target="blank">
                                    All About Vision
                                </a>
                            </li>
                            <li>
                                <a href='https://www.allaboutvision.com/contacts/contact-lens-rx.htm'
                                    className="footerLink" target="blank">
                                    Contact Lens FAQs
                                </a>
                            </li>
                            <li>
                                <a href='https://www.youtube.com/watch?v=rKnHWfw4Azo'
                                    className="footerLink" target="blank">
                                    Contact Lens Insertion & Removal Instruction
                                </a>
                            </li>
                            <li>
                                <a href='https://www.dropbox.com/sh/7ipguo7wxve5ymg/AAAt9McEsGv_si_kotIDRmAva?dl=0'
                                    className="footerLink" target="blank">
                                    Privacy Practices
                                </a>
                            </li>
                            <li>
                                <FooterDesc>GPS Coordinates:&nbsp;
                                    <a href="https://www.google.com/maps/place/32%C2%B048'06.5%22N+117%C2%B014'09.8%22W/@32.8018039,-117.2535652,14"
                                        className="footerLink" target="blank">
                                        32°48'06.5"N 117°14'09.8"W
                                    </a>
                                </FooterDesc>
                            </li>
                            <li>
                                <FooterDesc>Established 2010</FooterDesc>
                            </li>
                        </ul>
                    </MDBCol>
                </MDBRow>
            </MDBContainer >
        </MDBFooter >
    );
}

export default LNYfooter;