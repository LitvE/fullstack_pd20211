import axios from 'axios';
const axiosOptions = { baseURL: 'http://127.0.0.1:5000/api' };

const apiInstance = axios.create(axiosOptions);
//users
export const getUsers = () => apiInstance.get('/users/');
export const getUserById = (id) => apiInstance.get(`/users/${id}`);
export const createUser = (user) => apiInstance.post('/users', user);
export const deleteUser = (id) => apiInstance.delete(`/users/${id}`);

//products
export const getProducts = () => apiInstance.get('/products/');
export const getProductById = (id) => apiInstance.get(`/products/${id}`);
export const createProduct = (product) => apiInstance.post('/products', product);
export const deleteProduct = (id) => apiInstance.delete(`/products/${id}`);