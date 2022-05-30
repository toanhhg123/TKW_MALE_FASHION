import { baseURL } from '../../URL/config.js';
export const renderProductItem = () => {
    const productItem = JSON.parse(sessionStorage.getItem('productItem'));
    const { id, name, imgs, price } = productItem;
    const carouselInner = document.querySelector('.carousel-inner');

    let carouselItems = '';

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
