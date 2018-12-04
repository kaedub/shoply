import { ADD_PRODUCT, REMOVE_PRODUCT } from './actionTypes';

export function addProduct(product) {
  console.log('action handler', product)
  return {
    type: ADD_PRODUCT,
    product: product,
  };
}

export function removeProduct(id) {
  return {
    type: REMOVE_PRODUCT,
    id,
  };
}