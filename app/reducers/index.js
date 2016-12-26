import { combineReducers } from 'redux'
import product from './Store/product';
import category from './Store/category';
import auth from './auth';

export default combineReducers({
    product,
    category,
    auth
});