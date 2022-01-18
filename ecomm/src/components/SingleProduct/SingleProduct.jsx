import React from 'react'

const SingleProduct = (props) => {
    const{name } = props.prod;
    return (
        <div>
           <span>{name}</span>
        </div>
    )
}

export default SingleProduct
