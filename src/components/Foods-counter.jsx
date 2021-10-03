
import { Container, Row } from "react-bootstrap"
import Foodsitem from '../components/Foods-counter-item'

export default function FoodsCounter() {
    return <>
        <div className="foods-counter">
            <Container>
                <Row className="foods-wrapper">
                    <Foodsitem lg="3" md="6" iconsImg="3.png" fNumber="2000" fName="Food item" fColor="" />
                    <Foodsitem lg="3" md="6" iconsImg="f-2.png" fNumber="500" fName="Burger food item" fColor="orange" />
                    <Foodsitem lg="3" md="6" iconsImg="f-3.png" fNumber="1000" fName="Soft drinks item" fColor="" />
                    <Foodsitem lg="3" md="6" iconsImg="f-4.png" fNumber="600" fName="Delicious fast food" fColor="orange" />
                </Row>
            </Container>
        </div>
    </>
}