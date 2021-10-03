import { Link } from "react-router-dom";

export default function WidgetFilterProduct({ prodImg, prodName, prodNumber }) {
    return (
        <div className="filter-menu d-flex align-items-center">
            <div className="dish-img">
                <Link to="#"> <img src={"/images/menu-item/" + prodImg} alt="" /></Link>
            </div>
            <div className="dish-content d-flex justify-content-between">
                <h6> <Link to="#">{prodName}</Link></h6>
                <span className="price">{prodNumber}</span>
            </div>
        </div>
    )
}