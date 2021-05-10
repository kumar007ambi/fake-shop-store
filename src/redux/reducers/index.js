import { combineReducers } from 'redux';
import { productReducer, selectedProductReducer } from './productReducer';


export default combineReducers({
    allProducts: productReducer,
    product: selectedProductReducer,
})


