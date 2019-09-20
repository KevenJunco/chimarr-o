import {Schema, model} from 'mongoose'

const UserSchema = new Schema ({
    email:String,
    firstname: String,
    lastName:String
},  {
    timestamps:true 


})
export default model ('User', UserSchema)