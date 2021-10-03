import { Container } from 'react-bootstrap';
import Ctitle from '../components/Common-title';
import BlogS from '../components/Home-blog-single';

export default function Homeblog() {
    return (
        <section className="blog-area padding-top-110 padding-bottom-120">
            <div className="blog-shapes">
                <span className="bs-1"><img src="/images/img/37.png" alt="" /></span>
            </div>
            <Container>
                <Ctitle txtTop="food khan" txtBlue="blog and" txtRed="news" />
                <div className="blog-slider-active">
                    <BlogS
                        blogImg="b-1.jpg" day="02" month="dec"
                        tag="chicken burger" author="milone hridoy"
                        title="Fame day burger with homemade"
                    />
                    <BlogS
                        blogImg="b-2.jpg" day="02" month="dec"
                        tag="pizza" author="milone hridoy"
                        title="delicious pizza with on a wooden"
                    />
                    <BlogS
                        blogImg="b-1.jpg" day="02" month="dec"
                        tag="chicken burger" author="milone hridoy"
                        title="Fame day burger with homemade"
                    />
                    <BlogS
                        blogImg="b-2.jpg" day="02" month="dec"
                        tag="pizza" author="milone hridoy"
                        title="delicious pizza with on a wooden"
                    />
                    <BlogS
                        blogImg="b-1.jpg" day="02" month="dec"
                        tag="chicken burger" author="milone hridoy"
                        title="Fame day burger with homemade"
                    />
                    <BlogS
                        blogImg="b-2.jpg" day="02" month="dec"
                        tag="pizza" author="milone hridoy"
                        title="delicious pizza with on a wooden"
                    />
                </div>
            </Container>
        </section>
    )
}