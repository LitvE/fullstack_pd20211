import {combineReducers} from 'redux';
import usersReducer from './usersReducer';
import productsReducer from './productsReducer';

const rootReducer = combineReducers({
    user: usersReducer,
    product: productsReducer,
});

export default rootReducer;