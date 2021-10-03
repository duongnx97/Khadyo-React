
import Hotproduct from '../components/Widget-hot-product'
export default function Widgethot() {
    return (
        <div className="single-widget product-widget  wow fadeInUp ">
            <h6 className="margin-bottom-10">Hot Sale Products</h6>
            <Hotproduct prodImg="pd6.png" prodName="Chicken Fry Recipe" prodPrice="10.00" />
            <Hotproduct prodImg="pd4.png" prodName="Chicken Soup Rejala" prodPrice="20.00" />
            <Hotproduct prodImg="pd7.png" prodName="The Best Black Frame" prodPrice="80.00" />
            <Hotproduct prodImg="pd8.png" prodName="Chicken Fire" prodPrice="65.00" />
        </div>
    )
}