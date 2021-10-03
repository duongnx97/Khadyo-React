import { Col } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
// import swal from 'sweetalert';

export default function DishesSingle({ xl, lg, md, img, name, note, price, priceCl, badge, badgeCl, sendLike, id, isLike, needDelete, sendCart}) {

    const history = useHistory();

    const getFoodById = (id) => {
        history.push(`sfood/${id}`)
    }

    const deleteFood = (id) => {
        needDelete(id)
    }

    return (
        <Col xl={`${xl}`} lg={`${lg}`} md={`${md}`} className="wow fadeInUp">
            <div className="single-dishes">
                <div className="dish-img">
                    <img src={"/images/menu-item/" + img} className="img-inherit" alt="" />
                </div>
                <div className="dish-content">
                    <h5><Link to='#' onClick={() => getFoodById(id)}>{name}</Link></h5>
                    <p>{note}</p>
                    {
                        price !== ""
                            ? <span className="price">price: ${price}</span>
                            : priceCl !== ""
                                ? <span className="price badge-color">price: ${priceCl}</span>
                                : <></>
                    }
                </div>
                {
                    badge !== ""
                        ? <span className="badge">{badge}</span>
                        : badgeCl !== ""
                            ? <span className="badge badge-bg-color">{badgeCl}</span>
                            : <></>
                }
                <div className="cart-opt">
                    <span className={isLike ? "is-like" : ""}>
                        <Link to="#" onClick={() => sendLike(id)}>
                            <i className="fas fa-heart"></i>
                        </Link>
                    </span>
                    <span><Link to="#" onClick={() => sendCart(id)}><i className="fas fa-shopping-basket"></i></Link></span>
                    <span><Link to="#" onClick={() => deleteFood(id)}><i className="fas fa-trash"></i></Link></span>
                </div>
            </div>
        </Col>
    )
}