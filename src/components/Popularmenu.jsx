import { Container, Row } from "react-bootstrap";
import NavItem from '../components/Popularmenu-nav-item';
import ShapesImg from '../components/Popularmenu-shapes-img';
import TabItem from '../components/Popularmenu-tab-item';
import Ctitle from '../components/Common-title';

export default function Popularmenu() {
    return (
        <section className="menu-area padding-bottom-120">
            <Container>
                <Ctitle txtTop="food items" txtBlue="popular" txtRed="menu" />
                <div className="menu-nav-wrapper">
                    <Container>
                        <Row>
                            <div className="nav justify-content-center" id="nav-tab" role="tablist">
                                <NavItem active="active" itemImg="/images/menu-item/pizza.png" itemName="pizza" itemContent="#menu-1" />
                                <NavItem itemImg="/images/menu-item/burger.png" itemName="burger" itemContent="#menu-2" />
                                <NavItem itemImg="/images/menu-item/chicken.png" itemName="chicken" itemContent="#menu-3" />
                                <NavItem itemImg="/images/menu-item/drinks.png" itemName="drinks" itemContent="#menu-4" />
                                <NavItem itemImg="/images/menu-item/drinks2.png" itemName="drinks" itemContent="#menu-5" />
                                <NavItem itemImg="/images/menu-item/combo.png" itemName="combo" itemContent="#menu-6" />
                            </div>
                        </Row>
                    </Container>
                </div>
                <div className="tab-content" id="nav-tabContent">
                    <div className="tab-pane fade show active" id="menu-1">
                        <div className="menu-items-wrapper padding-70 margin-top-50 px-5">
                            <ShapesImg />
                            <Row>
                                <TabItem xl="4" colNumber="6" img="/images/menu-item/piz1.png" prodName="Margherita" note="shirmp. squid, pineapple" price="18.00" />
                                <TabItem xl="4" colNumber="6" img="/images/menu-item/piz2.png" prodName="Tomato" note="shirmp. squid, pineapple" price="13.00" />
                                <TabItem xl="4" colNumber="6" img="/images/menu-item/piz3.png" prodName="Marinana" note="shirmp. squid, pineapple" price="15.00" delPrice="20.00" />
                            </Row>
                            <hr />
                            <Row className="margin-top-60">
                                <TabItem xl="4" colNumber="6" img="/images/menu-item/piz4.png" prodName="Frutti Di Mare" note="shirmp. squid, pineapple" price="17.00" />
                                <TabItem xl="4" colNumber="6" img="/images/menu-item/piz5.png" prodName="Americana" note="shirmp. squid, pineapple" price="16.00" />
                                <TabItem xl="4" colNumber="6" img="/images/menu-item/piz6.png" prodName="Pizza Al Pesto" note="shirmp. squid, pineapple" price="19.00" delPrice="20.00" />
                            </Row>
                            <hr /><br />
                            <div className="menu-btn text-center">
                                <a href="shopping-cart.html" className="btn">order now</a>
                            </div>
                        </div>
                    </div>

                    <div className="tab-pane fade" id="menu-2">
                        <div className="menu-items-wrapper padding-70 margin-top-50">
                            <ShapesImg />
                            <Row>
                                <TabItem xl="4" colNumber="6" img="/images/menu-item/mi-1.png" prodName="Garlic" note="shirmp. squid, pineapple" price="12.00" />
                                <TabItem xl="4" colNumber="6" img="/images/menu-item/br1.png" prodName="Naga burger" note="shirmp. squid, pineapple" price="20.00" />
                                <TabItem xl="4" colNumber="6" img="/images/menu-item/br2.png" prodName="Beef burger" note="shirmp. squid, pineapple" price="22.00" />
                            </Row>
                            <hr />
                            <Row className="margin-top-60">
                                <TabItem xl="4" colNumber="6" img="/images/menu-item/br3.png" prodName="BBQ burger" note="shirmp. squid, pineapple" price="21.00" />
                                <TabItem xl="4" colNumber="6" img="/images/menu-item/br5.png" prodName="Crispy burger" note="shirmp. squid, pineapple" price="25.00" />
                                <TabItem xl="4" colNumber="6" img="/images/menu-item/br6.png" prodName="Chicken grill" note="shirmp. squid, pineapple" price="23.00" />
                            </Row>
                            <hr /><br />
                            <div className="menu-btn text-center">
                                <a href="shopping-cart.html" className="btn">order now</a>
                            </div>
                        </div>
                    </div>

                    <div className="tab-pane fade" id="menu-3">
                        <div className="menu-items-wrapper padding-70 margin-top-50">
                            <ShapesImg />
                            <Row>
                                <TabItem xl="4" colNumber="6" img="/images/menu-item/tc6.png" prodName="Fried Chicken" note="shirmp. squid, pineapple" price="12.00" />
                                <TabItem xl="4" colNumber="6" img="/images/menu-item/mi-2.png" prodName="Thai Chicken" note="shirmp. squid, pineapple" price="12.00" />
                                <TabItem xl="4" colNumber="6" img="/images/menu-item/mi-3.png" prodName="BBQ Chicken" note="shirmp. squid, pineapple" price="12.00" />
                            </Row>
                            <hr />
                            <Row className="margin-top-60">
                                <TabItem xl="4" colNumber="6" img="/images/menu-item/mi-1.png" prodName="Naga" note="shirmp. squid, pineapple" price="12.00" />
                                <TabItem xl="4" colNumber="6" img="/images/menu-item/mi-5.png" prodName="Thai Chicken" note="shirmp. squid, pineapple" price="12.00" />
                                <TabItem xl="4" colNumber="6" img="/images/menu-item/mi-6.png" prodName="BBQ Chicken" note="shirmp. squid, pineapple" price="12.00" />
                            </Row>
                            <hr /><br />
                            <div className="menu-btn text-center">
                                <a href="shopping-cart.html" className="btn">order now</a>
                            </div>
                        </div>
                    </div>

                    <div className="tab-pane fade" id="menu-4">
                        <div className="menu-items-wrapper padding-70 margin-top-50">
                            <ShapesImg />
                            <Row>
                                <TabItem xl="4" colNumber="6" img="/images/img/dr1.jpg" prodName="Grapefruit" note="shirmp. squid, pineapple" price="12.00" />
                                <TabItem xl="4" colNumber="6" img="/images/img/dr2.jpg" prodName="Blueberry" note="shirmp. squid, pineapple" price="12.00" />
                                <TabItem xl="4" colNumber="6" img="/images/img/dr3.jpg" prodName="Cranberry" note="shirmp. squid, pineapple" price="12.00" />
                            </Row>
                            <hr />
                            <Row className="margin-top-60">
                                <TabItem xl="4" colNumber="6" img="/images/img/dr4.jpg" prodName="Orange Juice" note="shirmp. squid, pineapple" price="12.00" />
                                <TabItem xl="4" colNumber="6" img="/images/img/dr5.jpg" prodName="Beet Juice" note="shirmp. squid, pineapple" price="12.00" />
                                <TabItem xl="4" colNumber="6" img="/images/img/dr6.jpg" prodName="Pomegranate" note="shirmp. squid, pineapple" price="12.00" />
                            </Row>
                            <hr /><br />
                            <div className="menu-btn text-center">
                                <a href="shopping-cart.html" className="btn">order now</a>
                            </div>
                        </div>
                    </div>

                    <div className="tab-pane fade" id="menu-5">
                        <div className="menu-items-wrapper padding-70 margin-top-50">
                            <ShapesImg />
                            <Row>
                                <TabItem xl="4" colNumber="6" img="/images/img/dr2.jpg" prodName="Guava juice" note="shirmp. squid, pineapple" price="12.00" />
                                <TabItem xl="4" colNumber="6" img="/images/img/dr5.jpg" prodName="Lemonade" note="shirmp. squid, pineapple" price="12.00" />
                                <TabItem xl="4" colNumber="6" img="/images/img/dr1.jpg" prodName="Lingonberry" note="shirmp. squid, pineapple" price="12.00" />
                            </Row>
                            <hr />
                            <Row className="margin-top-60">
                                <TabItem xl="4" colNumber="6" img="/images/img/dr6.jpg" prodName="Prune juice" note="shirmp. squid, pineapple" price="12.00" />
                                <TabItem xl="4" colNumber="6" img="/images/img/dr4.jpg" prodName="Sugarcane" note="shirmp. squid, pineapple" price="12.00" />
                                <TabItem xl="4" colNumber="6" img="/images/img/dr5.jpg" prodName="Vegetable" note="shirmp. squid, pineapple" price="12.00" />
                            </Row>
                            <hr /><br />
                            <div className="menu-btn text-center">
                                <a href="shopping-cart.html" className="btn">order now</a>
                            </div>
                        </div>
                    </div>

                    <div className="tab-pane fade" id="menu-6">
                        <div className="menu-items-wrapper padding-70 margin-top-50">
                            <ShapesImg />
                            <Row>
                                <TabItem xl="4" colNumber="6" img="/images/menu-item/mi-1.png" prodName="Garlic Burger" note="shirmp. squid, pineapple" price="12.00" />
                                <TabItem xl="4" colNumber="6" img="/images/menu-item/mi-2.png" prodName="Thai Chicken" note="shirmp. squid, pineapple" price="12.00" />
                                <TabItem xl="4" colNumber="6" img="/images/menu-item/mi-3.png" prodName="Bbq Chicken" note="shirmp. squid, pineapple" price="12.00" />
                            </Row>
                            <hr />
                            <Row className="margin-top-60">
                                <TabItem xl="4" colNumber="6" img="/images/menu-item/mi-4.png" prodName="Mutton" note="shirmp. squid, pineapple" price="12.00" />
                                <TabItem xl="4" colNumber="6" img="/images/menu-item/mi-5.png" prodName="Thai Chicken" note="shirmp. squid, pineapple" price="12.00" />
                                <TabItem xl="4" colNumber="6" img="/images/menu-item/mi-6.png" prodName="Bbq Chicken" note="shirmp. squid, pineapple" price="12.00" />
                            </Row>
                            <hr /><br />
                            <div className="menu-btn text-center">
                                <a href="shopping-cart.html" className="btn">order now</a>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    )
}