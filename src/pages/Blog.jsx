import { Container, Row, Col } from "react-bootstrap"
import { Link } from "react-router-dom"
import Headermenu from "../components/Headermenu"
import Breadcrumb from '../components/Breadcrumb'
import Footer from '../components/Footer'
import Hotproduct from '../components/Widget-hot'
import Tag from '../components/Widget-tag'
import Filter from '../components/Widget-filter'
import Ads from '../components/Widget-ads'
import Post from '../components/Blog-posts-single'
import Shapes from '../components/Blog-shapes'

export default function Blog() {
    return <>
        <Headermenu />
        <Breadcrumb pageName="Blog" />

        {/* Blog Content Section */}
        <section className="blog-content-section padding-top-110 padding-bottom-120">
            <Shapes />
            <Container>
                <Row>
                    <Col lg={9}>
                        <div className="blog-posts">
                            <Post blogImg="blog1.jpg" blogDay="02" blogMonth="Dec"
                                blogTag="Chicken Burger" blogAuthor="Miyako Prince" blogComment="120"
                                blogTitle="Aburger Worthy of the presidnet at upland"
                                blogContent="Organizations today are in constant flux. Industries are consolidating, business models are emerging, new technologies are being developed, and consumer behaviors are evolving."
                            />
                            <Post blogImg="blog2.jpg" blogDay="10" blogMonth="Dec"
                                blogTag="Chicken Burger" blogAuthor="Miyako Prince" blogComment="120"
                                blogTitle="Aburger Worthy of the presidnet at upland"
                                blogContent="Organizations today are in constant flux. Industries are consolidating, business models are emerging, new technologies are being developed, and consumer behaviors are evolving."
                            />
                            <Post blogImg="blog3.jpg" blogDay="15" blogMonth="Dec"
                                blogTag="Chicken Burger" blogAuthor="Miyako Prince" blogComment="120"
                                blogTitle="Aburger Worthy of the presidnet at upland"
                                blogContent="Organizations today are in constant flux. Industries are consolidating, business models are emerging, new technologies are being developed, and consumer behaviors are evolving."
                            />
                            <Post blogImg="" blogDay="29" blogMonth="Dec"
                                blogTag="Chicken Burger" blogAuthor="Miyako Prince" blogComment="120"
                                blogTitle="Aburger Worthy of the presidnet at upland"
                                blogContent="Organizations today are in constant flux. Industries are consolidating, business models are emerging, new technologies are being developed, and consumer behaviors are evolving."
                            />
                        </div>
                        <div className="template-pagination">
                            <ul>
                                <li><Link to="#" className="active">01</Link></li>
                                <li><Link to="#">02</Link></li>
                                <li><Link to="#">03</Link></li>
                            </ul>
                        </div>
                    </Col>

                    {/* Blog sidebar */}
                    <Col lg={3}>
                        <div className="blog-sidebar margin-top-10">
                            <div className="single-widget search-widget  wow fadeInUp ">
                                <div className="header-search">
                                    <form action="#">
                                        <input type="text" placeholder="Search" />
                                        <button type="submit"><i className="fa fa-search"></i></button>
                                    </form>
                                </div>
                            </div>
                            <Hotproduct />
                            <Tag />
                            <Filter />
                            <Ads />
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>

        <Footer />
    </>
}