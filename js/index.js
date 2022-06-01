import '../lib/jquery.js';
import {
    handShowNavMobile,
    renderLinkHeder,
    redirectCart,
    showNumberCart,
    renderHeaderSearch,
    renderIcons,
    SearchProduct,
} from './header/handleHeader.js';

window.onload = (e) => {
    renderLinkHeder();
    renderIcons();
    handShowNavMobile();
    redirectCart();
    renderHeaderSearch();
    SearchProduct();
    showNumberCart(0);
};

$(window).on('load', () => {
    $('.show__loader').fadeOut(1000);
    $('body').fadeIn(1000);
});
