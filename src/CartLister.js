import React, { Component } from 'react';
import inventory from './inventory.js'
import Item from './Item'
class CartLister extends Component {

	constructor(props) {
		super(props);

		this.state = {
			itemsInCart: inventory,
			itemCount: inventory.length,
			cartTotal: 0,
			promoCodeBoolean: false,
		}
	}

	removeFromCart(item) {
		var updatedCart = this.state.itemsInCart.filter(item => item.id !== item.id)
		this.setState({
			products: updatedCart			
		})
	}

	render() {
		var cartList = this.state.itemsInCart.map( item =>  <Item item={item} /> )
		return(
			<div>
				<div className="item-lister-header">
					<div id="cart-size">{this.state.itemCount} ITEMS</div>
					<div id="size">SIZE</div>
					<div id="qty">QTY</div>
					<div id="price">PRICE</div>
				</div>
				<div className="item-lister-decorative-line"></div>
				{cartList}
			</div>
		)
	}
}

export default CartLister;

