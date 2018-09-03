import tshirt_blue from './images/tshirt_blue.jpeg';
import tshirt_green from './images/tshirt_green.jpeg';
import tshirt_red from './images/tshirt_red.jpeg';
import tshirt_yellow from './images/tshirt_yellow.jpeg';

var inventory = [
	{
		id: 1,
		name: "Cotton T-Shirt",
		images: [tshirt_blue, tshirt_green, tshirt_red, tshirt_yellow],
		styleNum: "MS13KT1906",
		sizes: ["S", "M", "L", "XL", "XXL"],
		colors: ["blue", "red", "yellow", "green"],
		fullPrice: 11.00,
		discountReduction: 0,
		numOfItemsSelected: 1
	},
	{
		id: 2,
		name: "Other Cotton T-Shirt",
		images: [tshirt_green, tshirt_blue, tshirt_red, tshirt_yellow],
		styleNum: "MS13KT1906",
		sizes: ["S", "M", "L", "XL", "XXL"],
		colors: ["blue", "red", "yellow", "green"],
		fullPrice: 17.00,
		discountReduction: 0,
		numOfItemsSelected: 1
	}
]

export default inventory;