import React, { Component } from 'react';
import CartLister from './CartLister'
import './Main.css';

class Main extends Component {
  render() {
    return (
      <div className="main">
      	<div className="cart">
      		<div className="cart-header-text">
      			<h2>YOUR SHOPPING CART</h2>
      			<p>If the cart is completely empty then we shall again add back the products for you</p>
      		</div>
      		<div className="cart-header-line"></div>
      		<CartLister />
      	</div>
      </div>
    );
  }
}

export default Main;
