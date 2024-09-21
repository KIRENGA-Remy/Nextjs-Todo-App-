import mongoose, { Schema } from "mongoose";

const todoSchema = new Schema(
    {
        title: String,
        description: String
    },
    { timestamps: true }
);

export default mongoose.model("Todo", todoSchema);  // Use PascalCase
