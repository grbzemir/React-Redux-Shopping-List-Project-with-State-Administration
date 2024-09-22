// export const addBasket = (product) => {
//     return {
//         type: 'ADD_BASKET',
//         payload: product

//     }
// }

// export const removeBasket = (product) => {
//     return {
//         type: 'REMOVE_BASKET',
//         payload: product
//     }
// }

export const addBasket = (product) => {
    const updatedBasket = JSON.parse(localStorage.getItem('basket')) || [];
    updatedBasket.push(product);
    localStorage.setItem('basket', JSON.stringify(updatedBasket));

    return {
        type: 'ADD_BASKET',
        payload: product,
    };
};

export const removeBasket = (productId) => {
    const updatedBasket = JSON.parse(localStorage.getItem('basket')) || [];
    const newBasket = updatedBasket.filter(item => item.id !== productId);
    localStorage.setItem('basket', JSON.stringify(newBasket));

    return {
        type: 'REMOVE_BASKET',
        payload: productId,
    };
};


