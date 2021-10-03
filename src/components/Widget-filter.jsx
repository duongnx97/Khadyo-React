import { Link } from "react-router-dom";
import Filterproduct from '../components/Widget-filter-product'

export default function WidgetFilter() {
    return (
        <div className="single-widget filter-menu-widget  wow fadeInUp">
            <h6><Link to="#">filter by menu</Link></h6>
            <Filterproduct prodImg="fm1.png" prodName="Burger Food" prodNumber="20" />
            <Filterproduct prodImg="fm2.png" prodName="Chicken Fry" prodNumber="40" />
            <Filterproduct prodImg="fm3.png" prodName="Pizza" prodNumber="50" />
            <Filterproduct prodImg="fm4.png" prodName="Chicken Sharma" prodNumber="30" />
        </div>
    )
}