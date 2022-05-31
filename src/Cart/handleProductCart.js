import { products } from '../../data/productData/products.js';
import { baseURL } from '../../URL/config.js';

export const renderCartItem = () => {
    const cart = JSON.parse(sessionStorage.getItem('cart')) || [];
    if (cart && cart.length) {
        const bodyTable = document.querySelector('tbody');
        const cartMap =
            Array.from(products).filter((e) =>
                Array.from(cart).find((c) => c.id === e.id && (e.qty = c.qty))
            ) || 0;

        let trs = ``;

        cartMap.forEach((cart) => {
            trs += `
            <tr>
                <td>
                    <div class="pr__if-tb">
                        <div class="pr__if-img">
                            <img
                                src="${baseURL}/data/productData/imgs/${
                cart.imgs[0]
            }"
                                alt=""
                            />
                        </div>
                        <div class="pr__if-ct">
                            <h5>${cart.name}</h5>
                            <span>
                                Màu sắc: Họa tiết
                            </span>
                            <span>Size: L</span>
                            <p>Xanh Tím Than</p>
                        </div>
                    </div>
                </td>
                <td>
                    <div class="prI__qty__input">
                        <button
                            class="prI__icon__plus"
                        >
                            <i
                                class="bi bi-plus-lg"
                            ></i>
                        </button>
                        <input
                            type="text"
                            value="${cart.qty}"
                        />
                        <button
                            class="prI__icon__dash"
                        >
                            <i
                                class="bi bi-dash-lg"
                            ></i>
                        </button>
                    </div>
                </td>
                <td>
                    <div class="pr__total-tb">
                        <span>$${cart.sale * Number(cart.qty)}</span>
                        <i class="bi bi-trash cart-trash-icon" id='${
                            cart.id
                        }'></i>
                    </div>
                </td>
            </tr>
            
            
            `;
        });

        const total = cartMap.reduce((total, cart) => {
            return total + Number(cart.sale) * Number(cart.qty);
        }, 0);

        const qtyCart = cartMap.reduce(
            (total, cart) => total + Number(cart.qty),
            0
        );

        bodyTable.innerHTML = trs;
        document.querySelector('.sum__qty').textContent = qtyCart;
        document.querySelector('.sum__money').textContent = `$${total}`;
        document.querySelector('.total__money').textContent = `$${total}`;

        return Promise.resolve(true);
    }

    return Promise.resolve(false);
};

export const removeProductToCart = () => {
    const iconCarts = document.querySelectorAll('.cart-trash-icon');
    iconCarts.forEach((icon) => {
        icon.addEventListener('click', () => {
            const { id } = icon;
            let cart = JSON.parse(sessionStorage.getItem('cart'));
            cart = Array.from(cart).filter((e) => e.id !== id);
            sessionStorage.setItem('cart', JSON.stringify(cart));
            location.reload();
        });
    });
};
