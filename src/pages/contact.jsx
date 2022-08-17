/* eslint-disable no-undef */
import React from 'react';
import $ from 'jquery';
import { Parallax, Background } from 'react-parallax';
import { MDBRow, MDBCol, } from 'mdb-react-ui-kit';
import MapWrapper from './MapWrapper';
import "./contact.css";

const Contact = () => {

    $(function () {
        function after_form_submitted(data) {
            if (data.result == 'success') {
                $('form#reused_form').hide();
                $('#success_message').show();
                $('#error_message').hide();
            }
            else {
                $('#error_message').append('<ul></ul>');

                jQuery.each(data.errors, function (key, val) {
                    $('#error_message ul').append('<li>' + key + ':' + val + '</li>');
                });
                $('#success_message').hide();
                $('#error_message').show();

                //reverse the response on the button
                $('button[type="button"]', $form).each(function () {
                    $btn = $(this);
                    label = $btn.prop('orig_label');
                    if (label) {
                        $btn.prop('type', 'submit');
                        $btn.text(label);
                        $btn.prop('orig_label', '');
                    }
                });

            }//else
        }

        $('#reused_form').submit(function (e) {
            e.preventDefault();

            $form = $(this);
            //show some response on the button
            $('button[type="submit"]', $form).each(function () {
                $btn = $(this);
                $btn.prop('type', 'button');
                $btn.prop('orig_label', $btn.text());
                $btn.text('Sending ...');
            });


            $.ajax({
                type: "POST",
                url: 'handler.php',
                data: $form.serialize(),
                success: after_form_submitted,
                dataType: 'json'
            });

        });
    });

    return (
        <div>

            <section className="contactBG">
                <Parallax className="contact-bg-box" strength={750}>
                    <Background>
                        <img className="contact-bg-img" src={process.env.PUBLIC_URL + "/images/office-view.jpg"} alt="office-view" /></Background>
                    <contacttitlebox>
                        <contacttitle>LOCATION & CONTACT INFO</contacttitle>
                    </contacttitlebox>
                    <contactdescbox>
                        <location>Eye Exams, Contact Lenses, and Glasses in Pacific Beach, San Diego</location>
                        <location>1890 Garnet Ave. San Diego, CA 92109</location>
                        <location>(858) 274-3777</location>
                        <location>Office hours: By appointment only due to COVID-19</location>
                    </contactdescbox>
                </Parallax>
            </section>

            <section className="contactPage">
                <MDBRow className="contactRow">

                    <MDBCol className="col-12">
                        <MapWrapper />
                        <div id="map" className="googleMap">
                        </div>
                    </MDBCol>

                    <MDBCol className="pbTitle col-12">PACIFIC BEACH</MDBCol>

                    <MDBCol>
                        <div className="contdesc col-12">
                            LNY optometry is conveniently located in the Pacific Beach Business District, Pacific Plaza II, at
                            the intersection of Garnet Ave and Lamont Street, across from the Broken Yolk Restaurant, and just
                            behind Bruegger's Bagels.<br></br>
                            GPS Coordinates: <a href="https://www.google.com/maps/place/32%C2%B048'06.5%22N+117%C2%B014'09.8%22W/@32.8018039,-117.2535652,14"
                                className="locLink" target="blank"><b>32°48'06.5"N 117°14'09.8"W</b></a><br></br>
                            1890 Garnet Ave. San Diego, CA 92109<br></br>
                            (858) 274-3777
                        </div>

                        <div className="contdesc col-12">
                            Here at LNY Optometry, we care about you, and ask that you please read this important update about
                            the latest mask requirements. Although face mask requirements have changed in San Diego County as of
                            June 15, 2021, guidance provided by the California Department of Public Health (CDPH) states that
                            <b> face masks are still required in health care settings.</b> To protect our patients, LNY Optometry
                            requires the use of face coverings in our facility. Masks must be worn at all times in the office —
                            even if you've been vaccinated. Please arrive wearing your mask that doesn't have a valve, covering
                            your nose and mouth while in the office, as they are still required in all health care settings. If
                            you don't have a mask that fits properly, we will provide one. At arrival, please ring the doorbell
                            so we can unlock the door for you.
                        </div>

                        <div className="contdesc col-12">
                            We will be scheduling patients at least one hour apart to avoid interaction with others during your
                            exam and frame selections. Only the patient is allowed in the office. Only one guardian is allowed in
                            the office if the patient is a minor (17 years and younger). All visits to the office including exams,
                            frame selections, and pick ups for purchases must be pre-arranged with an appointment to better
                            accomodate social distancing and sanitation measures. We use hospital grade disinfectant cleaner to
                            sanitize all surfaces and instruments after every patient, and also disinfect all frames following each
                            patient usage. Patients are asked to NOT return frames to displays.
                        </div>

                        <div className="contdesc col-12">
                            If you have dry cough, difficulty breathing, chills, fever, are COVID-19 positive, or have been exposed
                            to a COVID-19 positive person in the last month, we recommend that you wait to schedule your appointment
                            for at least 4 weeks. $50 cancellation and no show fee will apply if notification is given less than 48
                            hours in advance. The cancellation and now show fees are the sole responsibilty of the patient (or guardian)
                            and must be paid in full before the patient's next appointment. As always, Thank you! We appreciate your
                            business and the trust you place in us to care for your vision health.
                        </div>

                        <div className="contdesc col-12">
                            Click <a href="https://www.dropbox.com/sh/7ipguo7wxve5ymg/AAAt9McEsGv_si_kotIDRmAva?dl=0"
                                className="locLink" target="blank"><b>HERE</b></a> to download patient paperwork. $50 cancellation and no
                            show fee will apply if notification is given less than 48 hours in advance. The cancellation and no show
                            fees are the sole responsibility of the patient and must be paid in full before the patient's next appointment.
                        </div>
                    </MDBCol>

                    <MDBCol className="col-12"><hr></hr></MDBCol>

                    <MDBCol className="contInq col-12 col-lg-4 col-md-4 col-sm-4">
                        <div className="contInqTitle">INQUIRIES</div>
                        <div classname="contInqEmail">LNYoptometry@gmail.com</div>
                        <img className="contInqImg" src={process.env.PUBLIC_URL + "/images/desk-view.jpg"} alt="desk-view" />
                    </MDBCol>
                    <MDBCol className="emailForm col-12 col-lg-8 col-md-8 col-sm-8">
                        <div class="container form-top">
                            <div class="row">
                                <div class="col-md-6 col-md-offset-3 col-sm-12 col-xs-12">
                                    <div class="panel panel-danger">
                                        <div class="panel-body">
                                            <form id="reused_form">
                                                <div class="form-group">
                                                    <label><i class="fa fa-user" aria-hidden="true"></i> Name</label>
                                                    <input type="text" name="name" class="form-control" placeholder="Enter Name" />
                                                </div>
                                                <div class="form-group">
                                                    <label><i class="fa fa-envelope" aria-hidden="true"></i> Email</label>
                                                    <input type="email" name="email" class="form-control" placeholder="Enter Email" />
                                                </div>
                                                <div class="form-group">
                                                    <label><i class="fa fa-comment" aria-hidden="true"></i> Message</label>
                                                    <textarea rows="3" name="message" class="form-control" placeholder="Type Your Message"></textarea>
                                                </div>
                                                <div class="form-group">
                                                    <button class="btn btn-raised btn-block btn-danger">Post &rarr;</button>
                                                </div>
                                            </form>
                                            <div id="error_message">
                                                <h4>
                                                    Error
                                                </h4>
                                                Sorry there was an error sending your form.
                                            </div>
                                            <div id="success_message">
                                                <h2>Success! Your Message was Sent Successfully.</h2>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </MDBCol>

                </MDBRow>
            </section>
        </div >
    );
};

export default Contact;
