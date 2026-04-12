import users from '../models/data/users.data.js';

const getUsers = () => {
    return users;
}

const addUser = (user) => {
    const newUser = {id: users.length + 1, ...user};
    users.push(newUser);
}

const removeUser = (id) => {
    const index = users.findIndex(x=> x.id == id);
    if (index !== -1) {
        users.splice(index, 1);
    }
}

export default {
    getUsers,
    addUser,
    removeUser
}