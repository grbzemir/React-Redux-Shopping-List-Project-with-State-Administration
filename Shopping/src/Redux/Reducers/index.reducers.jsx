//Buraya 2 paramtre alır. 1. parametre initial state, 2. parametre action
import SHOP_DATA from '../../shop-data'


const INITIAL_STATE = {
    productList: SHOP_DATA,
    basket: [],
}


export const reducer = (state = INITIAL_STATE, action) => {

    switch (action.type) {
        case 'ADD_BASKET':
            return {
                ...state,
                basket: [...state.basket, action.payload],

            };

        case 'REMOVE_BASKET':
            return {
                ...state,
                basket: state.basket.filter(product => product.id !== action.payload.id)
            };

        default:
            return state
    }
}

