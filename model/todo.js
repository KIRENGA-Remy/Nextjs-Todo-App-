import mongoose, { Schema } from "mongoose";

const todoSchema = new Schema(
    {
        title: String,
        description: String
    },
    { timestamps: true}
)

const TODO =  mongoose.model("Todo", todoSchema);
export default TODO;