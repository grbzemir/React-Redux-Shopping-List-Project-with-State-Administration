import Data from "../../Data";

const initialState = {
    ProductsList: Data,
    Basket: [],
};

export const Reducers = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_BASKET":
            return { ...state, Basket: [...state.Basket, action.payload] };

        case "REMOVE_BASKET":
            const index = state.Basket.findIndex(item => item.id === action.payload);
            if (index >= 0) {
                const newBasket = [...state.Basket];
                newBasket.splice(index, 1);
                return { ...state, Basket: newBasket };
            }
            return state;

        case "CLEAR_BASKET":
            return { ...state, Basket: [] };

        default:
            return state;
    }
};
