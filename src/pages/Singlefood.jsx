import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import Breadcrumb from "../components/Breadcrumb";
import Footer from "../components/Footer";
import Headermenu from "../components/Headermenu";
import Chickenmenu from '../components/Menu-chicken';
import { useParams } from "react-router";
import { useSelector } from "react-redux";
import swal from 'sweetalert';
import store from '../stateManagement/store';
import { addToCarts} from '../stateManagement/actions'

export default function SingleFood() {

    const ssfood = useSelector( state => state.foods)

    const params = useParams();
    const { foodId } = params
    // const [food, setFood] = useState('');
    const food = ssfood.find(item => item.id.toString() === foodId)

    // useEffect(() => {
    //     FoodServices.getFoodById(foodId)
    //         .then(res => { setFood(res) })
    //         .catch((error) => console.log('Error: ' + error))
    // }, []);

    const sendToCarts = () => {
        swal({
            title: `Add to cart?`,
            icon: 'info',
            buttons: true,
            dangerMode: true,
        })
            .then((willDelete) => {
                if (willDelete) {
                    store.dispatch(addToCarts(food))
                    swal('Add to cart completed!', {
                        icon: 'success',
                    });
                }
            });
    }

    return <>
        <Headermenu />
        <Breadcrumb pageName="SingleFood" />

        {/* <!-- chicken-recipe-area --> */}
        <section className="chicken-recipe-area padding-top-115 padding-bottom-80">
            <Container>
                <Row className="align-items-center">
                    <Col lg={6} className="margin-bottom-30 wow fadeInLeft">
                        <div className="recipe-left">
                            <div className="slider-for">
                                <div className="single-slide">
                                    <div className="product-content">
                                        <img className="mp" src="/images/img/br1.png" alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col lg={6} className="wow fadeInRight">
                        <div className="recipe-right">
                            <h2>{food.foodname}</h2>
                            <div>
                                <div className="chickens-inforbar d-flex justify-content-around align-items-center">
                                    <span className="cp">${food.foodprice}.00 <del>$85.00</del></span>
                                    {/* <span className="rate"> 5<i className="fas fa-star"></i></span> */}
                                    <span> <span className="colored"><i className="fas fa-comments"></i></span> comment</span>
                                    <span> <span className="colored"><i className="fas fa-heart"></i></span>{food.foodlike}+ like</span>
                                </div>
                                <p>Thing lesser replenish evening called void a sea blessed meat fourth called moveth place
                                    Quarter Rack of Ribs served with your choice of side Pulled Pork, Beer Braised Brisket.
                                </p>
                                <div className="chickens-details d-flex justify-content-between">
                                    <span>
                                        <label>Quantity </label>
                                        <input type="number" placeholder="01" />
                                    </span>
                                    <span>
                                        <label>Available stock </label>
                                        <input id="stock" type="number" placeholder="60" />
                                    </span>
                                </div>
                                <div className="chickens-meta">
                                    <ul className="d-flex justify-content-between">
                                        <li>Tag: <span>Food Collections</span></li>
                                        <li>Category: <span>Recipe</span></li>
                                    </ul>
                                </div>
                                <button onClick={sendToCarts} className="btn">add to cart</button>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>

        {/* Banner burger */}
        <section className="banner-gallery pizza-banner padding-top-50 padding-bottom-50">
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

        <Chickenmenu />
        <Footer />
    </>
}