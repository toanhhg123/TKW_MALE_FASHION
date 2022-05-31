import { baseURL } from '../../URL/config.js';
import { URL_CART } from '../../URL/Routes.js';
export const renderProductItem = () => {
    const productItem = JSON.parse(sessionStorage.getItem('productItem'));
    const { id, name, imgs, price } = productItem;
    const carouselInner = document.querySelector('.carousel-inner');

    let carouselItems = `<small id="idProduct">${id}</small>`;

    let smailButton = '';
    Array.from(imgs).forEach((img, i) => {
        carouselItems += `
        
        <div class="carousel-item ${i === 0 ? 'active' : ''}">
            <img
                src="${baseURL}/data/productData/imgs/${img}"
                class="d-block w-100"
                alt="..."
            />
        </div>
        `;

        smailButton += `
        <img
            src="${baseURL}/data/productData/imgs/${img}"
            alt=""
            data-bs-target="#carouselExampleControls"
            data-bs-slide-to="${i}"
        />
        `;
    });

    carouselInner.innerHTML = carouselItems;
    document.querySelector('.proItem__smaiImgs').innerHTML = smailButton;
    return Promise.resolve(true);
};

export const handleQuantityValueInput = () => {
    const inputValue = document.querySelector('.prI__qty__input input');
    const plus = document.querySelector('.prI__icon__plus');
    const dash = document.querySelector('.prI__icon__dash');

    plus.onclick = () => {
        const { value } = inputValue;
        if (value >= 9) return;
        inputValue.value = Number(value) + 1;
    };

    dash.onclick = () => {
        const { value } = inputValue;
        if (value <= 1) return;
        inputValue.value = Number(value) - 1;
    };
};

export const orderProduct = () => {
    const addToCart = document.querySelector('.addToCart');
    const buyPro = document.querySelector('.buy__pr');
    addToCart.addEventListener('click', () => {
        const value = document.querySelector('.prI__qty__input input')?.value;
        const idProduct = document.querySelector('#idProduct')?.textContent;
        if (idProduct) {
            const cart = JSON.parse(sessionStorage.getItem('cart'));
            console.log(cart);
            if (cart) {
                const index = Array.from(cart).findIndex(
                    (e) => e.id === idProduct
                );
                if (index >= 0) {
                    cart[index].qty += Number(value);
                    sessionStorage.setItem('cart', JSON.stringify([...cart]));
                } else
                    sessionStorage.setItem(
                        'cart',
                        JSON.stringify([
                            ...cart,
                            { id: idProduct, qty: Number(value) },
                        ])
                    );
            } else {
                sessionStorage.setItem(
                    'cart',
                    JSON.stringify([{ id: idProduct, qty: Number(value) }])
                );
            }

            document.location.reload();
        }
    });

    buyPro.onclick = () => {
        document.location.href = URL_CART;
    };
};
