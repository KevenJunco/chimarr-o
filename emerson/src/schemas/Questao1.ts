import {Schema, model} from 'mongoose'

const Questao1Schema = new Schema ({
    target: Number,
    vmedia: Number,
    time:Number
},  {
    timestamps:true 
  

})
export default model ('Questao1', Questao1Schema)