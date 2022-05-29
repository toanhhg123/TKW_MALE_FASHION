import { products } from '../../data/productData/products.js';
import { renderProduct } from '../products/handleProductHome.js';
const iconPluss = document.querySelectorAll('.plus-icon');
const iconDashs = document.querySelectorAll('.dash-icon');

renderProduct(products);
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
