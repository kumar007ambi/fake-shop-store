import { ActionTypes } from '../constants/types';


export const setProduct = (products) => ({
    type: ActionTypes.SET_PRODUCTS,
    payload: products,

})

export const selectedProduct = (product) => ({
    type: ActionTypes.SELECTED_PRODUCT,
    payload: product,

})

export const removeSelectedProduct = () => ({
    type: ActionTypes.REMOVE_SELECTED_PRODUCT,

})
