const { prompt } = require("inquirer")
const { addUser, getUsers } = require("./../controllers/user.controller")

const answers = [
    {
        type: "input",
        message: "Your name:",
        name: "name",
    },
    {
        type: "input",
        message: "Your age:",
        name: "age",
    },
    {
        type: "list",
        message: "Gender:",
        name: "gender",
        choices: ["Male", "Female"],
    },
]

async function handleSave() {
    try {
        const response = await prompt(answers)
        await addUser(response)
        console.info("Success!")
    } catch (e) {
        console.log(e)
    }
}

async function handleGetList() {
    try {
        const data = await getUsers()
        console.log(data)
    } catch (e) {
        console.log(e)
    }
}

module.exports = { handleSave, handleGetList }
