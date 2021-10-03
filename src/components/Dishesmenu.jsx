import { Container, Row } from "react-bootstrap"
import Sdishes from '../components/Dishes-single';
import Ctitle from '../components/Common-title';

export default function Dishesmenu() {
    return (
        <section className="popular-dishes-area padding-top-110 padding-bottom-110">
            <div className="pshapes">
                <span className="ps-1 item-animateTwo"><img src="/images/shapes/11.png" alt="" /></span>
                <span className="ps-2 item-animateTwo"><img src="/images/shapes/12.png" alt="" /></span>
                <span className="ps-3 item-bounce"><img src="/images/shapes/13.png" alt="" /></span>
                <span className="ps-4 item-bounce"><img src="/images/shapes/14.png" alt="" /></span>
                <span className="ps-5"><img src="/images/shapes/15.png" alt="" /></span>
                <span className="ps-6"><img src="/images/shapes/16.png" alt="" /></span>
            </div>
            <Container>
                <nav className="popular-tab-nav d-flex flex-wrap justify-content-between align-items-center">
                    <Ctitle txtTop="food items" txtBlue="popular" txtRed="dishes" />
                    <div className="nav padding-bottom-30 wow fadeInRight" id="nav-tab-1" role="tablist">
                        <a className="nav-link active" data-toggle="tab" href="#home">all items</a>
                        <a className="nav-link" data-toggle="tab" href="#tab-1">pizza</a>
                        <a className="nav-link" data-toggle="tab" href="#tab-2">burger</a>
                        <a className="nav-link" data-toggle="tab" href="#tab-3">chicken</a>
                        <a className="nav-link" data-toggle="tab" href="#tab-4">drinks</a>
                    </div>
                </nav>

                <div className="tab-content" id="nav-tabContent-1">
                    <div className="tab-pane fade show active" id="home">
                        <Row>
                            <Sdishes xl="3" lg="4" md="6" 
                                img="pd1.png"
                                name="Vegetable Pizza"
                                note="It is a long established fact that a reader BBQ food Chicken."
                                price="16.00" priceCl=""
                                badge="" badgeCl="hot"
                            />
                            <Sdishes xl="3" lg="4" md="6" 
                                img="pd2.png"
                                name="Vegetable Pizza"
                                note="It is a long established fact that a reader BBQ food Chicken."
                                price="16.00" priceCl=""
                                badge="" badgeCl="hot"
                            />
                            <Sdishes xl="3" lg="4" md="6" 
                                img="pd3.png"
                                name="Vegetable Pizza"
                                note="It is a long established fact that a reader BBQ food Chicken."
                                price="16.00" priceCl=""
                                badge="" badgeCl="hot"
                            />
                            <Sdishes xl="3" lg="4" md="6" 
                                img="pd4.png"
                                name="Vegetable Pizza"
                                note="It is a long established fact that a reader BBQ food Chicken."
                                price="16.00" priceCl=""
                                badge="" badgeCl="hot"
                            />
                            <Sdishes xl="3" lg="4" md="6" 
                                img="pd5.png"
                                name="Vegetable Pizza"
                                note="It is a long established fact that a reader BBQ food Chicken."
                                price="16.00" priceCl=""
                                badge="" badgeCl="hot"
                            />
                            <Sdishes xl="3" lg="4" md="6" 
                                img="pd6.png"
                                name="Vegetable Pizza"
                                note="It is a long established fact that a reader BBQ food Chicken."
                                price="16.00" priceCl=""
                                badge="" badgeCl="hot"
                            />
                            <Sdishes xl="3" lg="4" md="6" 
                                img="pd7.png"
                                name="Vegetable Pizza"
                                note="It is a long established fact that a reader BBQ food Chicken."
                                price="16.00" priceCl=""
                                badge="" badgeCl="hot"
                            />
                            <Sdishes xl="3" lg="4" md="6" 
                                img="pd8.png"
                                name="Vegetable Pizza"
                                note="It is a long established fact that a reader BBQ food Chicken."
                                price="16.00" priceCl=""
                                badge="" badgeCl="hot"
                            />
                        </Row>
                    </div>

                    <div className="tab-pane fade" id="tab-1">
                        <Row>
                            <Sdishes xl="3" lg="4" md="6" 
                                img="pd5.png"
                                name="Vegetable Pizza"
                                note="It is a long established fact that a reader BBQ food Chicken."
                                price="15.00" priceCl=""
                                badge="new" badgeCl=""
                            />
                            <Sdishes xl="3" lg="4" md="6" 
                                img="pd5.png"
                                name="Vegetable Pizza"
                                note="It is a long established fact that a reader BBQ food Chicken."
                                price="15.00" priceCl=""
                                badge="new" badgeCl=""
                            />
                            <Sdishes xl="3" lg="4" md="6" 
                                img="pd5.png"
                                name="Vegetable Pizza"
                                note="It is a long established fact that a reader BBQ food Chicken."
                                price="15.00" priceCl=""
                                badge="new" badgeCl=""
                            />
                            <Sdishes xl="3" lg="4" md="6" 
                                img="pd5.png"
                                name="Vegetable Pizza"
                                note="It is a long established fact that a reader BBQ food Chicken."
                                price="15.00" priceCl=""
                                badge="new" badgeCl=""
                            />
                            <Sdishes xl="3" lg="4" md="6" 
                                img="pd5.png"
                                name="Vegetable Pizza"
                                note="It is a long established fact that a reader BBQ food Chicken."
                                price="15.00" priceCl=""
                                badge="new" badgeCl=""
                            />
                            <Sdishes xl="3" lg="4" md="6" 
                                img="pd5.png"
                                name="Vegetable Pizza"
                                note="It is a long established fact that a reader BBQ food Chicken."
                                price="15.00" priceCl=""
                                badge="new" badgeCl=""
                            />
                            <Sdishes xl="3" lg="4" md="6" 
                                img="pd5.png"
                                name="Vegetable Pizza"
                                note="It is a long established fact that a reader BBQ food Chicken."
                                price="15.00" priceCl=""
                                badge="new" badgeCl=""
                            />
                            <Sdishes xl="3" lg="4" md="6" 
                                img="pd5.png"
                                name="Vegetable Pizza"
                                note="It is a long established fact that a reader BBQ food Chicken."
                                price="15.00" priceCl=""
                                badge="new" badgeCl=""
                            />
                        </Row>
                    </div>

                    <div className="tab-pane fade" id="tab-2">
                        <Row>
                            <Sdishes xl="3" lg="4" md="6" 
                                img="pd1.png"
                                name="Vegetable Pizza"
                                note="It is a long established fact that a reader BBQ food Chicken."
                                price="" priceCl="15.00"
                                badge="sale" badgeCl=""
                            />
                            <Sdishes xl="3" lg="4" md="6" 
                                img="pd1.png"
                                name="Vegetable Pizza"
                                note="It is a long established fact that a reader BBQ food Chicken."
                                price="" priceCl="15.00"
                                badge="sale" badgeCl=""
                            />
                            <Sdishes xl="3" lg="4" md="6" 
                                img="pd1.png"
                                name="Vegetable Pizza"
                                note="It is a long established fact that a reader BBQ food Chicken."
                                price="" priceCl="15.00"
                                badge="sale" badgeCl=""
                            />
                            <Sdishes xl="3" lg="4" md="6" 
                                img="pd1.png"
                                name="Vegetable Pizza"
                                note="It is a long established fact that a reader BBQ food Chicken."
                                price="" priceCl="15.00"
                                badge="sale" badgeCl=""
                            />
                            <Sdishes xl="3" lg="4" md="6" 
                                img="pd1.png"
                                name="Vegetable Pizza"
                                note="It is a long established fact that a reader BBQ food Chicken."
                                price="" priceCl="15.00"
                                badge="sale" badgeCl=""
                            />
                            <Sdishes xl="3" lg="4" md="6" 
                                img="pd1.png"
                                name="Vegetable Pizza"
                                note="It is a long established fact that a reader BBQ food Chicken."
                                price="" priceCl="15.00"
                                badge="sale" badgeCl=""
                            />
                            <Sdishes xl="3" lg="4" md="6" 
                                img="pd1.png"
                                name="Vegetable Pizza"
                                note="It is a long established fact that a reader BBQ food Chicken."
                                price="" priceCl="15.00"
                                badge="sale" badgeCl=""
                            />
                            <Sdishes xl="3" lg="4" md="6" 
                                img="pd1.png"
                                name="Vegetable Pizza"
                                note="It is a long established fact that a reader BBQ food Chicken."
                                price="" priceCl="15.00"
                                badge="sale" badgeCl=""
                            />
                        </Row>
                    </div>

                    <div className="tab-pane fade" id="tab-3">
                        <Row>
                            <Sdishes xl="3" lg="4" md="6" 
                                img="pd2.png"
                                name="Vegetable Pizza"
                                note="It is a long established fact that a reader BBQ food Chicken."
                                price="16.00" priceCl=""
                                badge="" badgeCl="hot"
                            />
                            <Sdishes xl="3" lg="4" md="6" 
                                img="pd2.png"
                                name="Vegetable Pizza"
                                note="It is a long established fact that a reader BBQ food Chicken."
                                price="16.00" priceCl=""
                                badge="" badgeCl="hot"
                            />
                            <Sdishes xl="3" lg="4" md="6" 
                                img="pd2.png"
                                name="Vegetable Pizza"
                                note="It is a long established fact that a reader BBQ food Chicken."
                                price="16.00" priceCl=""
                                badge="" badgeCl="hot"
                            />
                            <Sdishes xl="3" lg="4" md="6" 
                                img="pd2.png"
                                name="Vegetable Pizza"
                                note="It is a long established fact that a reader BBQ food Chicken."
                                price="16.00" priceCl=""
                                badge="" badgeCl="hot"
                            />
                        </Row>
                    </div>

                    <div className="tab-pane fade" id="tab-4">
                        <Row>
                            <Sdishes xl="3" lg="4" md="6" 
                                img="pd8.png"
                                name="Vegetable Pizza"
                                note="It is a long established fact that a reader BBQ food Chicken."
                                price="" priceCl="18.00"
                                badge="" badgeCl="hot"
                            />
                            <Sdishes xl="3" lg="4" md="6" 
                                img="pd8.png"
                                name="Vegetable Pizza"
                                note="It is a long established fact that a reader BBQ food Chicken."
                                price="" priceCl="18.00"
                                badge="" badgeCl="hot"
                            />
                            <Sdishes xl="3" lg="4" md="6" 
                                img="pd8.png"
                                name="Vegetable Pizza"
                                note="It is a long established fact that a reader BBQ food Chicken."
                                price="" priceCl="18.00"
                                badge="" badgeCl="hot"
                            />
                            <Sdishes xl="3" lg="4" md="6" 
                                img="pd8.png"
                                name="Vegetable Pizza"
                                note="It is a long established fact that a reader BBQ food Chicken."
                                price="" priceCl="18.00"
                                badge="" badgeCl="hot"
                            />
                        </Row>
                    </div>
                </div>
            </Container>
        </section>
    )
}