import tshirt_blue from './images/tshirt_blue.jpeg';
import tshirt_green from './images/tshirt_green.jpeg';
import tshirt_red from './images/tshirt_red.jpeg';
import tshirt_yellow from './images/tshirt_yellow.jpeg';

var inventory = [
	{
		id: 1,
		name: "COTTON T-SHIRT",
		images: [tshirt_blue, tshirt_green, tshirt_red, tshirt_yellow],
		styleNum: "MS13KT1906",
		sizes: ["S", "M", "L", "XL", "XXL"],
		colors: ["blue", "red", "yellow", "green"],
		fullPrice: 11.00,
		discountReduction: null,
		numOfItemsSelected: 1.00,
		sizeSelected: "S"
	},
	{
		id: 2,
		name: "OTHER COTTON T-SHIRT",
		images: [tshirt_green, tshirt_blue, tshirt_red, tshirt_yellow],
		styleNum: "MS13KT1906",
		sizes: ["S", "M", "L", "XL", "XXL"],
		colors: ["green", "blue", "red", "yellow" ],
		fullPrice: 17.00,
		discountReduction: null,
		numOfItemsSelected: 1.00,
		sizeSelected: "S"
	}
]

export default inventory;