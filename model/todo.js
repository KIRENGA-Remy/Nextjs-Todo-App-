import mongoose, { Schema } from "mongoose";

const todoSchema = new Schema(
    {
        title: String,
        description: String
    },
    { timestamps: true }
);

const model=mongoose.model("Todo", todoSchema);  // Use PascalCase
export default model;
