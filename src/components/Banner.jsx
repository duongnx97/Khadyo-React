import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Banner() {
    return (
        <section className="banner-area padding-top-100 padding-bottom-150">
            <div className="banner-shapes">
                <span className="b-shape-1 item-animateOne"><img src="/images/img/5.png" alt="" /></span>
                <span className="b-shape-2 item-animateTwo"><img src="/images/img/6.png" alt="" /></span>
                <span className="b-shape-3 item-bounce"><img src="/images/img/7.png" alt="" /></span>
                <span className="b-shape-4"><img src="/images/img/9.png" alt="" /></span>
                <span className="b-shape-5"><img src="/images/shapes/18.png" alt="" /></span>
            </div>

            <Container className="padding-top-145">
                <Row className="justify-content-center align-items-center">
                    <Col xl={6} lg={6} md={12}>
                        <div className="banner-content">
                            <h1>enjoy our delicious <span>food</span></h1>
                            <div className="buyone-shape">
                                <div className="banner-tag">
                                    <h5>buy one pizza. get one</h5>
                                </div>
                                <span className="banner-badge">free</span>
                            </div>
                            <div className="price">price : <span>$10.50</span> </div>
                            <div className="order-box">
                                <span className="order-img"><img src="/images/icons/1.png" alt="" /></span>
                                <div className="order-content">
                                    <p>delivery order num.</p> <span>123-59794069</span>
                                </div>
                                <Link to="/#" className="btn">try it now</Link>
                            </div>
                        </div>
                    </Col>
                    <Col xl={6} lg={6} className="d-none d-lg-block">
                        <div className="banner-img">
                            <div className="pizza-shapes">
                                <span className="p-shape-1"><img src="/images/img/2.png" alt="" /></span>
                                <span className="p-shape-2"><img src="/images/img/3.png" alt="" /></span>
                                <span className="p-shape-3"><img src="/images/img/4.png" alt="" /></span>
                                <span className="p-shape-4"><img src="/images/img/8.png" alt="" /></span>
                            </div>
                            <img src="/images/img/1.png" alt="" />
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}