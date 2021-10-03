import axios from 'axios';

const GetUsers = async () => {
    const res = await axios.get('http://localhost:3000/users')
    return res
}

const CreateUsers = async (data = {}) => {
    const res = await axios.post('http://localhost:3000/users', data)
    return res
}

const UserServices = {
    GetUsers,
    CreateUsers
}

export default UserServices