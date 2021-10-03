import { Container, Row, Col } from "react-bootstrap"
import Ctitle from '../components/Common-title'
import ChickenContent from '../components/Chicken-content'
import TabItem from '../components/Popularmenu-tab-item'
import NavItem from '../components/Popularmenu-nav-item'

export default function MenuChicken() {
    return <>
        {/* Chicken menu */}
        <section className="menu-area pizza-area burger-area chicken-area padding-top-40">
            <div className="menu-i-shapes">
                <span className="bleft"><img src="/images/menu-item/bleft.png" alt="" /></span>
            </div>
            <Container>
                <Ctitle txtTop="food items" txtBlue="chicken" txtRed="menu" />
                <div className="menu-nav-wrapper">
                    <Container>
                        <Row>
                            <div className="nav justify-content-center" id="nav-tab" role="tablist">
                                <NavItem active="active" itemImg="/images/menu-item/tc1.png" itemName="Spicy Chicken" itemContent="#chicken-1" />
                                <NavItem itemImg="/images/menu-item/tc2.png" itemName="Spicy Fry" itemContent="#chicken-2" />
                                <NavItem itemImg="/images/menu-item/tc3.png" itemName="Spicy Stick" itemContent="#chicken-3" />
                                <NavItem itemImg="/images/menu-item/tc4.png" itemName="Spicy Bites" itemContent="#chicken-4" />
                                <NavItem itemImg="/images/menu-item/tc5.png" itemName="Crispy Strips" itemContent="#chicken-5" />
                            </div>
                        </Row>
                    </Container>
                </div>

                <div className="tab-content" id="nav-tabContent">
                    <div className="tab-pane fade show active" id="chicken-1" role="tabpanel" aria-labelledby="chicken-1">
                        <div className="menu-items-wrapper pizza-items-wrapper  margin-top-50">
                            <Row>
                                <Col lg={8}>
                                    <Row>
                                        <TabItem colNumber="6" img="/images/menu-item/tc6.png" prodName="Fried Chicken" note="shirmp. squid, pineapple" price="16.00" />
                                        <TabItem colNumber="6" img="/images/menu-item/tc7.png" prodName="Roast Chicken" note="shirmp. squid, pineapple" price="15.00" />
                                        <TabItem colNumber="6" img="/images/menu-item/tc8.png" prodName="Crispy Fry" note="shirmp. squid, pineapple" price="18.00" />
                                        <TabItem colNumber="6" img="/images/menu-item/tc9.png" prodName="Baked Roast" note="shirmp. squid, pineapple" price="17.00" />
                                    </Row>
                                </Col>
                                <Col lg={4}>
                                    <ChickenContent text1="Super" text2="Combo Burger" note="Shrimp, Squip" price="15" />
                                </Col>
                            </Row>
                        </div>
                    </div>
                    <div className="tab-pane fade" id="chicken-2" role="tabpanel" aria-labelledby="chicken-2">
                        <div className="menu-items-wrapper pizza-items-wrapper  margin-top-50">
                            <Row>
                                <Col lg={8}>
                                    <Row>
                                        <TabItem colNumber="6" img="/images/menu-item/tc6.png" prodName="Chicken Fried" note="shirmp. squid, pineapple" price="18.00" />
                                        <TabItem colNumber="6" img="/images/menu-item/tc6.png" prodName="Chicken Roast" note="shirmp. squid, pineapple" price="15.00" />
                                        <TabItem colNumber="6" img="/images/menu-item/tc6.png" prodName="Chicken Fly" note="shirmp. squid, pineapple" price="16.00" />
                                        <TabItem colNumber="6" img="/images/menu-item/tc6.png" prodName="Chicken Roast" note="shirmp. squid, pineapple" price="17.00" />
                                    </Row>
                                </Col>
                                <Col lg={4}>
                                    <ChickenContent text1="Super" text2="Combo Burger" note="Shrimp, Squip" price="15" />
                                </Col>
                            </Row>
                        </div>
                    </div>
                    <div className="tab-pane fade" id="chicken-3" role="tabpanel" aria-labelledby="chicken-3">
                        <div className="menu-items-wrapper pizza-items-wrapper  margin-top-50">
                            <Row>
                                <Col lg={8}>
                                    <Row>
                                        <TabItem colNumber="6" img="/images/menu-item/tc9.png" prodName="Roast Chicken" note="shirmp. squid, pineapple" price="17.00" />
                                        <TabItem colNumber="6" img="/images/menu-item/tc9.png" prodName="Fried Chicken" note="shirmp. squid, pineapple" price="15.00" />
                                        <TabItem colNumber="6" img="/images/menu-item/tc9.png" prodName="Crispy Fly" note="shirmp. squid, pineapple" price="16.00" />
                                        <TabItem colNumber="6" img="/images/menu-item/tc9.png" prodName="Baked Roast" note="shirmp. squid, pineapple" price="18.00" />
                                    </Row>
                                </Col>
                                <Col lg={4}>
                                    <ChickenContent text1="Super" text2="Combo Burger" note="Shrimp, Squip" price="15" />
                                </Col>
                            </Row>
                        </div>
                    </div>
                    <div className="tab-pane fade" id="chicken-4" role="tabpanel" aria-labelledby="chicken-4">
                        <div className="menu-items-wrapper pizza-items-wrapper  margin-top-50">
                            <Row>
                                <Col lg={8}>
                                    <Row>
                                        <TabItem colNumber="6" img="/images/menu-item/tc7.png" prodName="Fried Chicken" note="shirmp. squid, pineapple" price="19.00" />
                                        <TabItem colNumber="6" img="/images/menu-item/tc7.png" prodName="Roast Chicken" note="shirmp. squid, pineapple" price="15.00" />
                                        <TabItem colNumber="6" img="/images/menu-item/tc7.png" prodName="Crispy Fry" note="shirmp. squid, pineapple" price="14.00" />
                                        <TabItem colNumber="6" img="/images/menu-item/tc7.png" prodName="Baked Roast" note="shirmp. squid, pineapple" price="16.00" />
                                    </Row>
                                </Col>
                                <Col lg={4}>
                                    <ChickenContent text1="Super" text2="Combo Burger" note="Shrimp, Squip" price="15" />
                                </Col>
                            </Row>
                        </div>
                    </div>
                    <div className="tab-pane fade" id="chicken-5" role="tabpanel" aria-labelledby="chicken-5">
                        <div className="menu-items-wrapper pizza-items-wrapper  margin-top-50">
                            <Row>
                                <Col lg={8}>
                                    <Row>
                                        <TabItem colNumber="6" img="/images/menu-item/tc8.png" prodName="Fried Chicken" note="shirmp. squid, pineapple" price="16.00" />
                                        <TabItem colNumber="6" img="/images/menu-item/tc8.png" prodName="Roast Chicken" note="shirmp. squid, pineapple" price="15.00" />
                                        <TabItem colNumber="6" img="/images/menu-item/tc8.png" prodName="Crispy Fry" note="shirmp. squid, pineapple" price="14.00" />
                                        <TabItem colNumber="6" img="/images/menu-item/tc8.png" prodName="Baked Roast" note="shirmp. squid, pineapple" price="17.00" />
                                    </Row>
                                </Col>
                                <Col lg={4}>
                                    <ChickenContent text1="Super" text2="Combo Burger" note="Shrimp, Squip" price="15" />
                                </Col>
                            </Row>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    </>
}