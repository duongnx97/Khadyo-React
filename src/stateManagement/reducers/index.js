
const initialState = {
    foods: [],
    food: {},
    carts: [],
}

function rootReducers(state = initialState, action) {

    if (action.type === 'GET_ALL_LIST') {
        state.foods = action.payload
    } else if (action.type === 'ADD_NEW') {
        state.food = action.payload
    } else if (action.type === 'ADD_TO_CART') {
        state.carts.push(action.payload)
    }

    return state
}

export default rootReducers;