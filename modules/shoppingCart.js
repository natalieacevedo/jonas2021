//exporting module

console.log('exporting module');

const shippingCost = 10;
const cart = [];

export const addToCart = function (product, quantity) {
    cart.push({ product, quantity });
    console.log(`${quantity} ${product} added to cart, que rico`);
};

const totalPrice = 980;
const totalQuantity = 23;

export { totalPrice, totalQuantity as cantidad }

export default function(natis){
    return `${natis} y fidel`;
};