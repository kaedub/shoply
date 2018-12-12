import { ADD_PRODUCT, REMOVE_PRODUCT, ADD_TO_CART, REMOVE_FROM_CART } from './actionTypes';

export function addProduct(product) {
  return {
    type: ADD_PRODUCT,
    product,
  };
}

export function removeProduct(id) {
  return {
    type: REMOVE_PRODUCT,
    id,
  };
}

export function addToCart(product) {
  return {
    type: ADD_TO_CART,
    product,
  }
}

export function removeFromCart(id) {
  console.log('action handler', id)
  return {
    type: REMOVE_FROM_CART,
    id
  }
}