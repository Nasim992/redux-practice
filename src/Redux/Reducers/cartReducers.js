const { ADD_TO_CART, REMOVE_FROM_CART } = require("../Actions/CartActions");

const initialState = {
    cart : [],
    products : [  {name : 'Lenovo Laptop' , id:1},
    {name : 'Asus Laptop',id:2},
    {name : 'HP laptop',id:3},
    {name : 'Toshiba Laptop', id:4},
    {name : 'Acer Laptop', id:5}]
}
const cartReducers = (state = initialState,action) =>{

    switch(action.type) {
        case ADD_TO_CART:
       
            const newItem = {
                productId:action.id,
                name:action.name,
                cartId:state.cart.length + 1
            }
            const newCart = [...state.cart,newItem];
            return {...state,cart:newCart};
        case REMOVE_FROM_CART:
            const id = action.id;
            const remCart = state.cart.filter(item=> item.cartId!==id);
            return {...state,cart:remCart}
        default:
            return state;
    }
}

export default cartReducers;
