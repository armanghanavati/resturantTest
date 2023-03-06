import React, { useState } from 'react'
import { Button, Container, Row } from 'react-bootstrap'
import IranianFood from '../components/menu/IranianFood'
import FoodMenu from '../components/menu/PizzaMenu'
import SandevichFood from '../components/menu/SandevichFood'


const FoodMenuPage = () => {
    const [showPizzaTable, setShowPizzaTable] = useState(false)
    const [showIranianFoodTable, setShowIranianFoodTable] = useState(false)
    const [showSandevichFood, setShowSandevichFood] = useState(false)
    return (
        <Container fluid>
            <div className='d-flex justify-content-center p-3' >
                <h3> فهرست رستوران </h3>
            </div>
            <div className='d-flex justify-content-center' >
                <Button variant={showPizzaTable ? "warning" : "danger"} className='shadow m-3' onClick={() => setShowPizzaTable(!showPizzaTable)} > پیتزا </Button>
                <Button variant={showIranianFoodTable ? "warning" : "danger"} className='shadow m-3' onClick={() => setShowIranianFoodTable(!showIranianFoodTable)} > ایرانی </Button>
                <Button variant={showSandevichFood ? "warning" : "danger"} className='shadow m-3' onClick={() => setShowSandevichFood(!showSandevichFood)} > ساندویچ </Button>
            </div>
            {showPizzaTable && <FoodMenu />}
            {showIranianFoodTable && <IranianFood />}
            {showSandevichFood && <SandevichFood />}
        </Container >
    )
}

export default FoodMenuPage