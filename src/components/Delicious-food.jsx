import { Col, Container, Row } from "react-bootstrap"
import { Link } from "react-router-dom"

export default function DeliciousFood() {
    return (
        <section className="delicious-area padding-top-120 padding-bottom-120">
            <Container>
                <div className="deli-shapes">
                    <span className="ds-1"><img src="/images/shapes/transparent1.png" alt="" /></span>
                    <span className="ds-2 item-animateOne"><img src="/images/shapes/27.png" alt="" /></span>
                </div>
                <Row className="align-items-center">
                    <Col lg={6} className=" wow fadeInLeft">
                        <div className="delicious-left">
                            <h2>Fresh taste at a great price, only for <span>Delicious Food lover.</span> </h2>
                            <Link to="https://www.youtube.com/watch?v=9xwazD5SyVg" className="play-btn1 item-ripple popup-youtube" >
                                <i className="fas fa-play"></i>
                            </Link>
                            <Link to="https://www.youtube.com/watch?v=9xwazD5SyVg" className=" popup-youtube intro"> intro video</Link>
                        </div>
                    </Col>
                    <Col lg={6} className="d-none d-lg-block wow fadeInRight">
                        <div className="delicious-right">
                            <img src="/images/gallery/1.png" alt="" />
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}