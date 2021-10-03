import { Link } from "react-router-dom";

export default function WidgetHotProcuct({ prodImg, prodName, prodPrice }) {
    return (
        <div className="single-product d-flex align-items-center">
            <div className="dish-img">
                <Link to="single-dish.html"><img src={"/images/menu-item/" + prodImg} alt="" /></Link>
            </div>
            <div className="dish-content">
                <h6>
                    <Link to="single-dish.html">{prodName}</Link>
                </h6>
                <span className="price">${prodPrice}</span>
                <span>
                    <Link to="shopping-cart.html" className="cart-select">
                        <i className="fas fa-shopping-basket"></i>
                    </Link>
                </span>
            </div>
        </div>
    )
}