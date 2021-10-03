import { Container, Col, Row } from "react-bootstrap"
import Headermenu from "../components/Headermenu"
import Breadcrumb from '../components/Breadcrumb'
import Footer from '../components/Footer'
import { Link } from "react-router-dom"
import { useSelector } from "react-redux"

export default function Page404() {
    const data = useSelector(state => state.carts)
    console.log('CART: ', data)
    return <>
        {/* <Preloader /> */}
        <Headermenu />
        <Breadcrumb pageName="Shopping Cart" />

        <div className="portfolio-info shopping-cart padding-top-120 padding-bottom-90">
            <Container>
                <form action="#">
                    <div className="upper-table margin-bottom-30">
                        <Row>
                            <Col lg={6} md={12} className="margin-bottom-30">
                                <div className="upper-t-left d-flex justify-content-between">
                                    <input type="text" placeholder="enter coupon" />
                                    <span><Link className="btn" to="#"> apply now</Link></span>
                                </div>
                            </Col>
                            <Col lg={6} md={12}>
                                <div className="upper-t-right d-flex justify-content-between">
                                    <Link className="btn" to="#">clear all</Link>
                                    <Link className="btn" to="#">update cart</Link>
                                </div>
                            </Col>
                        </Row>
                    </div>
                    <div>
                        <table className="table-one">
                            <thead className="table-one-head">
                                <tr className="table-one-tr">
                                    <th className="table-one-th">Product name</th>
                                    <th className="table-one-th">Price</th>
                                    <th className="table-one-th">Quantity</th>
                                    <th className="table-one-th text-center">Subtotal</th>
                                    <th className="table-one-th"></th>
                                </tr>
                            </thead>

                            <tbody>
                                {
                                    data.length > 0
                                        ? data.map(item =>
                                            <tr>
                                                <td>
                                                    <div className="d-flex align-items-center">
                                                        <div className=" d-none d-lg-block col-md-4">
                                                            <div className="table-img"><img src={"images/menu-item/" + item.foodimg} alt="" /></div>
                                                        </div>
                                                        <div className="col-12 col-sm-12 col-md-8">
                                                            <h5>{item.foodname}</h5>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>${item.foodprice}</td>
                                                <td>
                                                    <input type="number" className="form-control text-center" defaultValue="1" />
                                                </td>
                                                <td className="text-center">{item.foodprice}</td>
                                                <td>
                                                    <span className="remove"><i className="fas fa-plus"></i></span>
                                                </td>
                                            </tr>)
                                        : <tr>
                                            <td>no item</td>
                                            <td>$0</td>
                                            <td>
                                                <input type="number" className="form-control text-center" defaultValue="0" />
                                            </td>
                                            <td className="text-center">0</td>
                                            <td>
                                                <span className="remove"><i className="fas fa-plus"></i></span>
                                            </td>
                                        </tr>
                                }

                            </tbody>
                        </table>
                    </div>

                    <div className="row margin-top-60">
                        <div className="col-lg-5">
                            <div className="lower-table">
                                <h6>Proceed to Checkout</h6>
                                <div className="lower-table-info">
                                    <ul className="d-flex justify-content-between">
                                        <li className="sub">SUBTOTAL</li>
                                        <li>$40</li>
                                    </ul>
                                    <hr />
                                    <ul className="d-flex justify-content-between">
                                        <li>Grand Total</li>
                                        <li>$20</li>
                                    </ul>
                                    <button className="btn" type="submit">Proceed to checkout</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </Container>
        </div>

        <Footer />
    </>
}