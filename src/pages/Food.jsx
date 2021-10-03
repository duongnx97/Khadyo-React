import Headermenu from "../components/Headermenu"
import Breadcrumb from '../components/Breadcrumb'
import Footer from '../components/Footer'
import Foodshapes from '../components/Food-shapes'
import { Container, Row, Col, Modal, Button, Form, FloatingLabel } from "react-bootstrap"
import Filter from '../components/Widget-filter'
import Ads from '../components/Widget-ads'
import Hotproduct from '../components/Widget-hot'
import Tag from '../components/Widget-tag'
import { Link } from "react-router-dom"
import Foodi from '../components/Dishes-single';
import { useState, useEffect } from "react";
import FoodServices from '../services/FoodServices';
import Foodsearch from '../components/Food-search';
import swal from 'sweetalert';
import store from '../stateManagement/store';
import { addToCarts, getAllList } from '../stateManagement/actions';
import { useSelector } from "react-redux";

export default function Food() {

    let list = useSelector(state => state.foods)

    const [foodData, setFoodData] = useState(list);
    const [listFoods, setListFoods] = useState(list);
    const [foodName, setFoodName] = useState('');
    const [foodPrice, setFoodPrice] = useState('');
    const [foodNote, setFoodNote] = useState('');

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    // const getFoodById = () => {
    //     FoodServices.getFoodById(3).then(res => {
    //         console.log('HOME:', res)
    //         store.dispatch(addNewFood(res))
    //     })
    // }

    useEffect(() => {
        getListFood()
    }, []);

    const getListFood = () => {
        FoodServices.getAllFoods()
            .then(res => {
                store.dispatch(getAllList(res))
                setFoodData(res) // save data
                setListFoods(res)
            })
            .catch((error) => console.log('Error: ' + error))
    }

    const handleSearch = (value) => {
        const dataSearch = foodData.filter(item => item.foodname.toLowerCase().indexOf(value.toLowerCase()) > -1)
        setListFoods(dataSearch)
    };

    const handleChange = (value) => {
        switch (value) {
            case '1':
                const dataSorts = listFoods.sort((a, b) => (a.foodname > b.foodname) ? 1 : ((b.foodname > a.foodname) ? -1 : 0))
                setListFoods(dataSorts.map(item => item))
                break;
            case '2':
                const dataSort = listFoods.sort((a, b) => a.foodprice - b.foodprice)
                setListFoods(dataSort.map(item => item))
                break;
            case '3':
                const dataSortz = listFoods.sort((a, b) => b.foodprice - a.foodprice)
                setListFoods(dataSortz.map(item => item))
                break;
            default:
                break;
        }
    };

    const onLike = (id) => {
        const dataLike = listFoods.map(
            item => item.id === id
                ? { ...item, isLike: !item.isLike, foodlike: item.isLike ? item.foodlike - 10 : item.foodlike + 10 }
                : item
        )

        const dataToUpdate = dataLike.find(item => item.id === id)

        FoodServices.updateFood(dataToUpdate, id).then(res => { })
        setListFoods(dataLike)
        swal({ icon: "success", });
    };

    const sendToCarts = (id) => {
        swal({
            title: `Add to cart?`,
            icon: 'info',
            buttons: true,
            dangerMode: true,
        })
            .then((willDelete) => {
                if (willDelete) {
                    const cartFood = listFoods.find(item => item.id === id)
                    store.dispatch(addToCarts(cartFood))
                    swal('Add to cart completed!', {
                        icon: 'success',
                    });
                }
            });
    }

    const createFood = () => {
        let inum = Math.floor(Math.random() * 8) + 1
        FoodServices.createFood({
            foodimg: "pd" + inum + ".png",
            foodname: foodName,
            foodprice: foodPrice,
            foodlike: 0,
            foodnote: foodNote,
        })
            .then(res => getListFood())
            .catch(error => console.log(error))

        setShow(false)
        swal("Create food succsess!", {
            icon: "success",
            buttons: false,
            timer: 1000,
        });
    }

    const deleteFood = (id) => {
        swal({
            title: "Are you sure?",
            text: "Once deleted, you will not be able to recover this food!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then((willDelete) => {
                if (willDelete) {
                    FoodServices.deleteFood(id)
                        .then(res => {
                            swal("Delete food succsess!", {
                                icon: "success",
                                buttons: false,
                                timer: 1000,
                            })
                            getListFood()
                        })
                        .catch(error => console.log(error))
                } else {
                    swal("Your food is safe!");
                }
            });
    }

    return <>
        <Headermenu />
        <Breadcrumb pageName="Food Shop" />

        {/* food-area-wrapper */}
        <section className="food-area-wrapper">
            <Foodshapes />
            <Container className="padding-top-120 padding-bottom-120">
                <Row>
                    <Col lg={3} md={4}>
                        <Foodsearch keyWord={(value) => handleSearch(value)} />
                        <Hotproduct />
                        <Filter />
                        <Tag />
                        <Ads />
                    </Col>
                    <Col lg={9} md={8}>
                        {/* food area */}
                        <section className="food-area  popular-dishes-area">
                            <Container>
                                <nav className="popular-tab-nav d-flex flex-wrap justify-content-between align-items-center margin-bottom-60">
                                    <div className="nav" id="nav-tab-1" role="tablist">
                                        <a className="nav-link active" id="food1-tab" data-toggle="tab" href="#food1">
                                            <span><i className="fas fa-fire"></i></span>
                                        </a>
                                        <a className="nav-link" id="food2-tab" data-toggle="tab" href="#food2">
                                            <span><i className="fas fa-heart"></i></span>
                                        </a>
                                        <Link to="#" className="nav-link" onClick={handleShow}>
                                            <span><i className="fas fa-plus"></i></span>
                                        </Link>
                                    </div>
                                    <span> {"There are " + listFoods.length + " Product"} </span>
                                    <div className="sorting-area">
                                        <span>Sort by price: </span>
                                        <span>
                                            <select onClick={(e) => handleChange(e.target.value)}>
                                                <option value='1'>None</option>
                                                <option value='2'>Low to hight</option>
                                                <option value='3'>High to low</option>
                                            </select>
                                        </span>
                                    </div>
                                </nav>
                                {/* main-content */}
                                <div className="tab-content" id="nav-tabContent-1">
                                    {/* food 1 */}
                                    <div className="tab-pane fade show active" id="food1">
                                        <Row>
                                            {
                                                listFoods.length > 0
                                                    ? listFoods.map(item =>
                                                        <Foodi key={item.id} id={item.id}
                                                            sendLike={(value) => onLike(value)} isLike={item.isLike}
                                                            sendCart={(value) => sendToCarts(value)}
                                                            xl="4" lg="4" md="6"
                                                            img={item.foodimg}
                                                            name={item.foodname}
                                                            note={item.foodnote}
                                                            price={item.foodprice + ".00"} badgeCl={"+" + item.foodlike + " Like"}
                                                            priceCl="" badge=""
                                                            needDelete={(value) => deleteFood(value)}
                                                        />)
                                                    : null
                                            }
                                        </Row>
                                    </div>
                                    {/* food 2 */}
                                    <div className="tab-pane fade" id="food2">
                                        <Row>
                                            {
                                                listFoods.length > 0
                                                    ? listFoods.filter(food => food.foodlike >= 100).map(item =>
                                                        <Foodi key={item.id} id={item.id}
                                                            sendLike={(value) => onLike(value)} isLike={item.isLike}
                                                            xl="4" lg="4" md="6"
                                                            img={item.foodimg}
                                                            name={item.foodname}
                                                            note={item.foodnote}
                                                            price={item.foodprice + ".00"} badgeCl={"+" + item.foodlike + " Like"}
                                                            priceCl="" badge=""
                                                        />)
                                                    : null
                                            }
                                        </Row>
                                    </div>
                                </div>
                            </Container>

                            {/* pagination-area */}
                            <div className="pagination-area">
                                <Container>
                                    <div className="pagination">
                                        <Link to="#" className="active">01</Link>
                                        <Link to="#">02</Link>
                                        <Link to="#">03</Link>
                                    </div>
                                </Container>
                            </div>
                        </section>
                    </Col>
                </Row>
            </Container>
        </section>

        <Modal size="lg" show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Create Food</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Food name</Form.Label>
                        <Form.Control type="text" name="foodname" placeholder="Enter food name"
                            onChange={(e) => setFoodName(e.target.value)}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Food price</Form.Label>
                        <Form.Control type="number" name="foodprice" placeholder="Enter price"
                            onChange={(e) => setFoodPrice(e.target.value)}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Food name</Form.Label>
                        <FloatingLabel controlId="floatingTextarea" label="Comments" className="mb-3">
                            <Form.Control as="textarea" placeholder="Leave a comment here" style={{ height: '100px' }}
                                onChange={(e) => setFoodNote(e.target.value)}
                            />
                        </FloatingLabel>
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>Close</Button>
                <Button variant="primary" onClick={createFood}>Add new</Button>
            </Modal.Footer>
        </Modal>

        <Footer />
    </>
}