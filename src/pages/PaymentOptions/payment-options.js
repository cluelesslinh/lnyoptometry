import React from 'react';
import $ from 'jquery';
import { Parallax, Background } from 'react-parallax';
import { MDBRow, MDBCol, } from 'mdb-react-ui-kit';
import "./paymentoptions.css";

$('img[data-enlargeable]').addClass('img-enlargeable').click(function () {
    var src = $(this).attr('src');
    var modal;

    function removeModal() {
        modal.remove();
        $('body').off('keyup.modal-close');
    }
    modal = $('<div>').css({
        background: 'RGBA(0,0,0,0) url(' + src + ') no-repeat center',
        position: 'fixed',
        width: '100%',
        height: '100%',
        zIndex: '10000',
        top: '0',
        left: '0',
    }).click(function () {
        removeModal();
    }).appendTo('body');

    $('body').on('keyup.modal-close', function (e) {
        if (e.key === 'Escape') {
            removeModal();
        }
    });
});

const PaymentOptions = () => {
    return (
        <div>

            <section className="poBG">
                <Parallax className="po-bg-box" strength={700}>
                    <Background>
                        <img className="po-bg-img" src={process.env.PUBLIC_URL + "/images/cellphoneLNY.jpg"} alt="cellphoneLNY" /></Background>
                    <potitlebox>
                        <potitle>PAYMENT OPTIONS</potitle>
                    </potitlebox>
                    <podescbox>
                        <payoptions>Debit and Credit Cards, HSA and FSA, VSP, Davis Vision, FEP Blue, MES Vision,
                            EyeMed, Blueview, Tricare, and Medicare.
                        </payoptions>
                    </podescbox>
                </Parallax>
            </section>

            <section className="poPage">
                <MDBRow className="poRow col-lg-9 col-md-12">

                    <MDBCol className="poDesc col-12">
                        We make every effort to ensure all fees are fair and reasonable. Charges are discussed
                        before services being rendered. Full payment is due at the time of service and before
                        ordering any ophthalmic materials.
                    </MDBCol>

                    <MDBCol className="poImgBox col-12">
                        <img data-toggle="modal" data-target="#poImg" className="po-img img-fluid clickEnlarge" src={process.env.PUBLIC_URL + "/images/pamphletLNY.jpg"} alt="pamphletLNY" />
                    </MDBCol>

                    <MDBCol className="poDesc col-12 col-lg-6 col-md-6">
                        <div className="podesc">
                            A vision insurance policy is not the same as medical health health insurance. Vision insurance
                            is a wellness benefit designed to provide routine eye care, prescription eye wear and other
                            vision related services at a reduced cost.
                        </div>

                        <div className="podesc">
                            LNY optometry accpets the following vision plans: <b>Eyemed, Blue View, MES Vision, Davis Vision,
                                FEP Blue, UHC Military, Tricare, Triwest, VSP (Vision Service Plan), Cigna Vision, and Metlife
                                Vision.</b> These third party plans typically subsidize the cost of professional services, prescriptive
                            eye wear, and contact lenses. Unlike medical insurance, vision plans DO NOT cover the cost of
                            professional services related to the treatment and management of eye diseases.
                        </div>
                    </MDBCol>

                    <MDBCol className="poDesc col-12 col-lg-6 col-md-6">
                        <div className="podesc">
                            Medicare Part B is the only medical plan that we currently accept.
                        </div>

                        <div className="podesc">
                            Self paying patients without vision insurance are always welcome. We accept Debit, Mastercard, Visa,
                            Discover, American Express, FSA, and HSA.
                        </div>

                        <div className="podesc">
                            Patient Paperwork: click <a href="https://www.dropbox.com/sh/7ipguo7wxve5ymg/AAAt9McEsGv_si_kotIDRmAva?dl=0"
                                className="poLink" target="blank"><b>HERE</b></a> to download. <br></br>
                            Call (858) 274-3777 to schedulue your eye exam today. <br></br>
                            LNY optometry <br></br>
                            1890 Garnet Ave. San Diego, CA 92109 <br></br>
                            <a href="https://www.google.com/maps/place/32%C2%B048'06.5%22N+117%C2%B014'09.8%22W/@32.8018039,-117.2535652,14"
                                className="poLink" target="blank"><b>32°48'06.5"N 117°14'09.8"W</b></a>
                        </div>
                    </MDBCol>

                </MDBRow>
            </section>

            <div className="modal fade" id="poImg" tabIndex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content">
                        <div className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </div>
                        <div className="modal-body">
                            <img className="modalImage img-fluid" src={process.env.PUBLIC_URL + "/images/pamphletLNY.jpg"} alt="pamphlet" />
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default PaymentOptions;
