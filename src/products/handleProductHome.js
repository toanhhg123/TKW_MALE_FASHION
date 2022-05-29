export const handleProductHome = (products) => {
    if (products && products.length) {
        const location = document?.location?.origin || '';
        const productCardsComponent = document.querySelector('.prs__cards');
        let ListProducts = '';
        Array.from(products).forEach((pr) => {
            ListProducts += `
            <div class="col-6 col-lg-3 col-sm-4">
            <div class="prs__card">
                <smail style="display: none">${pr?.id}</smail>
                    <div class="prs-bannel">New</div>
                    <div class="prs__card-img">
                        <img src="${`${location}/data/productData/imgs/${
                            pr?.img || ''
                        }`}" alt="" />
                    </div>
                    <div class="prs__card-content">
                        <h4>${pr?.name}</h4>
                        <div class="prs__icons">
                            <i class="bi bi-star"></i>
                            <i class="bi bi-star"></i>
                            <i class="bi bi-star"></i>
                            <i class="bi bi-star"></i>
                            <i class="bi bi-star"></i>
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

export const renderProduct = (products) =>
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
                        location.href =
                            location.origin + '/layout/productItem.html';
                    };
                });
            }
        });
