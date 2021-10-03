import { Col } from "react-bootstrap";

export default function FoodsCounterItem({lg, md, iconsImg, fNumber, fName, fColor}) {
    return (
        <Col lg={`${lg}`} md={`${md}`}>
            <div className={"single-food text-center " + fColor}>
                <img src={"/images/icons/" + iconsImg} alt="" />
                <span className="items counter">{fNumber}</span>
                <p>{fName}</p>
                <span className="g-s-4"><img src="/images/shapes/10.png" alt="" /></span>
                <span className="g-s-5"><img src="/images/shapes/14.png" alt="" /></span>
            </div>
        </Col>
    )
}