const mongoose = ("mongoose");
const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    score: Number
})

const user = mongoose.model("User", userSchema);

module.exports = user;