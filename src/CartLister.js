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
			quantity: 1,
			sizeOptionSelected: "S",
		}
	}

	handleOpen = (item) => {
		console.log("I'm being opened", item)
	    this.setState( prevState => ({ itemsInCart: this.state.itemsInCart.map(i => { 
			 	if( i.id === item.id ){
			 		i.modalState = true;
			 	}
			 		return i
				})
	   			 
		}));
	}

	handleClose = (itemId) => {
	    this.setState({ modalState: false });
	}

	handleInput(e){
    	let numOfItems = Number(e.target.value)
    	this.setState({ quantity: numOfItems })
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
			 		i.quantity = this.state.quantity;
			 		i.modalState = false;
			 	}
			 	return i
			 }),
		 	quantity: 0,
		 	sizeOptionSelected: ""
		 }))
	}

	removeFromCart(itemToRemove) {
		this.setState(prevState => ({
			itemsInCart: prevState.itemsInCart.filter(item => item.id !== itemToRemove.id)
		}))
	}

	render() {
		var cartList = this.state.itemsInCart.map( item =>  <Item key={item.id} item={item} onRemove={this.removeFromCart.bind(this)} handleInput={this.handleInput.bind(this)} handleSizeUpdate={this.handleSizeUpdate.bind(this)} handleEdit={this.handleEdit.bind(this)} openModal={this.handleOpen.bind(this)} /> )
		const prices = this.state.itemsInCart.map(item => (item.fullPrice - item.discountReduction) * item.quantity)
		const cartValueTotal = prices.reduce((acc, cur) => acc + cur);
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
				<div className="cart-footer">
					<div className="help-section">
						<div className="help-sub-section">
							Need help or have questions?
						</div>
						<div className="help-sub-section">
							Call Customer Service At
							<div>
								1-800-555-5555
							</div>	
						</div>
						<div className="help-sub-section">
							Chat with one of our stylists
						</div>
						<div className="help-sub-section">
							See return or exchange police
						</div>
					</div>
					<div className="total-section">
						<div className="sub-total">
							<div className="sub-total-text">SUB TOTAL</div>
							<div className="sub-total-value">${cartValueTotal.toFixed(2)}</div>
						</div>
						<div className="promo-code">
							PROMOTION CODE
							<div className="promo-total-value">${(0).toFixed(2)}</div>
						</div>
						<div className="shipping-info">
							ESTIMATED SHIPPING
							<div className="shipping-total-value">FREE</div>
						</div>
						<div className="item-lister-decorative-line"></div>
						<div className="estimated-total">
							ESTIMATED TOTAL
							<div className="estimated-total-value">${(cartValueTotal - 0).toFixed(2)}</div>
						</div>
						<div className="item-lister-decorative-line-bottom"></div>
					</div>
				</div>
			</div>
		)
	}
}

export default CartLister;

