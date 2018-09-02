import React, { Component } from 'react';

class Item extends Component {

	constructor(props) {
		super(props)

		this.state = {
			img: props.item.images,
			name: props.item.name,
			price: props.item.full_price - props.item.discount_reduction,
			sizeSelected: "S",
			qtySelected: 1.00,
		}
	}

	render () {
		// debugger
		return(
			<div className="item">
				<div className="item-image">
					<img src={this.state.img[0]} />
				</div>
				<div className="item-content">
					<div>{this.state.name}</div>
					<div>${(this.state.price * this.state.qtySelected).toFixed(2)}</div>
				</div>
			</div>

		);
	};
};

export default Item;