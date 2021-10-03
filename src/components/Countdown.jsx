import { Col, Container, Row } from "react-bootstrap"
import { Link } from "react-router-dom"

export default function Countdown() {
    return (
        <section className="countdown-area padding-top-120 padding-bottom-120">
            <Container>
                <div className="countdown-shapes">
                    <span className="cs-1 item-bounce"><img src="/images/shapes/24.png" alt="" /></span>
                    <span className="cs-3 item-bounce"><img src="/images/shapes/26.png" alt="" /></span>
                    <span className="cs-4 item-animateOne"><img src="/images/shapes/27.png" alt="" /></span>
                    <span className="cs-5"><img src="/images/shapes/18.png" alt="" /></span>
                    <span className="cs-6"><img src="/images/shapes/22.png" alt="" /></span>
                    <span className="cs-7"><img src="/images/shapes/30.png" alt="" /></span>
                </div>
                <Row className="align-items-center">
                    <Col lg={6} md={12} sm={12} className=" col-12 margin-bottom-20">
                        <div className="countdown-left">
                            <span className="cs-1"><img src="/images/shapes/25.png" alt="" /></span>
                            <span className="cs-2"><img src="/images/shapes/Leaf.png" alt="" /></span>
                            <span className="cs-3"><img src="/images/shapes/Leaf4.png" alt="" /></span>
                            <span className="cs-4"><img src="/images/img/3.png" alt="" /></span>
                            <span className="cs-5"><img src="/images/shapes/tomato.png" alt="" /></span>
                            <span className="cs-6"><img src="/images/shapes/onions.png" alt="" /></span>
                            <span className="cs-7"><img src="/images/shapes/Leaf2.png" alt="" /></span>
                            <span className="cs-8"><img src="/images/shapes/Leaf3.png" alt="" /></span>
                            <img src="/images/img/21.png" alt="" />
                        </div>
                    </Col>
                    <Col lg={5} md={12} sm={12} className="offset-lg-1 col-12">
                        <div className="countdown-right">
                            <div className="common-title-area padding-bottom-20">
                                <h3>coming soon</h3>
                                <h2>Spicy Chicken Pizza <span>Food </span> </h2>
                                <p>feel hunger! order your favourite food.</p>
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
                            <Link to="/#" className="btn">order now</Link>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}