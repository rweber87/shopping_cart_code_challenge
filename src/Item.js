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
			discountReduction: props.item.discountReduction,
			numOfItemsSelected: props.item.numOfItemsSelected
		}
	}

	render () {
		console.log(this.state)
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
					<a>Edit  |</a>
					<a onClick={() => this.props.onRemove(this.state)}>  X Remove Item  |</a>
					<a>  Save For Later</a>
				</div>
				<div>
					<div className="item-size">{this.state.sizeSelected}</div>
				</div>
				<div>
					<div className="item-selected">{this.state.numOfItemsSelected}</div>
				</div>
				<div>
					<div className="item-price">${(this.state.price)}</div>
				</div>
			</div>

		);
	};
};

export default Item;