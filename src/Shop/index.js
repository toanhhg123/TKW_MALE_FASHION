import { products } from '../../data/productData/products.js';
import { baseURL } from '../../URL/config.js';
import { URL_PRODUCT_ITEM } from '../../URL/Routes.js';
import { renderProduct } from '../products/handleProductHome.js';
const iconPluss = document.querySelectorAll('.plus-icon');
const iconDashs = document.querySelectorAll('.dash-icon');
const inputRange = document.querySelector('.sb__shop-input__range input');

renderProduct(products, baseURL + URL_PRODUCT_ITEM);

iconPluss.forEach((icon, index) => {
    icon.addEventListener('click', () => {
        const choices =
            icon.parentNode.parentNode.querySelector('.sb__shop-choices');
        if (choices) {
            choices.style.display = 'block';
            choices.style.height = 'max-content';
            icon.style.display = 'none';
            iconDashs[index].style.display = 'block';
        }
    });
});

iconDashs.forEach((icon, index) => {
    icon.addEventListener('click', () => {
        const choices =
            icon.parentNode.parentNode.querySelector('.sb__shop-choices');
        if (choices) {
            choices.style.display = 'none';
            choices.style.height = '0';
            icon.style.display = 'none';
            iconPluss[index].style.display = 'block';
        }
    });
});

inputRange.addEventListener('input', (e) => {
    document.querySelector(
        '.input__range-value.max'
    ).textContent = `$${e.target.value}`;
});
