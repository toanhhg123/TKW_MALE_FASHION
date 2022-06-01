import { baseURL } from '../../URL/config.js';
import {
    URL_HOME,
    URL_SHOP,
    URL_CART,
    URL_CONTACT,
    URL_FORMS,
} from '../../URL/Routes.js';
import { products } from '../../data/productData/products.js';
import { saveProductToSession } from '../../src/ProsuctItem/RenderProduct.js';

export const ShowSearchHeader = () => {
    const headerSearch = document.createElement('div');
    headerSearch.classList = 'hd__search__show';
    headerSearch.innerHTML = `
        <div class="hd__search__input">
            <input type="text" placeholder="Search.." />
            <i class="bi bi-search"></i>
        </div>
        <div class="hd__prs__search">
            
        </div>
    
    `;

    return headerSearch;
};

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
        <a href="${URL_FORMS}">
            <div class="nav__link-left">
                <i class="bi bi-newspaper"></i>
                <span>Form</span>
            </div>
            <i class="bi bi-chevron-right"></i>
        </a>
    </li>
    <li>
        <a href="${URL_CONTACT}">
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
            href="${URL_FORMS}"
            class="${URL_FORMS === pathname ? 'active' : ''}"
        >
        Forms
        </a>
    </li>
    <li>
        <a 
            href="${URL_CONTACT}"
            class="${URL_CONTACT === pathname ? 'active' : ''}"
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

export const renderIcons = () => {
    return (document.querySelector('header .hd__auth').innerHTML = `
    <div class="hd__auth-icon icon-search__header">
    <img
        src="${baseURL}/bootstrap/bootstrapIcons/search.svg"
        alt=""
    />
</div>
<div class="hd__auth-icon icon-close__header">
    <img src="${baseURL}/bootstrap/bootstrapIcons/x-lg.svg" alt="" />
</div>
<div class="hd__auth-icon">
    <img
        src="${baseURL}/bootstrap/bootstrapIcons/heart.svg"
        alt=""
    />
</div>
<div class="hd__auth-icon hd__cart">
    <span>0</span>
    <img src="${baseURL}/bootstrap/bootstrapIcons/bag.svg" alt="" />
</div>
    
    `);
};

const searchItem = (id, img, price, name, desc) => {
    return `
    <div class="hd__pr-item">
    <small id="${id}" style='display: none'></small>
        <div class="hd__pr-img">
            <img src="${baseURL}/data/productData/imgs/${img}" alt="" />
        </div>
        <div class="hd__pr-ct">
            <h3>${name}</h3>
            <span>${price}</span>
            <p>
            ${desc}
            </p>
        </div>
    </div>
    
    `;
};

export const renderHeaderSearch = () => {
    document.querySelector('header').appendChild(ShowSearchHeader());
    const showHeaderSearch = document.querySelector('.hd__search__show');
    const iconSearch = document.querySelector('.icon-search__header');
    const iconClose = document.querySelector('.icon-close__header');
    iconSearch.onclick = () => {
        iconSearch.style.display = 'none';
        iconClose.style.display = 'block';
        showHeaderSearch.style.display = 'block';
    };

    iconClose.onclick = () => {
        iconSearch.style.display = 'block';
        iconClose.style.display = 'none';
        showHeaderSearch.style.display = 'none';
    };
};

export const SearchProduct = () => {
    const input = document.querySelector('.hd__search__input input');
    const headerSearchShow = document.querySelector('.hd__prs__search');
    console.log(input);
    input.addEventListener('input', (e) => {
        let productItems = ``;
        const value = e.target.value;
        const arrProduct = products
            .filter(
                (pro) =>
                    value.trim() &&
                    pro.name.toLowerCase().search(value.toLowerCase()) !== -1
            )
            .slice(0, 5);
        arrProduct.forEach((pro) => {
            const { id, img, price, name, decs } = pro;

            productItems += searchItem(id, img, price, name, decs);
        });

        headerSearchShow.innerHTML = productItems;

        redirectProductItemWithSearch();
    });
};

const redirectProductItemWithSearch = () => {
    const prItemSearchs = document.querySelectorAll('.hd__pr-item');
    if (prItemSearchs && prItemSearchs.length) {
        prItemSearchs.forEach((item) => {
            item.onclick = () => {
                const id = item.querySelector('small').id;
                saveProductToSession(id);
                document.location.href = baseURL + '/layout/productItem.html';
            };
        });
    }
};
