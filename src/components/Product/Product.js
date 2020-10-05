import React from 'react';

const Product = (props) => {

    const {name,id} = props.product ;
    const {addToCart,product} = props;

    return (
        <div style={{border:'2px solid red'}}>
            <h1>{name}</h1>
            <button onClick={()=>addToCart(product.id,product.name)} >Add to Cart</button>
        </div>
    );
};

export default Product;