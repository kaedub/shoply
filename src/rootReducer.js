import { ADD_PRODUCT, REMOVE_PRODUCT, ADD_TO_CART } from './actionTypes';
import PRODUCTS from './data.json';
const INITIAL_STATE = {
 products: PRODUCTS.items,
 cart: [1,2,3,3],
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