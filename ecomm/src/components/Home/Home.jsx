import React from 'react'
import { useCart } from '../../context/Context'
import Filters from '../Filters/Filters';
import SingleProduct from '../SingleProduct/SingleProduct';
import "./Home.css"
const Home = () => {

    const {state :{products}} = useCart();
    console.log(products)
    return (
        <div className ="home">
           <Filters/>
           <div className ="productContainer">
                {products.map((prod)=>{
                 return  <SingleProduct prod ={prod} key ={prod.id}/>
                })}
           </div>
            
        </div>
    )
}

export default Home
