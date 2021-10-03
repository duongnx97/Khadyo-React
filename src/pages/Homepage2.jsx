import { Col, Container, Row } from "react-bootstrap"
import { Link } from "react-router-dom"
import Breadcrumb from "../components/Breadcrumb"
import Footer from "../components/Footer"
import Headermenu from "../components/Headermenu"

export default function Homepage2() {
    return <>
        <Headermenu />
        <Breadcrumb pageName="Homepage2" />

        <section className="comingsoon-area countdown-area padding-top-120 padding-bottom-120">
            <Container>
                <div className="countdown-shapes">
                    <span className="cs-1 item-bounce"><img src="/images/shapes/24.png" alt="" /></span>
                    <span className="cs-3 item-bounce"><img src="/images/shapes/26.png" alt="" /></span>
                    <span className="cs-4 item-animateOne"><img src="/images/shapes/27.png" alt="" /></span>
                    <span className="cs-5"><img src="/images/shapes/30.png" alt="" /></span>
                    <span className="cs-6"><img src="/images/img/9.png" alt="" /></span>
                    <span className="cs-7"><img src="/images/shapes/30.png" alt="" /></span>
                </div>
                <Row className="align-items-center">
                    <Col lg={6} md={12} sm={12} className="col-12 offset-lg-3">
                        <div className="countdown-right">
                            <div className="common-title-area padding-bottom-20">
                                <h3>coming soon</h3>
                                <h2>Our Design Blog is <span>Launching Soon </span> </h2>
                                <p>Sign up for our latest blog posts and to be the first to know when we go live! </p>
                            </div>
                            <div className="count-box countdown">
                                <div>
                                    <span className="days">00</span>
                                    <p className="days_ref">days</p>
                                </div>
                                <span className="seperator">:</span>
                                <div>
                                    <span className="hours">00</span>
                                    <p className="hours_ref">hour</p>
                                </div>
                                <span className="seperator">:</span>
                                <div>
                                    <span className="minutes">00</span>
                                    <p className="minutes_ref">minutes</p>
                                </div>
                                <span className="seperator">:</span>
                                <div>
                                    <span className="seconds">00</span>
                                    <p className="seconds_ref">seconds</p>
                                </div>
                            </div>
                            <Link to="index.html" className="btn"><i className="fa fa-arrow-left" aria-hidden="true"></i> Go Home</Link>
                            <Link to="login.html" className="btn">Sign up <i className="fa fa-arrow-right" aria-hidden="true"></i></Link>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>

        <Footer />
    </>
}