import mongoose, { mongo, Schema } from "mongoose";

const todoSchema = new Schema(
    {
        title: String,
        description: String
    },
    { timestamps: true}
)

export default mongoose.models.Todo || mongoose.model("Todo", todoSchema);