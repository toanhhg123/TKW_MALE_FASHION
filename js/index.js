import {
    handShowNavMobile,
    renderLinkHeder,
    redirectCart,
    showNumberCart,
} from './header/handleHeader.js';

window.onload = (e) => {
    showNumberCart(0);
    renderLinkHeder();
    handShowNavMobile();
    redirectCart();
};
