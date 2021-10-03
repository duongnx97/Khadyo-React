import { Container } from "react-bootstrap";
import Ctitle from '../components/Common-title';
import TeamS from '../components/Team-single'

export default function TeamArea() {
    return (
        <section className="team-area padding-bottom-110 padding-top-110 wow fadeInUp">
            <div className="team-area-shapes">
                <span className="ts-1"><img src="/images/shapes/pizza-s1.png" alt="" /></span>
                <span className="ts-2"><img src="/images/shapes/brr.png" alt="" /></span>
            </div>
            <Container>
                <Ctitle txtTop="team membar" txtBlue="professional" txtRed="chef" />
                <div className="team-slider-active">
                    <TeamS avatar="t1.png" name="Mathij Sen Deo" more="It is a long estanlished fact that a reader BBQ food Chicken." />
                    <TeamS avatar="t2.png" name="Malina Weissa" more="It is a long estanlished fact that a reader BBQ food Chicken." />
                    <TeamS avatar="t3.png" name="Tonmoy Khan" more="It is a long estanlished fact that a reader BBQ food Chicken." />
                    <TeamS avatar="t4.png" name="Mathja Semo" more="It is a long estanlished fact that a reader BBQ food Chicken." />
                    <TeamS avatar="t1.png" name="Mathij Sen Deo" more="It is a long estanlished fact that a reader BBQ food Chicken." />
                </div>
            </Container>
        </section>
    )
}