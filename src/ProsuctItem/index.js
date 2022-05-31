import {
    renderProductItem,
    handleQuantityValueInput,
    orderProduct,
} from './RenderProduct.js';

handleQuantityValueInput();
renderProductItem().then((res) => {
    if (res) orderProduct();
});
