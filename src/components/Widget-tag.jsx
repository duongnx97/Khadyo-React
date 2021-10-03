import { Link } from "react-router-dom";

export default function WidgetTag() {
    return (
        <div className="single-widget tag-widget wow fadeInUp">
            <div className="widget-title">
                <h5>tags</h5>
            </div>
            <div className="tag-items">
                <ul>
                    <li><Link to="#">bbq</Link></li>
                    <li><Link to="#">tikka</Link></li>
                    <li><Link to="#">pizza</Link></li>
                    <li><Link to="#">chicken sharma</Link></li>
                    <li><Link to="#">garlic burger</Link></li>
                    <li><Link to="#">sandwich</Link></li>
                    <li><Link to="#">chicken soup</Link></li>
                </ul>
            </div>
        </div>
    )
}