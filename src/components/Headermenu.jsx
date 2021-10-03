import { Container, Row, Col, Nav } from "react-bootstrap";
import { Link, useHistory, useRouteMatch } from "react-router-dom";
import swal from 'sweetalert';


export default function Headermenu() {

    const history = useHistory()
    let {url} = useRouteMatch();
    // let {path, url} = useRouteMatch();
    // console.log(path, url)
    const localFullname = localStorage.getItem('fullname')
    const localEmail = localStorage.getItem('email')

    const logout = (event) => {
        event.preventDefault()
        swal({
            title: "Are you sure?",
            text: "Do you want to sign out?",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
        .then((willDelete) => {
            if (willDelete) {
                localStorage.clear()
                swal("Sign out success!", {
                    icon: "success",
                })
                .then(history.push(url))
            }
        });
    }

    return (
        <header>
            <div className="header-top">
                <Container>
                    <Row>
                        <Col xl={12} lg={12} md={12} className="d-flex flex-wrap justify-content-between">
                            <div className="contact-box">
                                <span> <Link to='/#'><i className="fas fa-phone-square-alt"></i> 123-58794069</Link> </span>
                                <span> <Link to='/#'><i className="fas fa-envelope-open-text"></i> supportfoodkhan@.com</Link></span>
                                {
                                    localFullname !== null
                                        ? <span> <Link to='/#'><i className="fas fa-user"></i> {localFullname}</Link></span>
                                        : <></>
                                }
                            </div>
                            <div className="social-box">
                                <span><Link to='/#'><i className="fab fa-twitter"></i></Link></span>
                                <span><Link to='/#'><i className="fab fa-facebook-f"></i></Link></span>
                                <span><Link to='/#'><i className="fab fa-linkedin-in"></i></Link></span>
                                <span><Link to='/#'><i className="fab fa-instagram"></i></Link></span>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>

            <div className="header-bottom margin-top-20">
                <Container className="position-relative">
                    <Row className="d-flex align-items-center">
                        <Col lg={2} md={2} sm={2} xs={3}>
                            <div className="logo">
                                <Link to="/">
                                    <img src="/images/logo/logo.png" alt="logo"></img>
                                </Link>
                            </div>
                        </Col>

                        <Col lg={6} className="d-none d-lg-block">
                            <Nav id="mobile-menu">
                                <ul className="main-menu">
                                    <li><Link to="/#">home <span><i className="fas fa-angle-down"></i></span></Link>
                                        <ul className="submenu">
                                            <li><Link to="/">home-1</Link></li>
                                            <li><Link to="/Homepage2">home-2</Link></li>
                                            <li><Link to="/Homepage3">home-3</Link></li>
                                        </ul>
                                    </li>
                                    <li><Link to="/about">about us</Link></li>
                                    <li><Link to="/menu">menu</Link></li>
                                    <li><Link to="#">blog <span><i className="fas fa-angle-down"></i></span></Link>
                                        <ul className="submenu">
                                            <li><Link to="/blog">blog</Link></li>
                                            <li><Link to="/post">single blog</Link></li>
                                        </ul>
                                    </li>
                                    <li><Link to="#">pages <span><i className="fas fa-angle-down"></i></span></Link>
                                        <ul className="submenu">
                                            <li><Link to="/checkout">checkout page</Link></li>
                                            <li><Link to="/singledish">single dish page</Link></li>
                                            <li><Link to="/food">food page</Link></li>
                                            <li><Link to="/cart">shopping cart page</Link></li>
                                            <li><Link to="#">gallery page</Link></li>
                                            <li><Link to="/signin">login page</Link></li>
                                            <li><Link to="/signup">signup page</Link></li>
                                        </ul>
                                    </li>
                                    <li><Link to="/contact">contact us</Link></li>
                                </ul>
                            </Nav>
                        </Col>

                        <Col lg={4} md={9} xs={8}>
                            <div className="customer-area">
                                <span>
                                    <Link to="/food"><i className="fas fa-heart"></i></Link>
                                </span>
                                <span>
                                    <Link to="#"><i className="fas fa-user"></i></Link>
                                </span>
                                <span>
                                    <Link to="/cart"><i className="fas fa-shopping-basket"></i></Link>
                                </span>
                                {
                                    localFullname !== null && localEmail !== null
                                        ? <Link onClick={logout} className="btn">Logout</Link>
                                        : <Link to="/signin" className="btn">Signin</Link>
                                }
                            </div>
                        </Col>
                    </Row>
                    <div className="mobile-menu"></div>
                </Container>
            </div>
        </header >
    )
}