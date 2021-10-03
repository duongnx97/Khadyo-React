import { Link } from "react-router-dom";

export default function GallerySingle({galleryImg}) {
    return (
        <div className="single-gallery-img">
            <img src={"/images/gallery/" + galleryImg} alt="" />
            <Link to="#"><span><i className="fas fa-image"></i></span></Link>
        </div>
    )
}