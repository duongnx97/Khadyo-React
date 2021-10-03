import { Col, Container, Form, Row } from "react-bootstrap";
import Ctitle from '../components/Common-title';

export default function Bookingform() {
    return (
        <section className="form-area">
            <Container>
                <div className="form-box padding-top-110 padding-bottom-80">
                    <div className="form-shapes">
                        <span className="fs-1"><img src="/images/shapes/f-shape-1.png" alt="" /></span>
                        <span className="fs-2"><img src="/images/shapes/f-shape-2.png" alt="" /></span>
                        <span className="fs-3 item-animateOne"><img src="/images/shapes/f-shape-7.png" alt="" /></span>
                        <span className="fs-5"><img src="/images/shapes/4.png" alt="" /></span>
                        <span className="fs-6"><img src="/images/shapes/5.png" alt="" /></span>
                        <span className="fs-7 item-animateTwo"><img src="/images/shapes/7.png" alt="" /></span>
                        <span className="fs-8 item-animateOne"><img src="/images/shapes/9.png" alt="" /></span>
                    </div>
                    <Ctitle txtTop="Online Booking" txtBlue="Table" txtRed="Booking" />
                    <Row>
                        <Col lg={{ span: 10, offset: 1 }} md={12}>
                            <div className="form-wraper padding-bottom-40">
                                <Form action="#">
                                    <select className="form-item2">
                                        <option value="">4 people</option>
                                        <option value="">3 people</option>
                                        <option value="">2 people</option>
                                        <option value="">1 people</option>
                                    </select>
                                    <input className="form-item2" type="date" />
                                    <select className="form-item2">
                                        <option value="">07:24 pm</option>
                                        <option value="">07:24 pm</option>
                                        <option value="">07:24 pm</option>
                                        <option value="">07:24 pm</option>
                                    </select>
                                    <button type="submit">find table</button>
                                </Form>
                            </div>
                        </Col>
                    </Row>
                </div>
            </Container>
        </section>
    )
}