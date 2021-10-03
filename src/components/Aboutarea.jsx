import { Col, Container, Row } from "react-bootstrap";

export default function Aboutarea() {
    return (
        <section className="about-area padding-top-120">
            <Container>
                <Row>
                    <Col lg={5} md={12} className="wow fadeInleft">
                        <div className="about-left">
                            <div className="about-l-shapes">
                                <span className="als-1"><img src="/images/shapes/2.png" alt="" /></span>
                            </div>
                            <Row>
                                <Col lg={4} md={4} sm={4} className="col-4 d-flex align-items-end justify-content-end margin-bottom-20">
                                    <div className="about-gallery-1">
                                        <img src="/images/gallery/1.jpg" alt="" />
                                    </div>
                                </Col>
                                <Col lg={8} md={8} sm={8} className="col-8 margin-bottom-20">
                                    <div className="about-gallery-2">
                                        <a className="popup-youtube" href="https://www.youtube.com/watch?v=9xwazD5SyVg">
                                            <span className="play-btn item-ripple">
                                                <i className="fas fa-play"></i>
                                            </span>
                                            <img src="/images/gallery/2.jpg" alt="" />
                                        </a>
                                    </div>
                                </Col>
                                <Col lg={6} md={6} sm={6} className="col-6">
                                    <div className="about-gallery-3">
                                        <img src="/images/gallery/3.jpg" alt="" />
                                    </div>
                                </Col>
                                <Col lg={5} md={5} sm={5} className="col-5 d-flex align-items-start">
                                    <div className="about-gallery-4 text-center">
                                        <img className="mp" src="/images/icons/3.png" alt="" />
                                        <div className="items counter">2000</div>
                                        <p>food item</p>
                                        <span className="g-s-4"><img src="/images/shapes/10.png" alt="" /></span>
                                        <span className="g-s-5"><img src="/images/shapes/14.png" alt="" /></span>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    </Col>
                    <Col lg={6} md={12} className="offset-lg-1 wow fadeInRight">
                        <div className="about-right">
                            <div className="about-r-shapes">
                                <span className="as-1 item-bounce"><img src="/images/shapes/1.png" alt="" /></span>
                            </div>
                            <h2>Fresh taste at a great price, only for
                                <span> hungry people.</span>
                            </h2>
                            <p>Food is a restaurant, bar and coffee roastery located on a busy corner site in Farringdon's Exmouth Market. With glazed.</p>
                            <div className="garlic-burger-card">
                                <div className="garlic-burger-img">
                                    <img className="price-badge" src="/images/icons/4.png" alt="" />
                                    <img src="/images/icons/2.png" alt="" />
                                </div>
                                <div className="garlic-burger-content">
                                    <h5>garlic burger parties</h5>
                                    <p>It is a long established fact that a reader BBQ food Chicken.</p>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}