import { Col } from "react-bootstrap"
import { Link } from "react-router-dom"

export default function Menusfood({menuImg, menuName, note}) {
    return (
        <Col lg={3} md={6}>
            <div className="single-food single-menus">
                <img src={"/images/menu-item/" + menuImg} alt=""/>
                <h6>{menuName}</h6>
                <p>{note}</p>
                <Link to="#">Order Now</Link>
            </div>
        </Col>

    )
}