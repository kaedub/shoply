import { ADD_PRODUCT, REMOVE_PRODUCT, ADD_TO_CART } from './actionTypes';
import PRODUCTS_ARR from './data.json';

const PRODUCTS_OBJ = {};
for (let item of PRODUCTS_ARR.items) {
  PRODUCTS_OBJ[item.id] = item;
}
const INITIAL_STATE = {
 products: PRODUCTS_OBJ,
 cart: [PRODUCTS_ARR.items[0], PRODUCTS_ARR.items[4], PRODUCTS_ARR.items[2], PRODUCTS_ARR.items[5]],
}

function rootReducer(state=INITIAL_STATE, action) {
  console.log('rootReducer ran with action ', action);
  const {type} = action;
  
  switch (type) {
    case ADD_PRODUCT:
      const { id, name, price, image_url } = action.product;
      return { products: 
        [ ...state.products,
          { name, price, image_url }
        ]
      }
    case REMOVE_PRODUCT:
      let products = this.state.products.filter(p => p.id !== id);
      return { ...state, products };
    
    case ADD_TO_CART:
      let product = action.product;
      return { ...state, cart: [...state.cart, product] };

    default:
     return state
  }
}

export default rootReducer;