import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import Headermenu from "../components/Headermenu";
import Breadcrumb from '../components/Breadcrumb';
import Footer from '../components/Footer';

export default function SingleDish() {
    return <>
        <Headermenu />
        <Breadcrumb pageName="Single Dish" />

        {/* Portfolio banner area */}
        <div className="portfolio-banner padding-top-120">
            <div className="banner-shapes">
                <span className="bs1"><img src="/images/shapes/13.png" alt="" /></span>
                <span className="bs2"><img src="/images/shapes/26.png" alt="" /></span>
            </div>
            <Container>
                <Row>
                    <Col lg={12}>
                        <div className="inner-portfolio-box wow fadeIn">
                            <img src="/images/menu-item/single-portfolio.jpg" alt="" />
                            <span>
                                <Link className="popup-youtube play-btn item-ripple" to="https://www.youtube.com/watch?v=9xwazD5SyVg">
                                    <i className="fas fa-play"></i>
                                </Link>
                            </span>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>

        {/*  Portfolio-info */}
        <div className="portfolio-info padding-bottom-100">
            <div className="portfolio-shapes">
                <span className="ps1"><img src="/images/shapes/12.png" alt="" /></span>
                <span className="ps2"><img src="/images/shapes/26.png" alt="" /></span>
                <span className="ps3"><img src="/images/shapes/7.png" alt="" /></span>
                <span className="ps4"><img src="/images/img/32.png" alt="" /></span>
                <span className="ps5"><img src="/images/shapes/16.png" alt="" /></span>
            </div>
            <Container>
                <Row>
                    <Col lg={4} className="wow fadeInUp">
                        <div className="portfolio-info-left">
                            <h5>Portfolio Detail</h5>
                            <ul>
                                <li>Categories <span className="cat-pos">: Marketing Plan</span></li>
                                <li>date <span className="cat-pos">: 19-11-2020</span></li>
                                <li>client <span className="cat-pos">: tonmoy khan</span></li>
                                <li>share
                                    <span className="cat-pos"> :
                                        <span><Link className="social-icon" to="#"><i className="fab fa-facebook"></i></Link></span>
                                        <span><Link className="social-icon" to="#"><i className="fab fa-twitter"></i></Link></span>
                                        <span><Link className="social-icon" to="#"><i className="fab fa-instagram"></i></Link></span>
                                        <span><Link className="social-icon" to="#"><i className="fab fa-linkedin"></i></Link></span>
                                    </span>
                                </li>
                            </ul>
                            <span className="s1"><img src="/images/shapes/7.png" alt="" /></span>
                            <span className="s2"><img src="/images/shapes/35.png" alt="" /></span>
                        </div>
                    </Col>

                    <Col lg={8}>
                        <div className="portfolio-info-right">
                            <h2 className="wow fadeInUp">Delicious Dinner Dish</h2>
                            <p className="wow fadeInUp"> Convert your emails into tickets and keep them all organized in one place. Never leave
                                customers' questions unanswered. sed by millions of designers and artists to create everything from gorgeous.
                                Well-built and maintained PHP frameworks provide those tools maintained PHP frameworks provide those tools in
                                abundance, allowing developers to save time, re-use code, and streamline the back end. As software development tools
                                continuously change to follow. A hamburger topped with a slice of cheese is called cheeseburger
                            </p>

                            <h5 className="wow fadeInUp">Project Brief</h5>
                            <p className="wow fadeInUp">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there
                                live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics
                                flows by their place and supplies it with the necessary regelialia. It is a paradisematic country.
                            </p>

                            <h5 className="wow fadeInUp">Fact About Burger</h5>
                            <p className="wow fadeInUp">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there
                                live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics
                                flows by their place and supplies it with the necessary regelialia. It is a paradisematic country.
                            </p>

                            <div className="inner-portfolio-gallery margin-top-30">
                                <Row>
                                    <Col lg={6} md={12} className="wow fadeInLeft">
                                        <img src="/images/gallery/single-portfolio1.jpg" alt="" />
                                    </Col>
                                    <Col lg={6} md={12} className="wow fadeInRight">
                                        <Row>
                                            <div className="col-lg-12 col-md-12">
                                                <img src="/images/gallery/single-portfolio2.jpg" alt="" />
                                            </div>
                                        </Row>
                                        <Row>
                                            <div className="col-lg-6 col-md-6 col-6">
                                                <img src="/images/gallery/single-portfolio4.jpg" alt="" />
                                            </div>
                                            <div className="col-lg-6 col-md-6 col-6">
                                                <img src="/images/gallery/single-portfolio3.jpg" alt="" />
                                            </div>
                                        </Row>
                                    </Col>
                                </Row>
                            </div>
                            <p className="wow fadeInUp">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there
                                live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics
                                flows by their place and supplies it with the necessary regelialia. It is a paradisematic country.
                            </p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>

        <Footer />
    </>
}