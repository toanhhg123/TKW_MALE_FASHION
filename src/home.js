import { renderProduct } from './products/handleProductHome.js';
import { products } from '../data/productData/products.js';
import { URL_PRODUCT_ITEM } from '../URL/Routes.js';
import { baseURL } from '../URL/config.js';

renderProduct(products.slice(0, 4), baseURL + URL_PRODUCT_ITEM);
