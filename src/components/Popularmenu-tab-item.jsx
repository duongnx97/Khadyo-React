import { Col } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function PopularmenuTabItem({ xl, colNumber, img, prodName, note, price, delPrice }) {
    return (
        <Col xl={`${xl}`} lg={`${colNumber}`} md={`${colNumber}`}>
            <div className="single-menu-item d-flex justify-content-between  align-items-center">
                <div className="menu-img">
                    <img src={img} alt="" />
                </div>
                <div className="menu-content">
                    <h5><Link to="/#">{prodName}</Link></h5>
                    <p>{note}</p>
                    <span>Price: ${price}</span>
                    {
                        delPrice !== ""
                            ? <span className="del"><del>Price: ${delPrice}</del></span>
                            : <></>
                    }
                </div>
            </div>
        </Col>
    )
}