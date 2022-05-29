import { handleProductHome } from './products/handleProductHome.js';
import { products } from '../data/productData/products.js';

handleProductHome(products.slice(0, 4));
