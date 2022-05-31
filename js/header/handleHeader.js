import { baseURL } from '../../URL/config.js';
import { URL_HOME, URL_SHOP, URL_CART } from '../../URL/Routes.js';

export const renderLinkHeder = () => {
    const hdNav = document.querySelector('.hd__nav ul');
    const hdMb = document.querySelector('.nav__mb ul');
    const { pathname } = document.location;
    const linksMB = `
    <li>
        <a href="${URL_HOME}">
            <div class="nav__link-left">
                <i class="bi bi-house"></i>
                <span>Home</span>
            </div>
            <i class="bi bi-chevron-right"></i>
        </a>
    </li>
    <li>
        <a href="${URL_SHOP}">
            <div class="nav__link-left">
                <i class="bi bi-shop"></i>
                <span>Shop</span>
            </div>
            <i class="bi bi-chevron-right"></i>
        </a>
    </li>
    <li>
        <a href="#">
            <div class="nav__link-left">
                <i class="bi bi-newspaper"></i>
                <span>Blog</span>
            </div>
            <i class="bi bi-chevron-right"></i>
        </a>
    </li>
    <li>
        <a href="#">
            <div class="nav__link-left">
                <i class="bi bi-chat-left-quote"></i>
                <span>Contact</span>
            </div>
            <i class="bi bi-chevron-right"></i>
        </a>
    </li>
    `;

    const linksPc = `
    <li>
        <a 
            class="${
                URL_HOME === pathname || pathname === `${URL_HOME}/`
                    ? 'active'
                    : ''
            }" href="${URL_HOME}"
        >
            Home
        </a>
    </li>
    <li>
        <a 
            class="${URL_SHOP === pathname ? 'active' : ''}"  href="${URL_SHOP}"
        >
            Shop
        </a>
    </li>
    <li>
        <a 
            href="#"
        >
            Blog
        </a>
    </li>
    <li>
        <a 
            href="#"
        >
            Contact
        </a>
    </li>
    `;

    hdMb.innerHTML = linksMB;
    hdNav.innerHTML = linksPc;
};

export const handShowNavMobile = () => {
    const iconMenu = document.querySelector('.hd__menu__icon');
    const headerModalMobile = document.querySelector('.hd__modal');

    console.log(iconMenu);

    iconMenu.addEventListener('click', () => {
        headerModalMobile.style.transform = 'translateX(0%)';
    });

    headerModalMobile.addEventListener('click', () => {
        headerModalMobile.style.transform = 'translateX(-100%)';
    });
};

export const redirectCart = () => {
    const cart = document.querySelector('.hd__cart');
    cart.onclick = () => {
        document.location.href = URL_CART;
    };
};

export const showNumberCart = () => {
    const carthd = document.querySelector('.hd__cart');
    const qty = carthd.querySelector('span');

    let cartNumber = JSON.parse(sessionStorage.getItem('cart'))?.length || 0;

    qty.textContent = cartNumber;
};
