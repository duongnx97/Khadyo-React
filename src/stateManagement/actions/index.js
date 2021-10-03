
export function getAllList(payload) {
    return { type: 'GET_ALL_LIST', payload }
}

export function addNewFood(payload) {
    return { type: 'ADD_NEW', payload }
}

export function addToCarts(data) {
    return { type: 'ADD_TO_CART', payload: data }
}