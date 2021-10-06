import {INCREASE, DECREASE, CLEAR_CART, REMOVE} from './actions';
// reducer
export const reducer = (state, action) => {
    if(action.type === CLEAR_CART) {
        return {...state, cart: []}; 
    }
    if(action.type === DECREASE) {
        console.log('decrease'); 
    }
    if(action.type === INCREASE) {
        console.log('increase'); 

    }
    if(action.type === REMOVE) {
        const updatedCart = state.cart.filter(item => item.id !== action.payload.id); 
        return {...state, cart: updatedCart}
    }

    return state;
  }; 