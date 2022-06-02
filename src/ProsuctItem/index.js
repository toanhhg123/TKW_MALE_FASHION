import {
    renderProductItem,
    handleQuantityValueInput,
    orderProduct,
    noneDesc,
    handleProductDesc,
    handleDescHead,
} from './RenderProduct.js';

handleQuantityValueInput();
renderProductItem().then((res) => {
    if (res) orderProduct();
});
handleDescHead();
handleProductDesc();
