import '../lib/jquery.js';
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

$(window).on('load', () => {
    $('.show__loader').fadeOut(1000);
    $('body').fadeIn(1000);
});
