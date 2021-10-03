import { Container, Row, Col } from "react-bootstrap"
import Headermenu from "../components/Headermenu"
import Breadcrumb from '../components/Breadcrumb'
import Footer from '../components/Footer'
import InfoS from '../components/Info-single'

export default function Contact() {
    return <>
        <Headermenu />
        <Breadcrumb pageName="Contact" />

        {/* Contact form */}
        <section className="about-area about-area2 writeto-us padding-top-120 padding-bottom-60">
            <div className="form-shapes">
                <span className="fs1 item-animateOne"><img src="/images/shapes/1.png" alt="" /></span>
                <span className="fs2 item-bounce"><img src="/images/shapes/12.png" alt="" /></span>
                <span className="fs3"><img src="/images/shapes/13.png" alt="" /></span>
                <span className="fs4 item-bounce"><img src="/images/shapes/26.png" alt="" /></span>
            </div>
            <Container>
                <Row>
                    <Col lg={6} md={12} className="wow fadeInUp">
                        <div className="about-left">
                            <div className="about-l-shapes">
                                <span className="als-1"><img src="/images/shapes/2.png" alt="" /></span>
                                <span className="als-2 item-animateOne"><img src="/images/shapes/26.png" alt="" /></span>
                            </div>
                            <Row>
                                <Col lg={4} md={4} sm={4} className="col-4 d-flex align-items-end justify-content-end margin-bottom-20">
                                    <div className="about-gallery-1">
                                        <img src="/images/gallery/1.jpg" alt="" />
                                    </div>
                                </Col>
                                <Col lg={8} md={8} sm={8} className="col-8 margin-bottom-20">
                                    <div className="about-gallery-2">
                                        <img src="/images/gallery/2.jpg" alt="" />
                                    </div>
                                </Col>
                                <Col lg={6} md={6} sm={6} className="col-6">
                                    <div className="about-gallery-3">
                                        <img src="/images/gallery/3.jpg" alt="" />
                                    </div>
                                </Col>
                                <Col lg={5} md={5} sm={5} className="col-5 d-flex align-items-stretch">
                                    <div className="about-gallery-5 text-center">
                                        <img src="/images/gallery/4.jpg" alt="" />
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    </Col>
                    <Col lg={6} md={12} className="wow fadeInUp">
                        <div className="contact-form-area">
                            <h3>write <span>to us</span></h3>
                            <form action="#">
                                <input type="text" placeholder="your name:" />
                                <input type="email" placeholder="email" />
                                <input type="url" placeholder="website" />
                                <textarea placeholder="write your text"></textarea>
                                <button type="submit" className="btn">send a message</button>
                            </form>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>

        {/* Info area */}
        <div className="info-area padding-bottom-120">
            <div className="info-shapes">
                <span className="info-s-1"><img src="/images/shapes/7.png" alt="" /></span>
                <span className="info-s-2"><img src="/images/img/32.png" alt="" /></span>
            </div>
            <Container>
                <Row>
                    <InfoS infoImg="c1.png" infoTitle="Phone Us 24/7" infoNote="123-5879406" />
                    <InfoS infoImg="c2.png" infoTitle="Get Derection" infoNote="Sector: 7, Road: 27, Hose: 18, Uttara, Dhaka, 1230 Dhaka" />
                    <InfoS infoImg="c2.png" infoTitle="Opening Hours" infoNote="Everyday 11.00PM - 11.00AM" />
                </Row>
            </Container>
        </div> 

        {/* Map area */}
        {/* <div className="map-area padding-bottom-120 wow fadeInUp">
            <div className="map-shapes">
                <div className="ms-1"><img src="/images/shapes/16.png" alt="" /></div>
            </div>
            <div className="container">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3648.4148247742232!2d90.39747015024156!3d23.874904684452307!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c43bc25ec0ad%3A0x92541def35db7c01!2sSoftTech-IT%20Institute!5e0!3m2!1sen!2sbd!4v1611143717399!5m2!1sen!2sbd"
                    width="1190" height="400" style="border:0;" allowfullscreen="" aria-hidden="false"
                    tabindex="0"></iframe>
            </div>
        </div> */}

        <Footer />
    </>
}