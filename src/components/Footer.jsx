import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function Footer() {
    return (
        <>
            <footer className="padding-top-40 padding-bottom-40">
                <div className="fo-shapes">
                    <span className="fs-1"><img src="/images/gallery/26.png" alt="" /></span>
                    <span className="fs-2 item-bounce"><img src="/images/shapes/25.png" alt="" /></span>
                    <span className="fs-3 item-bounce"><img src="/images/shapes/26.png" alt="" /></span>
                    <span className="fs-4 item-bounce"><img src="/images/shapes/27.png" alt="" /></span>
                    <span className="fs-5 item-animateTwo"><img src="/images/shapes/3.png" alt="" /></span>
                    <span className="fs-6"><img src="/images/shapes/22.png" alt="" /></span>
                    <span className="fs-7"><img src="/images/shapes/30.png" alt="" /></span>
                </div>
                <div className="footer-top d-none d-md-block">
                    <Container>
                        <Row className="align-items-center justify-content-between padding-bottom-25">
                            <Col lg={3} md={3}>
                                <div className="f-logo">
                                    <Link to="/#"><img src="/images/logo/logo.png" alt="" /></Link>
                                </div>
                            </Col>
                                <Col lg={6} md={6}>
                                <div className="f-title">
                                    <h4>Feel Hunger! Order Your<span> Like Food.</span></h4>
                                </div>
                            </Col>
                            <Col lg={3} md={3}>
                                <Link to="shopping-cart.html" className="btn">order now</Link>
                            </Col>
                        </Row>
                        <hr />
                    </Container>
                </div>
                <div className="footer-bottom padding-top-22 padding-bottom-30">
                    <Container>
                        <Row>
                            <Col lg={3} md={6} className="col-12 margin-bottom-20">
                                <div className="widget">
                                    <h6>address</h6>
                                    <p>570 8th Ave,New York, NY 10018 United States</p>
                                    <Link to="#" className="f-link">view google map</Link>
                                </div>
                            </Col>
                            <Col lg={3} md={6} className="col-12 margin-bottom-20">
                                <div className="widget">
                                    <h6>book a table</h6>
                                    <p>Dogfood och Sliders foodtruck. Under Om oss kan ni läsa</p>
                                    <Link to="#" className="f-link">make a call</Link>
                                </div>
                            </Col>
                            <Col lg={3} md={6} className="col-12 margin-bottom-20">
                                <div className="widget">
                                    <h6>opening hours</h6>
                                    <p>
                                        <span>monday-friday: 8am - 4pm</span>
                                        <br />
                                        <span>saturday: 9am - 5pm</span>
                                    </p>
                                    <Link to="#" className="f-link">make a call</Link>
                                </div>
                            </Col>
                            <Col lg={3} md={6} className="col-12 margin-bottom-20">
                                <div className="widget">
                                    <h6>newsletter</h6>
                                    <div className="newsletter d-flex">
                                        <form action="#">
                                            <input type="email" placeholder="Enter your email" />
                                            <button type="submit"><i className="fas fa-paper-plane"></i></button>
                                        </form>
                                    </div>
                                    <Link to="#" className="f-link">subscribe now</Link>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
                <div className="copyright-area text-center">
                    <p>Copyright © 2021 <Link to="/">Khadyo</Link></p>
                </div>
            </footer>

            <button className="scrollup"><i className="fas fa-angle-up"></i></button>
        </>
    )
}