import React from "react";
import {createStore} from 'redux'; 
// components
import Navbar from "./components/Navbar";
import CartContainer from "./components/CartContainer";
// items
import cartItems from "./cart-items";
import { INCREASE, DECREASE, RESET, CHANGE_NAME } from "./actions";
// redux stuff
import {reducer} from './reducer'; 
function App() {


  

  const initStore = {
    count: 0, 
    name: 'rejan' 
  };
  const store = createStore(reducer, initStore);
  store.dispatch({type: DECREASE}); 
  store.dispatch({type: RESET});
  store.dispatch({type: INCREASE});
  store.dispatch({type: CHANGE_NAME}); 
  console.log(store.getState()); 

  // cart setup


  return (
    <main>
      <Navbar cart={store.getState()}/>
      <CartContainer cart={cartItems} />
    </main>
  );
}

export default App;
