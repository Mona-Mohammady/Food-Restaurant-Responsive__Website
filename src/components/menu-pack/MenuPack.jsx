import React ,{useEffect , useState} from 'react';
import { Container, Row, Col } from 'reactstrap'
import "./menu-pack.css";
import ProductCard from '../product-card/ProductCard';
import { fastFoodProducts, riceMenuProducts, pizzaProducts, dessertProducts, coffeeProducts } from '../../assets/fake-data/products';



const MenuPack = () => {

    const  [filter, setFilter] =useState('RICE-MENU');
    const [products, serProducts] = useState(riceMenuProducts);
    
    useEffect(()=>{
if(filter === 'RICE-MENU'){
    serProducts(riceMenuProducts)
}
if(filter === 'FAST-FOOD'){
    serProducts(fastFoodProducts)
}
if(filter === 'PIZZA'){
    serProducts(pizzaProducts)
}
if(filter === 'DESSERT'){
    serProducts(dessertProducts)
}
if(filter === 'COFFEE'){
    serProducts(coffeeProducts)
}


    },[filter])
    
    
    return <section>
        <Container>
            <Row>
                <Col lg='12' className='text-center mb-4'>
                    <h3 className='menu__title'> Our Menu Pack</h3></Col>
            <Col lg='12' className='text-center mb-5'> 
            <button 
            className={`filter-btn ${filter === 'FAST-FOOD' ? 'active__btn' : ''}`}
            onClick={()=> setFilter('FAST-FOOD')}> Fast Food</button>
            <button className={`filter-btn ${filter === 'RICE-MENU' ? 'active__btn' : ''}`}
             onClick={()=> setFilter('RICE-MENU')}> Rice Menu</button>
            <button className={`filter-btn ${filter === 'PIZZA' ? 'active__btn' : ''}`}
            onClick={()=> setFilter('PIZZA')} > Pizaa</button>
            <button className={`filter-btn ${filter === 'DESSERT' ? 'active__btn' : ''}`}
             onClick={()=> setFilter('DESSERT')}> Desserts</button>
            <button className={`filter-btn ${filter === 'COFFEE' ? 'active__btn' : ''}`}
             onClick={()=> setFilter('COFFEE')}> Coffee</button>
            </Col>
            {
                products.map(item=>(
                    <Col lg='3' md='4' sm='6' xs='6' key={item.id} className="mb-4">
                        
                        <ProductCard item={item}/></Col>
                    
                ))
            }
            </Row>
        </Container>
    </section>
}

export default MenuPack
