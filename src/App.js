import React from "react";
import {createStore} from 'redux'; 
import {Provider} from 'react-redux';
// components
import Navbar from "./components/Navbar";
import CartContainer from "./components/CartContainer";
// items
import cartItems from "./cart-items";
// redux stuff
import {reducer} from './reducer'; 
function App() {
  const initStore = {
    cart: cartItems, 
    total: 0, 
    amount: 0
  };

  const store = createStore(reducer, initStore);
  // cart setup


  return (
    <Provider store={store}>
      <Navbar />
      <CartContainer />
    </Provider>
  );
}

export default App;
