const { connection } = require("../database")
const User = require("../models/user")

const addUser = async (user) => {
    await User.create(user)
    await connection.close()
}

const updateUser = async (_id, newUser) => {
    await User.updateOne({ _id }, newUser)
    await connection.close()
}

const removeUser = async (_id) => {
    await User.deleteOne({ _id })
    await connection.close()
}

const getUsers = async () => {
    const users = await User.find().lean()
    await connection.close()

    return users
}

module.exports = {
    addUser,
    updateUser,
    removeUser,
    getUsers,
}
