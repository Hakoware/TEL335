const mongoose = require('mongoose');
const {Schema} = mongoose;
const bcrypt = require('bcrypt')

const UserSchema = new Schema({
    name: {type: String, require: true},
    username: {type: String, require: true, unique : true},
    email: {type: String, require: true, unique: true},
    password: {type: String, require: true}
});

//static signup
UserSchema.statics.signup = async function (name, username, email, password){

    const verEmail = await this.findOne({email})
    const verUsername = await this.findOne({username})

    if (verEmail){
        throw Error("Email already in use")
    }
    if (verUsername){
        throw Error("Username already in use, please choose another one")
    }
    //hash the password
    const salt = await bcrypt.genSalt(10)
    const hash = await bcrypt.hash(password, salt)

    const user = await this.create({name, username, email, password: hash})

    return user
}

module.exports = mongoose.model('User', UserSchema);