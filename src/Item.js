import React, { Component } from 'react';

class Item extends Component {

	constructor(props) {
		super(props)

		this.state = {
			id: props.item.id,
			img: props.item.images,
			name: props.item.name,
			styleNum: props.item.styleNum,
			colorOptions: props.item.colors,
			color: props.item.colors[0],
			price: (props.item.fullPrice - props.item.discountReduction).toFixed(2),
			sizeSelected: "S",
			qtySelected: this.props.numOfItemsSelected,
		}
	}

	render () {
		console.log("state in item.js",this.state)
		return(
			<div className="item">
				<div className="item-image">
					<img src={this.state.img[0]} />
				</div>
				<div className="item-content">
					<div className="item-name">
						<div>{this.state.name}</div>
					</div>
					<div className="item-descriptors">
						<div>Style #: {this.state.styleNum}</div>
						<div>Color: {this.state.color}</div>
					</div>
					<div>
						<div>{this.state.sizeSelected}</div>
					</div>
					<div>
						<div>${(this.state.price)}</div>
					</div>
					<a onClick={() => this.props.onRemove(this.state)}>X Remove Item</a>
				</div>
			</div>

		);
	};
};

export default Item;