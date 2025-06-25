

export const addBasket = (product) => {
    return {
        type: "ADD_BASKET",
        payload: product
    }
}

export const removeBasket = (id) => {
    return {
        type: "REMOVE_BASKET",
        payload: id
    }
}

export const clearBasket = () => {
    return {
        type: "CLEAR_BASKET"
    };
};