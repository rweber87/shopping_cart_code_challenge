import React, { Component } from 'react';
import inventory from './inventory.js'
import Item from './Item'

class CartLister extends Component {
	constructor(props) {
		super(props);
		let cartSum = 0;
		this.state = {
			itemsInCart: inventory,
			itemCount: inventory.length,
			cartValueTotal: null,
			numOfItemsSelected: 1,
			sizeOptionSelected: "S"
		}
	}

	handleInput(e){
    	let numOfItems = Number(e.target.value)
    	this.setState({ numOfItemsSelected: numOfItems })
  	}

  	handleSizeUpdate(e){
    	let sizeOptionSelected = e.target.value
    	this.setState({ sizeOptionSelected: sizeOptionSelected })
  	}
	
	handleEdit(item){
		 this.setState( prevState => ({
		 	itemsInCart: this.state.itemsInCart.map(i => { 
			 	if( i.id === item.id ){
			 		i.sizeSelected = this.state.sizeOptionSelected;
			 		i.numOfItemsSelected = this.state.numOfItemsSelected
			 	}
			 	return i
			 }),
		 	numOfItemsSelected: 0,
		 	sizeOptionSelected: ""
		 }))
	}

	removeFromCart(itemToRemove) {
		this.setState(prevState => ({
			itemsInCart: prevState.itemsInCart.filter(item => item.id !== itemToRemove.id)
		}))
	}

	render() {
		var cartList = this.state.itemsInCart.map( item =>  <Item key={item.id} item={item} onRemove={this.removeFromCart.bind(this)} handleInput={this.handleInput.bind(this)} handleSizeUpdate={this.handleSizeUpdate.bind(this)} handleEdit={this.handleEdit.bind(this)}/> )
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
				<div>{this.state.cartValueTotal}</div>
			</div>
		)
	}
}

export default CartLister;

