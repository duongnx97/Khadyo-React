import { Container, Row, Col } from "react-bootstrap"
import Headermenu from "../components/Headermenu"
import Breadcrumb from '../components/Breadcrumb'
import Menusfood from '../components/Menu-sfood'
import Footer from '../components/Footer'
import Ctitle from '../components/Common-title'
import TabItem from '../components/Popularmenu-tab-item'
import NavItem from '../components/Popularmenu-nav-item'
import { Link } from "react-router-dom"
import Chickenmenu from '../components/Menu-chicken'


export default function Menu() {
    return <>
        <Headermenu />
        <Breadcrumb pageName="Menu item" />

        {/* Menu select */}
        <div className="foods-counter menus-area">
            <Container>
                <Row className="foods-wrapper menus-wrapper">
                    <Menusfood menuImg="menu2.png" menuName="Super Fast Delivery" note="Free Delivery In You Location" />
                    <Menusfood menuImg="menu1.png" menuName="100% Best Quality" note="We Provide Best Quality Food" />
                    <Menusfood menuImg="menu3.png" menuName="Money Back Guarantee" note="100% Money Back Guarantee" />
                    <Menusfood menuImg="menu4.png" menuName="Delicious Food Menu" note="Food Khan Provide Best Food" />
                </Row>
            </Container>
        </div>

        <Chickenmenu />

        {/* Delicious burger */}
        <section className="menu-area pizza-area burger-area padding-top-40">
            <div className="menu-i-shapes">
                <span className="brs"><img src="/images/shapes/34.png" alt="" /></span>
            </div>
            <Container>
                <Ctitle txtTop="food items" txtBlue="Delicious" txtRed="burger" />
                <div className="menu-nav-wrapper">
                    <Container>
                        <Row>
                            <div className="nav justify-content-center" id="nav-tab" role="tablist">
                                <NavItem active="active" itemImg="/images/menu-item/bn1.png" itemName="Classic Burger" itemContent="#burger-1" />
                                <NavItem itemImg="/images/menu-item/bn2.png" itemName="Mushroom Burger" itemContent="#burger-2" />
                                <NavItem itemImg="/images/menu-item/pn3.png" itemName="Beef Burger" itemContent="#burger-3" />
                                <NavItem itemImg="/images/menu-item/pn4.png" itemName="Chicken Burger" itemContent="#burger-4" />
                                <NavItem itemImg="/images/menu-item/pn5.png" itemName="Vegetable Burger" itemContent="#burger-5" />
                            </div>
                        </Row>
                    </Container>
                </div>

                <div className="tab-content" id="nav-tabContent1">
                    <div className="tab-pane fade show active" id="burger-1" role="tabpanel" aria-labelledby="burger-1">
                        <div className="menu-items-wrapper pizza-items-wrapper  margin-top-50">
                            <Row>
                                <TabItem colNumber="4" img="/images/menu-item/br1.png" prodName="Crispy Fried Chicken" note="shirmp. squid, pineapple" price="16.00" />
                                <TabItem colNumber="4" img="/images/menu-item/br2.png" prodName="Beef Burger" note="shirmp. squid, pineapple" price="15.00" />
                                <TabItem colNumber="4" img="/images/menu-item/br3.png" prodName="BBQ Burger" note="shirmp. squid, pineapple" price="18.00" />
                                <TabItem colNumber="4" img="/images/menu-item/br4.png" prodName="Crispy Burger" note="shirmp. squid, pineapple" price="17.00" />
                                <TabItem colNumber="4" img="/images/menu-item/br5.png" prodName="Chicken Burger" note="shirmp. squid, pineapple" price="20.00" />
                                <TabItem colNumber="4" img="/images/menu-item/br6.png" prodName="Chicken grill Fry" note="shirmp. squid, pineapple" price="19.00" />
                            </Row>
                        </div>
                    </div>
                    <div className="tab-pane fade" id="burger-2" role="tabpanel" aria-labelledby="burger-2">
                        <div className="menu-items-wrapper pizza-items-wrapper  margin-top-50">
                            <Row>
                                <TabItem colNumber="4" img="/images/menu-item/br5.png" prodName="Crispy Fried Chicken" note="shirmp. squid, pineapple" price="16.00" />
                                <TabItem colNumber="4" img="/images/menu-item/br5.png" prodName="Beef Burger" note="shirmp. squid, pineapple" price="15.00" />
                                <TabItem colNumber="4" img="/images/menu-item/br5.png" prodName="BBQ Burger" note="shirmp. squid, pineapple" price="18.00" />
                                <TabItem colNumber="4" img="/images/menu-item/br5.png" prodName="Crispy Burger" note="shirmp. squid, pineapple" price="17.00" />
                                <TabItem colNumber="4" img="/images/menu-item/br5.png" prodName="Chicken Burger" note="shirmp. squid, pineapple" price="20.00" />
                                <TabItem colNumber="4" img="/images/menu-item/br5.png" prodName="Chicken grill Fry" note="shirmp. squid, pineapple" price="19.00" />
                            </Row>
                        </div>
                    </div>
                    <div className="tab-pane fade" id="burger-3" role="tabpanel" aria-labelledby="burger-3">
                        <div className="menu-items-wrapper pizza-items-wrapper  margin-top-50">
                            <Row>
                                <TabItem colNumber="4" img="/images/menu-item/br2.png" prodName="Crispy Fried Chicken" note="shirmp. squid, pineapple" price="16.00" />
                                <TabItem colNumber="4" img="/images/menu-item/br2.png" prodName="Beef Burger" note="shirmp. squid, pineapple" price="15.00" />
                                <TabItem colNumber="4" img="/images/menu-item/br2.png" prodName="BBQ Burger" note="shirmp. squid, pineapple" price="18.00" />
                                <TabItem colNumber="4" img="/images/menu-item/br2.png" prodName="Crispy Burger" note="shirmp. squid, pineapple" price="17.00" />
                                <TabItem colNumber="4" img="/images/menu-item/br2.png" prodName="Chicken Burger" note="shirmp. squid, pineapple" price="20.00" />
                                <TabItem colNumber="4" img="/images/menu-item/br2.png" prodName="Chicken grill Fry" note="shirmp. squid, pineapple" price="19.00" />
                            </Row>
                        </div>
                    </div>
                    <div className="tab-pane fade" id="burger-4" role="tabpanel" aria-labelledby="burger-4">
                        <div className="menu-items-wrapper pizza-items-wrapper  margin-top-50">
                            <Row>
                                <TabItem colNumber="4" img="/images/menu-item/br3.png" prodName="Crispy Fried Chicken" note="shirmp. squid, pineapple" price="16.00" />
                                <TabItem colNumber="4" img="/images/menu-item/br3.png" prodName="Beef Burger" note="shirmp. squid, pineapple" price="15.00" />
                                <TabItem colNumber="4" img="/images/menu-item/br3.png" prodName="BBQ Burger" note="shirmp. squid, pineapple" price="18.00" />
                                <TabItem colNumber="4" img="/images/menu-item/br3.png" prodName="Crispy Burger" note="shirmp. squid, pineapple" price="17.00" />
                                <TabItem colNumber="4" img="/images/menu-item/br3.png" prodName="Chicken Burger" note="shirmp. squid, pineapple" price="20.00" />
                                <TabItem colNumber="4" img="/images/menu-item/br3.png" prodName="Chicken grill Fry" note="shirmp. squid, pineapple" price="19.00" />
                            </Row>
                        </div>
                    </div>
                    <div className="tab-pane fade" id="burger-5" role="tabpanel" aria-labelledby="burger-5">
                        <div className="menu-items-wrapper pizza-items-wrapper  margin-top-50">
                            <Row>
                                <TabItem colNumber="4" img="/images/menu-item/br1.png" prodName="Crispy Fried Chicken" note="shirmp. squid, pineapple" price="16.00" />
                                <TabItem colNumber="4" img="/images/menu-item/br1.png" prodName="Beef Burger" note="shirmp. squid, pineapple" price="15.00" />
                                <TabItem colNumber="4" img="/images/menu-item/br1.png" prodName="BBQ Burger" note="shirmp. squid, pineapple" price="18.00" />
                                <TabItem colNumber="4" img="/images/menu-item/br1.png" prodName="Crispy Burger" note="shirmp. squid, pineapple" price="17.00" />
                                <TabItem colNumber="4" img="/images/menu-item/br1.png" prodName="Chicken Burger" note="shirmp. squid, pineapple" price="20.00" />
                                <TabItem colNumber="4" img="/images/menu-item/br1.png" prodName="Chicken grill Fry" note="shirmp. squid, pineapple" price="19.00" />
                            </Row>
                        </div>
                    </div>
                </div>
            </Container>
        </section>

        {/* Banner burger */}
        <section className="banner-gallery pizza-banner padding-top-90 padding-bottom-30">
            <div className="pizza-shapes">
                <span className="ps1"><img src="/images/shapes/35.png" alt="" /></span>
                <span className="ps2"><img src="/images/shapes/26.png" alt="" /></span>
            </div>
            <Container>
                <Row>
                    <Col lg={12} md={12}>
                        <Row>
                            <Col lg={6} md={12} className="margin-bottom-30 wow fadeInLeft">
                                <div className="gallery-img-1">
                                    <h3 className="margin-bottom-10">Buzzed Burger</h3>
                                    <p>Sale off 50% only this week</p>
                                    <Link to="shopping-cart.html" className="btn">order now</Link>
                                    <img src="/images/gallery/24.png" alt="" />
                                    <span className="gs"><img src="/images/shapes/bbr.png" alt="" /></span>
                                </div>
                            </Col>
                            <Col lg={6} md={12} className="wow fadeInRight">
                                <div className="gallery-img-1 gallery-img-01">
                                    <h5 className="margin-bottom-10">Chicken Combo<br /> Burger</h5>
                                    <p>Sale off 50% only this week</p>
                                    <Link to="shopping-cart.html" className="btn">order now</Link>
                                    <img src="/images/menu-item/mg2.png" alt="" />
                                    <span className="yellow"><img src="/images/shapes/37.png" alt="" /></span>
                                    <span className="gs1"><img src="/images/shapes/bbs.png" alt="" /></span>
                                    <span className="pbadge"><img src="/images/icons/pbadge.png" alt="" /></span>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </section>

        {/* Dilicious pizza */}
        <section className="menu-area  pizza-area padding-bottom-90">
            <div className="menu-i-shapes">
                <span className="mis-1"><img src="/images/shapes/36.png" alt="" /></span>
                <span className="mis-2"><img src="/images/shapes/6.png" alt="" /></span>
            </div>
            <Container>
                <Ctitle txtTop="food items" txtBlue="Delicious" txtRed="Pizza" />
                <div className="menu-nav-wrapper">
                    <Container>
                        <Row>
                            <div className="nav justify-content-center" id="nav-tab" role="tablist">
                                <NavItem active="active" itemImg="/images/menu-item/pm1.png" itemName="Pizza A" itemContent="#menu-1" />
                                <NavItem itemImg="/images/menu-item/pm2.png" itemName="Pizza B" itemContent="#menu-2" />
                                <NavItem itemImg="/images/menu-item/pm3.png" itemName="Pizza C" itemContent="#menu-3" />
                                <NavItem itemImg="/images/menu-item/pm4.png" itemName="Pizza D" itemContent="#menu-4" />
                                <NavItem itemImg="/images/menu-item/pm5.png" itemName="Pizza E" itemContent="#menu-5" />
                            </div>
                        </Row>
                    </Container>
                </div>

                <div className="tab-content" id="nav-tabContent2">
                    <div className="tab-pane fade show active" id="menu-1" role="tabpanel" aria-labelledby="menu-1">
                        <div className="menu-items-wrapper pizza-items-wrapper  margin-top-50">
                            <Row>
                                <TabItem colNumber="4" img="/images/menu-item/piz1.png" prodName="Margher Pizza" note="shirmp. squid, pineapple" price="16.00" />
                                <TabItem colNumber="4" img="/images/menu-item/piz2.png" prodName="Tomato sauce" note="shirmp. squid, pineapple" price="15.00" />
                                <TabItem colNumber="4" img="/images/menu-item/piz3.png" prodName="Marinara Pizza" note="shirmp. squid, pineapple" price="18.00" />
                                <TabItem colNumber="4" img="/images/menu-item/piz4.png" prodName="Frutti di Mare" note="shirmp. squid, pineapple" price="17.00" />
                                <TabItem colNumber="4" img="/images/menu-item/piz5.png" prodName="Americana Pizza" note="shirmp. squid, pineapple" price="20.00" />
                                <TabItem colNumber="4" img="/images/menu-item/piz6.png" prodName="Pizza al Pesto" note="shirmp. squid, pineapple" price="19.00" />
                            </Row>
                        </div>
                    </div>
                    <div className="tab-pane fade" id="menu-2" role="tabpanel" aria-labelledby="menu-2">
                        <div className="menu-items-wrapper pizza-items-wrapper  margin-top-50">
                            <Row>
                                <TabItem colNumber="4" img="/images/menu-item/piz1.png" prodName="Margher Pizza" note="shirmp. squid, pineapple" price="16.00" />
                                <TabItem colNumber="4" img="/images/menu-item/piz2.png" prodName="Tomato sauce" note="shirmp. squid, pineapple" price="15.00" />
                                <TabItem colNumber="4" img="/images/menu-item/piz3.png" prodName="Marinara Pizza" note="shirmp. squid, pineapple" price="18.00" />
                                <TabItem colNumber="4" img="/images/menu-item/piz4.png" prodName="Frutti di Mare" note="shirmp. squid, pineapple" price="17.00" />
                                <TabItem colNumber="4" img="/images/menu-item/piz5.png" prodName="Americana Pizza" note="shirmp. squid, pineapple" price="20.00" />
                                <TabItem colNumber="4" img="/images/menu-item/piz6.png" prodName="Pizza al Pesto" note="shirmp. squid, pineapple" price="19.00" />
                            </Row>
                        </div>
                    </div>
                    <div className="tab-pane fade" id="menu-3" role="tabpanel" aria-labelledby="menu-3">
                        <div className="menu-items-wrapper pizza-items-wrapper  margin-top-50">
                            <Row>
                                <TabItem colNumber="4" img="/images/menu-item/piz1.png" prodName="Margher Pizza" note="shirmp. squid, pineapple" price="16.00" />
                                <TabItem colNumber="4" img="/images/menu-item/piz2.png" prodName="Tomato sauce" note="shirmp. squid, pineapple" price="15.00" />
                                <TabItem colNumber="4" img="/images/menu-item/piz3.png" prodName="Marinara Pizza" note="shirmp. squid, pineapple" price="18.00" />
                                <TabItem colNumber="4" img="/images/menu-item/piz4.png" prodName="Frutti di Mare" note="shirmp. squid, pineapple" price="17.00" />
                                <TabItem colNumber="4" img="/images/menu-item/piz5.png" prodName="Americana Pizza" note="shirmp. squid, pineapple" price="20.00" />
                                <TabItem colNumber="4" img="/images/menu-item/piz6.png" prodName="Pizza al Pesto" note="shirmp. squid, pineapple" price="19.00" />
                            </Row>
                        </div>
                    </div>
                    <div className="tab-pane fade" id="menu-4" role="tabpanel" aria-labelledby="menu-4">
                        <div className="menu-items-wrapper pizza-items-wrapper  margin-top-50">
                            <Row>
                                <TabItem colNumber="4" img="/images/menu-item/piz1.png" prodName="Margher Pizza" note="shirmp. squid, pineapple" price="16.00" />
                                <TabItem colNumber="4" img="/images/menu-item/piz2.png" prodName="Tomato sauce" note="shirmp. squid, pineapple" price="15.00" />
                                <TabItem colNumber="4" img="/images/menu-item/piz3.png" prodName="Marinara Pizza" note="shirmp. squid, pineapple" price="18.00" />
                                <TabItem colNumber="4" img="/images/menu-item/piz4.png" prodName="Frutti di Mare" note="shirmp. squid, pineapple" price="17.00" />
                                <TabItem colNumber="4" img="/images/menu-item/piz5.png" prodName="Americana Pizza" note="shirmp. squid, pineapple" price="20.00" />
                                <TabItem colNumber="4" img="/images/menu-item/piz6.png" prodName="Pizza al Pesto" note="shirmp. squid, pineapple" price="19.00" />
                            </Row>
                        </div>
                    </div>
                    <div className="tab-pane fade" id="menu-5" role="tabpanel" aria-labelledby="menu-5">
                        <div className="menu-items-wrapper pizza-items-wrapper  margin-top-50">
                            <Row>
                                <TabItem colNumber="4" img="/images/menu-item/piz1.png" prodName="Margher Pizza" note="shirmp. squid, pineapple" price="16.00" />
                                <TabItem colNumber="4" img="/images/menu-item/piz2.png" prodName="Tomato sauce" note="shirmp. squid, pineapple" price="15.00" />
                                <TabItem colNumber="4" img="/images/menu-item/piz3.png" prodName="Marinara Pizza" note="shirmp. squid, pineapple" price="18.00" />
                                <TabItem colNumber="4" img="/images/menu-item/piz4.png" prodName="Frutti di Mare" note="shirmp. squid, pineapple" price="17.00" />
                                <TabItem colNumber="4" img="/images/menu-item/piz5.png" prodName="Americana Pizza" note="shirmp. squid, pineapple" price="20.00" />
                                <TabItem colNumber="4" img="/images/menu-item/piz6.png" prodName="Pizza al Pesto" note="shirmp. squid, pineapple" price="19.00" />
                            </Row>
                        </div>
                    </div>
                </div>
            </Container>
        </section>

        <Footer />
    </>
}