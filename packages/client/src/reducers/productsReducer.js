import ACTION_TYPES from '../actions/actionTypes';

const initialState = {
  products: [],
  isFetching: false,
  error: null,
};

function productReducer(state = initialState, action) {
  const { type } = action;
  switch (type) {

    //get products
    case ACTION_TYPES.GET_PRODUCTS_REQUEST: {
      return {
        ...state,
        isFetching: true,
        error: null,
      };
    }
    case ACTION_TYPES.GET_PRODUCTS_SUCCESS: {
      const { products } = action;
      return {
        ...state,
        isFetching: false,
        products: products,
      };
    }
    case ACTION_TYPES.GET_PRODUCTS_ERROR: {
      const { error } = action;
      return {
        ...state,
        isFetching: false,
        error: error,
      };
    }

    //get product by id
    case ACTION_TYPES.GET_PRODUCT_REQUEST: {
      return {
        ...state,
        isFetching: true,
        error: null,
      };
    }
    case ACTION_TYPES.GET_PRODUCT_SUCCESS: {
      const { id } = action;
      //const { products } = state;
      return {
        ...state,
        isFetching: false,
        id: id,
      };
    }
    case ACTION_TYPES.GET_PRODUCT_ERROR: {
      const { error } = action;
      return {
        ...state,
        isFetching: false,
        error: error,
      };
    }

    //create new product
    case ACTION_TYPES.CREATE_PRODUCT_REQUEST: {
      return {
        ...state,
        isFetching: true,
        error: null,
      };
    }
    case ACTION_TYPES.CREATE_PRODUCT_SUCCESS: {
      const { product } = action;
      const { products } = state;
      const newProducts = [...products, product];
      return {
        ...state,
        isFetching: false,
        products: newProducts,
      };
    }
    case ACTION_TYPES.CREATE_PRODUCT_ERROR: {
      const { error } = action;
      return {
        ...state,
        isFetching: false,
        error: error,
      };
    }
    default:
      return state;
  }
}

export default productReducer;