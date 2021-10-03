import { Container } from "react-bootstrap"
import Headermenu from "../components/Headermenu"
import Breadcrumb from '../components/Breadcrumb'
import Footer from '../components/Footer'
import { Link } from "react-router-dom"

export default function Page404() {
    return <>
        {/* <Preloader /> */}
        <Headermenu />
        <Breadcrumb pageName="404" />

        <div className="error-area padding-top-120 padding-bottom-120">
            <div className="error-shapes">
                <span className="e-s-1"><img src="/images/shapes/16.png" alt="" /></span>
                <span className="e-s-2"><img src="/images/img/32.png" alt="" /></span>
            </div>
            <Container className="d-flex align-items-center justify-content-center">
                <div className="error-wrapper text-center">
                    <img className="item-bounce" src="/images/img/404.png" alt="" />
                    <Link to="/" className="btn margin-top-40">go to home</Link>
                </div>
            </Container>
        </div>

        <Footer />
    </>
}