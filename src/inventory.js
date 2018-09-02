import tshirt_blue from './images/tshirt_blue.jpeg';
import tshirt_green from './images/tshirt_green.jpeg';
import tshirt_red from './images/tshirt_red.jpeg';
import tshirt_yellow from './images/tshirt_yellow.jpeg';

var inventory = [
	{
		id: 1,
		name: "Cotton T-Shirt",
		images: [tshirt_blue, tshirt_green, tshirt_red, tshirt_yellow],
		style_num: "MS13KT1906",
		sizes: ["S", "M", "L", "XL", "XXL"],
		colors: ["blue", "red", "yellow", "green"],
		full_price: 11.00,
		discount_reduction: 0,
	},
	{
		id: 2,
		name: "Other Cotton T-Shirt",
		images: [tshirt_blue, tshirt_green, tshirt_red, tshirt_yellow],
		style_num: "MS13KT1906",
		sizes: ["S", "M", "L", "XL", "XXL"],
		colors: ["blue", "red", "yellow", "green"],
		full_price: 17.00,
		discount_reduction: 0,
	},
	// {
	//	id: 3,
	// 	name: "Cotton T-Shirt"
	// 	images: "",
	// 	sizes: ["S", "M", "L", "XL", "XXL"],
	// 	colors: ["blue", "red", "yellow", "green"],
	// 	full_price: 21.00,
	// 	discount_price: 12.00,
	// },
	// {
	//	id: 4,
	// 	name: "Cotton T-Shirt"
	// 	images: "",
	// 	sizes: ["S", "M", "L", "XL", "XXL"],
	// 	colors: ["blue", "red", "yellow", "green"],
	// 	full_price: 22.00,
	// 	discount_price: 0,
	// }
]

export default inventory;