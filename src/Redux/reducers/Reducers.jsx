import { act } from "react";
import Product from "../../components/Product";
import Data from "../../Data";

const initialState = {
    ProductsList: Data,
    Basket: [],

}

export const Reducers = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_BASKET":
            return { ...state, Basket: [...state.Basket, action.payload] };

        default:
            return state;
    }

}