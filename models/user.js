const mongoose = ("mongoose");
const userSchema = new mongoose.Schema({
    name: String,
    email: String,
})

const user = mongoose.model("User", userSchema);

module.exports = user;