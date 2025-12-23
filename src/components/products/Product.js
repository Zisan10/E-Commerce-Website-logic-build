import Jeans from "../../assets/jeans.png";
import Hoodie from "../../assets/hoodie.png";
import LeatherJacket from "../../assets/leather-jacket.png";
import Skirt from "../../assets/skirt.png";
import TShirt from "../../assets/tshirt.png";
import SleepSuit from "../../assets/sleepsuit.png";
import Shirt from "../../assets/shirt.png";
import Dress from "../../assets/dress.png";
import Skater from "../../assets/skater.png";
import Sweater from "../../assets/sweater.png";
import BabyShirt from "../../assets/baby-shirt.png";
import ShirtDress from "../../assets/shirt-dress.png";

const Product = [
  {
    id: 1,
    name: "Sports TShirt",
    image: TShirt,
    price: 29.99,
    oldPrice: 39.99,
    onSale: true,
    newArrival: false,
    category: "Mens",
  },
  {
    id: 2,
    name: "Denim Jeans",
    image: Jeans,
    price: 49.99,
    oldPrice: null,
    onSale: false,
    newArrival: true,
    category: "Womens",
  },
  {
    id: 3,
    name: "Hoodie Sweatshirt",
    image: Hoodie,
    price: 39.99,
    oldPrice: 49.99,
    onSale: true,
    newArrival: false,
    category: "Kids",
  },
  {
    id: 4,
    name: "Leather Jacket",
    image: LeatherJacket,
    price: 89.99,
    oldPrice: null,
    onSale: false,
    newArrival: true,
    category: "Mens",
  },
  {
    id: 5,
    name: "Summer Skirt",
    image: Skirt,
    price: 34.99,
    oldPrice: 44.99,
    onSale: true,
    newArrival: false,
    category: "Womens",
  },
  {
    id: 6,
    name: "Baby Sleep Suit",
    image: SleepSuit,
    price: 19.99,
    oldPrice: null,
    onSale: false,
    newArrival: true,
    category: "Kids",
  },
  {
    id: 7,
    name: "Casual Shirt",
    image: Shirt,
    price: 29.99,
    oldPrice: null,
    onSale: false,
    newArrival: true,
    category: "Mens",
  },
  {
    id: 8,
    name: "Evening Dress",
    image: Dress,
    price: 59.99,
    oldPrice: 69.99,
    onSale: true,
    newArrival: false,
    category: "Womens",
  },
  {
    id: 9,
    name: "Skater Dress",
    image: Skater,
    price: 44.99,
    oldPrice: null,
    onSale: false,
    newArrival: true,
    category: "Womens",
  },
  {
    id: 10,
    name: "Winter Sweater",
    image: Sweater,
    price: 39.99,
    oldPrice: 49.99,
    onSale: true,
    newArrival: false,
    category: "Mens",
  },
  {
    id: 11,
    name: "Baby Shirt",
    image: BabyShirt,
    price: 24.99,
    oldPrice: null,
    onSale: false,
    newArrival: true,
    category: "Kids",
  },
  {
    id: 12,
    name: "Shirt Dress",
    image: ShirtDress,
    price: 54.99,
    oldPrice: 64.99,
    onSale: true,
    newArrival: false,
    category: "Womens",
  },
];

export default Product;
