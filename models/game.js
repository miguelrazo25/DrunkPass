const mongoose = ("mongoose");
const userSchema = new mongoose.Schema({
    name: String,
    user_id: String,
    score: Number
})

const user = mongoose.model("Game", userSchema);

module.exports = user;