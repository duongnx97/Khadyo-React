import Headermenu from "../components/Headermenu"
import Breadcrumb from '../components/Breadcrumb'
import Footer from '../components/Footer'
import Shapes from '../components/Blog-shapes'
import { Container, Row, Col } from "react-bootstrap"
import { Link } from "react-router-dom"
import Hotproduct from '../components/Widget-hot'
import Tag from '../components/Widget-tag'
import Filter from '../components/Widget-filter'
import Ads from '../components/Widget-ads'

export default function Post() {
    return <>
        <Headermenu />
        <Breadcrumb pageName="Post" />

        <section className="blog-content-section blog-details-page padding-120">
            <Shapes />
            <Container>
                <Row>
                    <Col lg={9}>
                        <div className="blog-posts">
                            <div className="blog-single-post">
                                <div className="blog-thumbnail wow fadeInUp">
                                    <img src="/images/blog/blog2.jpg" alt="" />
                                </div>
                                <div className="blog-content-part">
                                    <div className="blog-content-top">
                                        <div className="blog-date margin-right-20">
                                            <Link to="#"><i className="fas fa-tag"></i> Chicken Burger</Link>
                                        </div>
                                        <div className="blog-tag margin-right-20">
                                            <Link to="#"><i className="fas fa-user-circle"></i>Miyako Prince</Link>
                                        </div>
                                        <div className="blog-author">
                                            <Link to="#"><i className="fas fa-comments"></i> 120+ Comment</Link>
                                        </div>
                                    </div>
                                    <div className="blog-title">
                                        <h4>A Burger Worthy of the Presidnet at Upland</h4>
                                    </div>
                                    <div className="blog-content wow fadeInUp">
                                        <p>Organizations today are in constant flux. Industries are consolidating, business
                                            models are emerging, new technologies are being developed, and consumer
                                            behaviors are evolving. It forces them to understand and quickly respond to big
                                            shifts in the way companies operate and how work must get done. In the words of
                                            Arie de Geus, a business theorist, The ability to learn faster than your
                                            competitors may be the only sustainable competitive advantage.</p>
                                        <p className="margin-top-20">I’m not talking about relaxed armchair or even structured
                                            classroom learning. I’m talking about resisting the bias against doing new
                                            things, scanning the horizon for growth opportunities, and pushing yourse
                                            radically different capabilities—while still performing your job. That requires
                                            a willingness to experiment and become a novice again and again: an extremely
                                            discomforting notion for most of us.</p>
                                        <p className="margin-top-20">Lorem ipsum dolor sit amet, consectet adipiscing elit, sed
                                            do eiusmod tempor incididunt ut labore et dolore magnag aliqua. Ut enim ad minim
                                            veniam, quis nostrud exercitation ullamco laborinu aliquip ex ea commodo
                                            consequat. Du aute irure dolor in reprehenderit inlore voluptate velit esse
                                            cillum dolore.</p>
                                    </div>
                                    <div className="blog-title">
                                        <h5>New Restaurant Town</h5>
                                    </div>
                                    <div className="blog-content  wow fadeInUp">
                                        <p>We’ve identified four attributes they have in spades: aspiration, self-awareness,
                                            curiosity, and vulnerability. They truly want to understand and master new
                                            skills; they see themselves very clearly; they constantly think of and ask good
                                            questions; and they tolerate their own mistakes as they move up the learning
                                            curve.</p>
                                    </div>
                                    <div className="content-bottom margin-top-30">
                                        <div className="row">
                                            <div className="col-sm-6">
                                                <div className="content-bottom-tag">
                                                    <ul>
                                                        <li>tags:</li>
                                                        <ul>
                                                            <li><Link to="#">bbq</Link></li>
                                                            <li><Link to="#">tikka</Link></li>
                                                        </ul>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="col-sm-6">
                                                <div className="blog-social-icons">
                                                    <ul>
                                                        <li><span>share:</span></li>
                                                        <li><Link to="#"><img src="/images/icons/facebook.png" alt="" /></Link></li>
                                                        <li><Link to="#"><img src="/images/icons/twitter.png" alt="" /></Link></li>
                                                        <li><Link to="#"><img src="/images/icons/inst.png" alt="" /></Link></li>
                                                        <li><Link to="#"><img src="/images/icons/linkdin.png" alt="" /></Link></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* divider */}
                            <div className="divider"></div>


                            {/* blog comment area */}
                            <div className="blog-comment-area  wow fadeInUp">
                                <div className="blog-title margin-top-30">
                                    <h3>2 comments</h3>
                                </div>

                                <div className="single-comment">
                                    <div className="comment-image">
                                        <img src="/images/testimonial/testi-1.png" alt="" />
                                    </div>
                                    <div className="comment-content">
                                        <div className="comment-content-top">
                                            <div className="content-top-left">
                                                <h6>Rumon Khan</h6>
                                                <span>30 august 2020</span>
                                            </div>
                                            <Link to="#" className="reply">reply</Link>
                                        </div>
                                        <p className="margin-top-10">A wonderful serenity has taken possession of my entire
                                            soul, like these sweet mornings of the spring which I enjoy with my whole heart.
                                        </p>
                                    </div>
                                </div>
                                <div className="single-comment">
                                    <div className="comment-image">
                                        <img src="/images/testimonial/test-4.png" alt="" />
                                    </div>
                                    <div className="comment-content">
                                        <div className="comment-content-top">
                                            <div className="content-top-left">
                                                <h6>Chirs Deo</h6>
                                                <span>30 august 2020</span>
                                            </div>
                                            <Link to="#" className="reply bg-secondary">reply</Link>
                                        </div>
                                        <p className="margin-top-10">A wonderful serenity has taken possession of my entire
                                            soul, like these sweet mornings of the spring which I enjoy with my whole heart.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="blog-comment-form margin-top-60  wow fadeInUp">
                                <div className="comment-title">
                                    <h4>leave a reply</h4>
                                    <form action="#">
                                        <input type="text" placeholder="Your Name" />
                                        <input type="email" placeholder="Your Email" />
                                        <textarea name="message" placeholder="Write your text" id="comment-form" cols="30"
                                            rows="10"></textarea>
                                        <button type="submit" className="btn margin-top-40">post comment</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </Col>

                    {/* Blog sidebar */}
                    <Col lg={3}>
                        <div className="blog-sidebar margin-top-10">
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