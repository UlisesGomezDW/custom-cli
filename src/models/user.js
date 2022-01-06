const { Schema, model } = require("mongoose")

const userSchema = new Schema(
    {
        name: { type: String },
        age: { type: String },
        gander: { type: String },
    },
    {
        timestamps: true,
        versionKey: false,
    }
)

module.exports = model("User", userSchema)
