import React from 'react';
import Product from '../Product';
import {addToCart} from '../../../Redux/Actions/CartActions';
import { connect } from 'react-redux';
const Shop = (props) => {
    console.log(props); 
    const {products,addToCart} = props;
    
    return (
        <div>
            {
                products.map(pd => <Product product={pd}key = {pd.id} 
                    addToCart = {addToCart}
                    ></Product>)
            }
        </div>
    );
};

const mapStateToProps = state => {
    return {
        cart : state.cart,
        products: state.products
    }
}

const mapDispatchToProps = {
    addToCart : addToCart
}

// const connectToStore  = connect(mapStateToProps,mapDispatchToProps);
// connectToStore(Shop);
 

export default connect(mapStateToProps,mapDispatchToProps)(Shop);