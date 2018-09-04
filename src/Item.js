import React, { Component } from 'react';
import ReactModal from 'react-modal';

class Item extends Component {

	constructor(props) {
		super(props)

		this.state = {
			showModal: false,
			id: props.item.id,
			img: props.item.images,
			name: props.item.name,
			styleNum: props.item.styleNum,
			sizes: props.item.sizes,
			colorOptions: props.item.colors,
			color: props.item.colors[0],
			price: (props.item.fullPrice - props.item.discountReduction).toFixed(2),
			sizeSelected: props.item.sizeSelected,
			discountReduction: props.item.discountReduction,
			numOfItemsSelected: props.item.numOfItemsSelected,
			colorSelected: "blue"
		}
	}

	handleOpen = () => {
	    this.setState({ showModal: true });
	}

	handleClose = () => {
	    this.setState({ showModal: false });
	}

	createSelectItems() {
	     let items = [];         
	     for (let i = 0; i <= this.state.sizes; i++) {             
	          items.push(<option key={i} value={this.state.sizes[i]}>{this.state.sizes[i]}</option>);
	     }
	     return items;
	 }

	render () {
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
					<div className="item-functionality">
						<a onClick={this.handleOpen}>EDIT |</a>
						<a onClick={() => this.props.onRemove(this.state)}> X REMOVE ITEM |</a>
						<a>  SAVE FOR LATER</a>
					</div>
				</div>
				<div>
					<div className="item-size">{this.props.item.sizeSelected}</div>
				</div>
				<div>
					<div className="item-qty">{this.props.item.numOfItemsSelected}</div>
				</div>
				<div>
					<div className="item-price">${(this.state.price)}</div>
				</div>
				<ReactModal
					  className={"item-modal"}
					  overlayClassName={"item-modal-overlay"}
			          isOpen={this.state.showModal}
			          shouldCloseOnEsc={true}
			          onRequestClose={this.handleClose}
			          shouldCloseOnOverlayClick={true}
			        >
			        <div className="item-modal" >
			        	<div className="item-description-modal">
				        	<div className="item-name-modal">
								<div>{this.state.name}</div>
							</div>
							<div>
								<div className="item-price-modal">${(this.state.price)}</div>
							</div>
							<div className="item-descriptors-modal">
								<div>{this.state.styleNum}</div>
								<div>Color: {this.state.color}</div>
								<div>
									<select name="size-option" onChange={ e => this.props.handleSizeUpdate(e)}>
										{this.state.sizes.map((val, index) => {
        									return <option key={index} value={val}>{val}</option>;
    									})}
									</select>
									<input className="qty-selector" type="number" min="1" max="100" placeholder="1" onChange={ e => this.props.handleInput(e)} />
								</div>
							</div>
							<button className="edit-button-modal"  onClick={ e => this.props.handleEdit(this.state)}>EDIT</button>
						</div>
			        	<div className="item-image-modal">
							<img src={this.state.img[0]} />
						</div>
			        </div>
			    </ReactModal>
			</div>

		);
	};
};

export default Item;