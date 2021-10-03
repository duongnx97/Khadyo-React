import { Container, Row } from "react-bootstrap"
import { Link } from "react-router-dom"

export default function Breadcrumb({ pageName }) {
    return (
        <div className="banner-area breadcrumb-area padding-top-120 padding-bottom-90">
            <div className="bread-shapes">
                <span className="b-shape-1 item-bounce"><img src="/images/img/5.png" alt="" /></span>
                <span className="b-shape-2"><img src="/images/img/6.png" alt="" /></span>
                <span className="b-shape-3"><img src="/images/img/7.png" alt="" /></span>
                <span className="b-shape-4"><img src="/images/img/9.png" alt="" /></span>
                <span className="b-shape-5"><img src="/images/shapes/18.png" alt="" /></span>
                <span className="b-shape-6 item-animateOne"><img src="/images/img/7.png" alt="" /></span>
            </div>
            <Container className="padding-top-120">
                <Row className="justify-content-center">
                    <nav aria-label="breadcrumb">
                        <h2 className="page-title">{pageName}</h2>
                        <ol className="breadcrumb text-center">
                            <li className="breadcrumb-item">
                                <Link to="/">Home </Link>
                            </li>
                            <li className="breadcrumb-item active" aria-current="page">{pageName}</li>
                        </ol>
                    </nav>
                </Row>
            </Container>
        </div>
    )
}