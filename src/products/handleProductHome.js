import { baseURL } from '../../URL/config.js';
import { renderStart } from '../ProsuctItem/RenderProduct.js';
export const handleProductHome = (products) => {
    if (products && products.length) {
        const location = baseURL;

        const productCardsComponent = document.querySelector('.prs__cards');
        let ListProducts = '';
        Array.from(products).forEach((pr, i) => {
            ListProducts += `
            <div class="col-6 col-lg-3 col-sm-4">
            <div class="prs__card">
                <smail style="display: none">${pr?.id}</smail>
                    <div class="prs-bannel ${i % 2 === 0 && 'black'}">${
                i % 2 === 0 ? 'sale' : 'new'
            }</div>
                    <div class="prs__card-img">
                        <img src="${`${location}/data/productData/imgs/${
                            pr?.img || ''
                        }`}" alt="" />
                    </div>
                    <div class="prs__card-content">
                        <h4>${pr?.name}</h4>
                        <div class="prs__icons">
                            ${renderStart(pr.rate)}
                        </div>
                        <h5>Rs.${pr?.sale}</h5>
                    </div>
                </div>
            </div>
            `;
        });

        productCardsComponent.innerHTML = ListProducts;
    }
};

export const handleProduct = (product) => {
    return product && product.length
        ? Promise.resolve(product)
        : Promise.reject('Not found products');
};

export const renderProduct = (products, URL) =>
    handleProduct(products)
        .then((pros) => {
            handleProductHome(pros);
            return true;
        })
        .then((success) => {
            if (success) {
                const _products = document.querySelectorAll('.prs__card');
                _products.forEach((pro) => {
                    pro.onclick = () => {
                        const id = pro.querySelector('smail').textContent;
                        const product = products.find((pro) => pro.id === id);
                        sessionStorage.setItem(
                            'productItem',
                            JSON.stringify(product)
                        );
                        location.href = URL;
                    };
                });
            }
        });
