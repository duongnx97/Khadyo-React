import { Link } from "react-router-dom";

export default function ChickenContent({ text1, text2, note, price }) {
    return (
        <div className="chicken-tab-content">
            <h5>{text1} <br />{text2}</h5>
            <p>{note}</p>
            <Link to="#">Order Now</Link>
            <span className='main-img'><img src="/images/menu-item/chicken-banner.png" alt="" /></span>
            <span className="gprice-2">$ {price}</span>
            <span className="gshape1"><img src="/images/shapes/38.png" alt="" /></span>
            <span className="gshape2"><img src="/images/shapes/39.png" alt="" /></span>
        </div>
    )
}