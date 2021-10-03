import { Link } from "react-router-dom";

export default function TeamSingle({avatar, name, more}) {
    return (
        <div className="single-team text-center">
            <div className="s-t-img">
                <img src={"/images/team/" + avatar} alt="" />
            </div>
            <div className="t-content">
                <h5>{name}</h5>
                <p>{more}</p>
            </div>
            <div className="t-social-b">
                <span className="follow">follow :</span>
                <span className="t-social"><Link to="#"><i className="fab fa-facebook"></i></Link></span>
                <span className="t-social"><Link to="#"><i className="fab fa-twitter"></i></Link></span>
                <span className="t-social"><Link to="#"><i className="fab fa-instagram"></i></Link></span>
                <span className="t-social"><Link to="#"><i className="fab fa-linkedin"></i></Link></span>
            </div>
        </div>
    )
}