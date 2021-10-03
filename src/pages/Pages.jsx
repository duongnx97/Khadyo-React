import {
    BrowserRouter as Router,
    Route
} from "react-router-dom";
import Home from './Home';
import Homepage2 from './Homepage2';
import Homepage3 from './Homepage3';
import Comingsoon from './Comingsoon';
import Signin from './Signin';
import Signup from './Signup';
import Singledish from './Singledish';
import About from './About';
import Menu from './Menu';
import Checkout from './Checkout';
import Contact from './Contact';
import Blog from './Blog';
import Post from './Post';
import Food from './Food';
import Singlefood from './Singlefood';
import Cart from './Cart';
// import Errorpage from './404';

export default function Pages() {
    return (
        <Router>
            <Route path='/' component={Home} exact />
            <Route path='/homepage2' component={Homepage2} />
            <Route path='/homepage3' component={Homepage3} />
            <Route path='/about' component={About} />
            <Route path='/signin' component={Signin} />
            <Route path='/signup' component={Signup} />
            <Route path='/singledish' component={Singledish} />
            <Route path='/menu' component={Menu} />
            <Route path='/contact' component={Contact} />
            <Route path='/blog' component={Blog} />
            <Route path='/post' component={Post} />
            <Route path='/food' component={Food} />
            <Route path='/sfood/:foodId' component={Singlefood} />
            <Route path='/cart' component={Cart} />
            <Route path='/checkout' component={Checkout} />
            <Route path='/comingsoon' component={Comingsoon} />
            {/* <Route path='/*' component={Errorpage} /> */}
        </Router>
    )
}