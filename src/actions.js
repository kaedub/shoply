import { ADD_PRODUCT, REMOVE_PRODUCT, ADD_TO_CART } from './actionTypes';

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
  console.log('action handler', product)
  return {
    type: ADD_TO_CART,
    product,
  }
}