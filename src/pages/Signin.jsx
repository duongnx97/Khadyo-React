import { Col, Container, Row, Form } from "react-bootstrap"
import Headermenu from "../components/Headermenu"
import Breadcrumb from '../components/Breadcrumb'
import Footer from '../components/Footer'
import { Link, useHistory } from "react-router-dom"
import swal from 'sweetalert'
import { useState } from "react"

export default function Signin() {

    const history = useHistory()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const signIn = (event) => {
        event.preventDefault()
        const localEmail = localStorage.getItem('email')
        const localPassword = localStorage.getItem('pws')

        if (email === '' || password === '') {
            swal("Please enter all the required information", "Try again!", "error");
        } else if (email === localEmail && password === localPassword) {
            swal("Login succsess!", {
                icon: "success",
                buttons: false,
                timer: 1000,
            });
            history.push('/food')
        } else {
            swal("Sign in Error!", "Password or email invalid", "error")
        }
    }

    return <>
        <Headermenu />
        <Breadcrumb pageName="Signin" />

        <section className="login-area signup-area about-area about-area2 writeto-us padding-top-120 padding-bottom-60">
            <div className="form-shapes">
                <span className="fs1 item-animateOne"><img src="/images/shapes/1.png" alt="" /></span>
                <span className="fs2 item-bounce"><img src="/images/shapes/12.png" alt="" /></span>
                <span className="fs3"><img src="/images/shapes/13.png" alt="" /></span>
                <span className="fs4 item-bounce"><img src="/images/shapes/26.png" alt="" /></span>
            </div>
            <Container>
                <Row>
                    <Col lg={6} md={12} className="wow fadeInUp">
                        <div className="about-left">
                            <div className="about-l-shapes">
                                <span className="als-1"><img src="/images/shapes/2.png" alt="" /></span>
                                <span className="als-2 item-animateOne"><img src="/images/shapes/26.png" alt="" /></span>
                            </div>
                            <Row>
                                <Col lg={4} md={4} sm={4} className="col-4 d-flex align-items-end justify-content-end margin-bottom-20">
                                    <div className="about-gallery-1">
                                        <img src="/images/gallery/1.jpg" alt="" />
                                    </div>
                                </Col>
                                <Col lg={8} md={8} sm={8} className="col-8 margin-bottom-20">
                                    <div className="about-gallery-2">
                                        <img src="/images/gallery/2.jpg" alt="" />
                                    </div>
                                </Col>
                                <Col lg={6} md={6} sm={6} className="col-6">
                                    <div className="about-gallery-3">
                                        <img src="/images/gallery/3.jpg" alt="" />
                                    </div>
                                </Col>
                                <Col lg={5} md={5} sm={5} className="col-5 d-flex align-items-stretch">
                                    <div className="about-gallery-5 text-center">
                                        <img src="/images/gallery/4.jpg" alt="" />
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    </Col>
                    <Col lg={6} md={12} className="wow fadeInUp">
                        <div className="contact-form-area login-form-area signup-form-area">
                            <h3>login to <span>your account</span></h3>
                            <Form>
                                <div className="google-button">
                                    <Link to="#" className="btn"><span><i className="fab fa-google"></i></span> google</Link>
                                </div>
                                <input onChange={(event) => setEmail(event.target.value)} type="email" placeholder="email" />
                                <input onChange={(event) => setPassword(event.target.value)} type="password" placeholder="password" />
                                <div className="checkbox-area">
                                    <div className="checkbox-part">
                                        <input type="checkbox" id="remember" />
                                        <label>remember me</label>
                                    </div>
                                    <div className="forgot-pas">
                                        <Link to="#">forgot password?</Link>
                                    </div>
                                </div>
                                <div className="login-btn">
                                    <button type="submit" onClick={signIn} className="btn">login account</button>
                                    <span>Don't have an account? <Link to="/signup">Signup here </Link></span>
                                </div>
                            </Form>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>

        <Footer />
    </>
}