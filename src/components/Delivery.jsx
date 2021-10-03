import { Col, Container, Row } from "react-bootstrap"
import { Link } from "react-router-dom"

export default function Delivery() {
    return (
        <section className="delivery-area padding-top-115 padding-bottom-90">
            <div className="del-shapes">
                <span className="ds-1 item-bounce"><img src="/images/shapes/35.png" alt="" /></span>
                <span className="ds-2"><img src="/images/shapes/34.png" alt="" /></span>
                <span className="ds-3 item-bounce"><img src="/images/shapes/17.png" alt="" /></span>
                <span className="ds-4 item-animateOne"><img src="/images/shapes/6.png" alt="" /></span>
            </div>
            <Container>
                <Row>
                    <Col lg={6} md={12} className="align-self-lg-center margin-bottom-20 wow fadeInLeft">
                        <div className="delivery-left">
                            <img src="/images/bg/delivery-img.png" alt="" />
                        </div>
                    </Col>
                    <Col lg={6} md={12} className="wow fadeInRight">
                        <div className="delivery-right">
                            <div className="common-title-area padding-bottom-40">
                                <h3>delivery</h3>
                                <h2>A Moments of Delivered <span>On Right Time & Place</span> </h2>
                                <p>Food Khan is a restaurant, bar and coffee roastery located on a busy corner site in Farringdon's Exmouth Market. With glazed frontage on two sides of the building, overlooking the market and a bustling London inteon.</p>
                                <div className="order-box d-flex align-items-end">
                                    <span className="order-img"><img src="/images/icons/1.png" alt="" /></span>
                                    <div className="order-content">
                                        <p>delivery order num.</p> <span>123-59794069</span>
                                    </div>
                                    <Link to="#" className="btn">order now</Link>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}