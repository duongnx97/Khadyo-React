import { Link } from "react-router-dom";

export default function WidgetAds() {
    return (
        <div className="single-widget banner-widget  wow fadeInUp ">
            <div className="gallery-img-4">
                <h5>Super Combo Burger</h5>
                <Link to="#" className="btn">order now</Link>
                <img src="/images/gallery/22.png" alt="" />
                <span className="gprice-4"><img src="/images/gallery/25.png" alt="" /></span>
                <span className="gshape-1"><img src="/images/shapes/35.png" alt="" /></span>
            </div>
        </div>
    )
}