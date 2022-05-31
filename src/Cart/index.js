import { renderCartItem, removeProductToCart } from './handleProductCart.js';

renderCartItem().then((success) => {
    if (success) removeProductToCart();
});
