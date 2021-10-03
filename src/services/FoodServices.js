import axios from 'axios';

const getAllFoods = async () => {
    return new Promise((resolve, reject) => {
        axios.get('http://localhost:3000/foods')
            .then(res => {
                const { data } = res
                resolve(data)
            })
            .catch(error => {
                reject(error)
            })
    })
}

const getFoodById = async (id) => {
    return new Promise((resolve, reject) => {
        axios.get(`http://localhost:3000/foods/${id}`)
            .then(res => {
                const { data } = res
                resolve(data)
            })
            .catch(error => {
                reject(error)
            })
    })
}

const createFood = async (data = {}) => {
    return new Promise((resolve, reject) => {
        axios.post('http://localhost:3000/foods', data)
            .then(res => {
                resolve(res)
            })
            .catch(error => {
                reject(error)
            })
    })
}

const updateFood = (data, id) => {
    return new Promise((resolve, reject) => {
        axios.patch(`http://localhost:3000/foods/${id}`, data)
            .then(res => {
                resolve(res)
            })
            .catch(error => {
                reject(error)
            })
    })
}

const deleteFood = async (id) => {
    return new Promise((resolve, reject) => {
        axios.delete(`http://localhost:3000/foods/${id}`)
            .then(res => {
                resolve(res)
            })
            .catch(error => {
                reject(error)
            })
    })
}

const FoodServices = {
    getAllFoods,
    getFoodById,
    createFood,
    updateFood,
    deleteFood
}

export default FoodServices