import { ADD_PRODUCT, REMOVE_PRODUCT } from './actionTypes';

export function addProduct() {
  return {
    type: ADD_PRODUCT
  };
}

export function removeProduct() {
  return {
    type: REMOVE_PRODUCT
  };
}