import React, { Component } from 'react';
import inventory from './inventory.js'
import Item from './Item'

class CartLister extends Component {

	
	constructor(props) {
		super(props);

		this.state = {
			itemsInCart: inventory,
			itemCount: inventory.length,
			cartValueTotal: inventory.forEach(function(item){ 
				let sum = 0 
				sum += (item.numOfItemsSelected * (item.fullPrice - item.discountReduction))
			}),
			promoCodeBoolean: false,
		}
	}

	
	handleEditItem(item){

	}

	removeFromCart(itemToRemove) {
		this.setState(prevState => ({
			itemsInCart: prevState.itemsInCart.filter(item => item.id !== itemToRemove.id)
		}))
	}

	render() {
		var cartList = this.state.itemsInCart.map( item =>  <Item key={item.id} item={item} onRemove={this.removeFromCart.bind(this)} /> )
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
				<div className="item-lister-decorative-line-bottom"></div>
			</div>
		)
	}
}

export default CartLister;

