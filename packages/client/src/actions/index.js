import ACTION_TYPES from './actionTypes';

//get Users
export const getUsersAction = () => ({
    type: ACTION_TYPES.GET_USERS_ACTION,
});
export const getUsersRequest = () => ({
    type: ACTION_TYPES.GET_USERS_REQUEST,
});
export const getUsersSuccess = (users) => ({
    type: ACTION_TYPES.GET_USERS_SUCCESS,
    users: users,
});
export const getUsersError = (e) => ({
    type: ACTION_TYPES.GET_USERS_ERROR,
    error: e,
});

//get User by id

export const getUserAction = (id) => ({
    type: ACTION_TYPES.GET_USER_ACTION,
    id: id,
});
export const getUserRequest = () => ({
    type: ACTION_TYPES.GET_USER_REQUEST,
});
export const getUserSuccess = (id) => ({
    type: ACTION_TYPES.GET_USER_SUCCESS,
    id: id,
});
export const getUserError = (e) => ({
    type: ACTION_TYPES.GET_USER_ERROR,
    error: e,
});


// create new User

export const createUserAction = (user) => ({
    type: ACTION_TYPES.CREATE_USER_ACTION,
    user: user,
});
export const createUserRequest = () => ({
    type: ACTION_TYPES.CREATE_USER_REQUEST,
});
export const createUserSuccess = (user) => ({
    type: ACTION_TYPES.CREATE_USER_REQUEST,
    user: user,
});
export const createUserError = (e) => ({
    type: ACTION_TYPES.CREATE_USER_ERROR,
    error: e,
});

//get Products
export const getProductsAction = () => ({
    type: ACTION_TYPES.GET_PRODUCTS_ACTION,
});
export const getProductsRequest = () => ({
    type: ACTION_TYPES.GET_PRODUCTS_REQUEST,
});
export const getProductsSuccess = (products) => ({
    type: ACTION_TYPES.GET_PRODUCTS_SUCCESS,
    products: products,
});
export const getProductsError = (e) => ({
    type: ACTION_TYPES.GET_PRODUCTS_ERROR,
    error: e,
});

//get Product by id

export const getProductAction = (id) => ({
    type: ACTION_TYPES.GET_PRODUCT_ACTION,
    id: id,
});
export const getProductRequest = () => ({
    type: ACTION_TYPES.GET_PRODUCT_REQUEST,
});
export const getProductSuccess = (id) => ({
    type: ACTION_TYPES.GET_PRODUCT_SUCCESS,
    id: id,
});
export const getProductError = (e) => ({
    type: ACTION_TYPES.GET_PRODUCT_ERROR,
    error: e,
});


// create new Product

export const createProductAction = (product) => ({
    type: ACTION_TYPES.CREATE_PRODUCT_ACTION,
    product: product,
});
export const createProductRequest = () => ({
    type: ACTION_TYPES.CREATE_PRODUCT_REQUEST,
});
export const createProductSuccess = (product) => ({
    type: ACTION_TYPES.CREATE_PRODUCT_SUCCESS,
    product: product,
});
export const createProductError = (e) => ({
    type: ACTION_TYPES.CREATE_PRODUCT_ERROR,
    error: e,
});

//delete Product

export const deleteProductAction = (id) => ({
    type: ACTION_TYPES.DELETE_PRODUCT_ACTION,
    id: id,
});
export const deleteProductRequest = () => ({
    type: ACTION_TYPES.DELETE_PRODUCT_REQUEST,
});
export const deleteProductSuccess = (id) => ({
    type: ACTION_TYPES.DELETE_PRODUCT_SUCCESS,
    id: id,
});
export const createDeleteError = (e) => ({
    type: ACTION_TYPES.DELETE_PRODUCT_ERROR,
    error: e,
});