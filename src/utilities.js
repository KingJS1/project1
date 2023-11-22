/* eslint-disable no-undef */
cart=[];

function isEmpty(n) {
    return Array.from({ length: n }, () => Math.ceil(Math.random() * 6));
}

function addToCart(cart, id, price) {
    cart.push({id, price});
    return cart;
}

  
export { isEmpty, addToCart };
  