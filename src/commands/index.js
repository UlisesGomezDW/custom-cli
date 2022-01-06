const { program } = require("commander")

const { handleSave, handleGetList } = require("./actions")

program.version("0.0.1").description("Custom CLI")

program.command("save").alias("s").description("Save a new user").action(handleSave)

program.command("list").alias("l").description("List of users").action(handleGetList)

program.parse(process.argv)
