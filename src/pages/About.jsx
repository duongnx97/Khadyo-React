import Headermenu from "../components/Headermenu"
import Breadcrumb from '../components/Breadcrumb'
import Foodscounter from '../components/Foods-counter'
import Aboutarea from '../components/Aboutarea'
import Delicious from '../components/Delicious-food'
import Teamarea from '../components/Team-area'
import Testimonial from '../components/Testimonial';
import Gallery from '../components/Gallery';
import Delivery from '../components/Delivery';
import Homeblog from '../components/Home-blog';
import Footer from '../components/Footer'

export default function About() {
    return <>
        <Headermenu />
        <Breadcrumb pageName="About us" />

        <Foodscounter />
        <Aboutarea />
        <Delicious />
        <Teamarea />
        <Testimonial />
        <Gallery />
        <Delivery />
        <Homeblog />

        <Footer />
    </>
}