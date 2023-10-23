import {Schema, model , models} from "mongoose";

const promptSchema = new Schema({
    creator:{
        type: Schema.Types.ObjectId,
        ref:'User'
    },
    prompt:{
        type: String,
        required:[true, "El prompt es olbigatorio"]
    },
    tag:{
        type: String,
        required:[true, "El tag es olbigatorio"]
    }
})

const Prompt = models.Prompt || model('Prompt', promptSchema)

export default Prompt
