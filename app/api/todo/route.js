import { NextResponse } from "next/server";
import connect from "../../../libs/mongodb";
import Todo from "../../../model/todo";  // Use PascalCase

export async function POST(request) {
    const { title, description } = await request.json();
    const newTodo = await Todo.create({ title, description });
    return NextResponse.json({ message: "Todo created", todo: newTodo }, { status: 201 });
}

export async function GET() {
    const todos = await Todo.find();  // 'Todo' is the model from mongoose
    return NextResponse.json({ todos });
}

export async function DELETE(request) {
    const id = request.nextUrl.searchParams.get("id");
    await Todo.findByIdAndDelete(id);  // Use 'Todo' model
    return NextResponse.json({ message: "Todo deleted" }, { status: 200 });
}
