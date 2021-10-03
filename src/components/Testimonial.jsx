import { Container } from "react-bootstrap";
import Stestimonial from '../components/Testimonial-single'

export default function Testimonial() {
    return (
        <section className="testimonial padding-bottom-120 padding-top-110">
            <Container>
                <div className="testi-shapes">
                    <span className="ts-1"><img src="/images/img/31.png" alt="" /></span>
                    <span className="ts-2"><img src="/images/img/32.png" alt="" /></span>
                    <span className="ts-3 item-animateTwo"><img src="/images/shapes/7.png" alt="" /></span>
                    <span className="ts-4"><img src="/images/shapes/26.png" alt="" /></span>
                </div>

                <div className="testimonial-active">
                    <Stestimonial
                        img="/images/testimonial/testi-1.png"
                        name="Christ Deo" position="CEO A4Tech Ltd."
                        more="Food Khan is a gret Restaurant from the University of Texas at Austin has been researching the benefits of frequent testing and the feedback leads to. He explains that in the history of the study."
                    />
                    <Stestimonial
                        img="/images/testimonial/testi-2.png"
                        name="Lipayka Maya" position="CEO SoftTechit Ltd."
                        more="Food Khan is a gret Restaurant from the University of Texas at Austin has been researching the benefits of frequent testing and the feedback leads to. He explains that in the history of the study."
                    />
                    <Stestimonial
                        img="/images/testimonial/testi-1.png"
                        name="Christ Deo" position="CEO A4Tech Ltd."
                        more="Food Khan is a gret Restaurant from the University of Texas at Austin has been researching the benefits of frequent testing and the feedback leads to. He explains that in the history of the study."
                    />
                    <Stestimonial
                        img="/images/testimonial/testi-2.png"
                        name="Lipayka Maya" position="CEO SoftTechit Ltd."
                        more="Food Khan is a gret Restaurant from the University of Texas at Austin has been researching the benefits of frequent testing and the feedback leads to. He explains that in the history of the study."
                    />
                    <Stestimonial
                        img="/images/testimonial/testi-1.png"
                        name="Christ Deo" position="CEO A4Tech Ltd."
                        more="Food Khan is a gret Restaurant from the University of Texas at Austin has been researching the benefits of frequent testing and the feedback leads to. He explains that in the history of the study."
                    />
                    <Stestimonial
                        img="/images/testimonial/testi-2.png"
                        name="Lipayka Maya" position="CEO SoftTechit Ltd."
                        more="Food Khan is a gret Restaurant from the University of Texas at Austin has been researching the benefits of frequent testing and the feedback leads to. He explains that in the history of the study."
                    />
                </div>
            </Container>
        </section>
    )
}