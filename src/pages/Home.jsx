import Headermenu from '../components/Headermenu';
import Banner from '../components/Banner';
import Bookingform from '../components/Bookingform';
import Aboutarea from '../components/Aboutarea';
import Popularmenu from '../components/Popularmenu';
import Dishesmenu from '../components/Dishesmenu';
import Countdown from '../components/Countdown';
import Testimonial from '../components/Testimonial';
import Gallery from '../components/Gallery';
import Delivery from '../components/Delivery';
import Homeblog from '../components/Home-blog';
import Footer from '../components/Footer';

export default function Home() {
    return <>
        {/* <Preloader /> */}
        <Headermenu />
        <Banner />
        <Bookingform />
        <Aboutarea />
        <Popularmenu />
        <Dishesmenu />
        <Countdown />
        <Testimonial />
        <Gallery />
        <Delivery />
        <Homeblog />
        <Footer />
    </>
}