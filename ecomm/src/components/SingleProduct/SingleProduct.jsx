import React from 'react'
import { Card , Button } from 'react-bootstrap';
import { useCart } from '../../context/Context';
import Rating from "../Filters/Rating"
import "../Home/Home.css"
const SingleProduct = ({prod}) => {
    const  {state :{cart}, dispatch} = useCart();

    console.log(cart)
    return (
        <div className="products">
           <Card>
               <Card.Img variant="top"  src={prod.image} alt={prod.name}/>
               <Card.Body>
                   <Card.Title>{prod.name}</Card.Title>
                   <Card.Subtitle style={{paddingBottom:10}}>
                        <span>Rs {prod.price.split(".")[0]}</span>
                        {prod.fastDelivery ?(<div>Fast Delivery</div>):(<div>4 Days Delivery</div>)}
                        <Rating rating={prod.rating}/>
                   </Card.Subtitle>
                       
                            <Button onClick={()=>{
                                dispatch
                                ({type:"ADD_TO_CART" ,payload:prod})
                            }}
                             disabled= {!prod.inStock}>

                            {!prod.inStock ? "Out of stock" :"add to cart"}
                        </Button>
                       
                 
                  
                
               </Card.Body>


           </Card>
        </div>
    )
}

export default SingleProduct
