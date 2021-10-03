import { Col } from "react-bootstrap";

export default function InfoSingle({infoImg, infoTitle, infoNote}) {
    return (
        <Col lg={4} md={4} className="wow fadeInUp">
            <div className="single-info d-flex flex-sm-row flex-md-column flex-lg-row justify-content-around align-items-center">
                <div className="info-img">
                    <img src={"/images/icons/"+infoImg} alt="" />
                </div>
                <div className="info-content text-center text-lg-left">
                    <h5>{infoTitle}</h5>
                    <p>{infoNote}</p>
                </div>
            </div>
        </Col>
    )
}