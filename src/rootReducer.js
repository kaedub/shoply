import { ADD_PRODUCT, REMOVE_PRODUCT } from './actionTypes';

const INITIAL_STATE = {
 products: []
}

function rootReducer(state=INITIAL_STATE, action) {
  let { type, id, name, price, image_url } = action;
  switch (type) {
    case ADD_PRODUCT:
      return { products: 
        [ ...state.products,
          { name, price, image_url }
        ]
      }
    case REMOVE_PRODUCT:
      let products = this.state.products.filter(p => p.id !== id);
      return { products };
    default:
     return state
  }
}

export default rootReducer;