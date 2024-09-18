import { NextResponse } from "next/server";
import connect from "../../../libs/mongodb";
import todo from "../../../model/todo";  // Change 'todo' to 'Todo' to avoid conflicts

export async function POST(request) {
    const { title, description } = await request.json();
    await connect();
    const newTodo = await todo.create({ title, description });  // Use 'newTodo' to avoid conflict
    return NextResponse.json({ message: "Todo created", todos: newTodo }, { status: 201 });
}

export async function GET() {
    await connect();
    const todos = await todo.find();  // 'Todo' is the model from mongoose
    return NextResponse.json({ todos });
}

export async function DELETE(request) {
    const id = request.nextUrl.searchParams.get("id");
    await connect();
    await todo.findByIdAndDelete(id);  // Use 'Todo' model
    return NextResponse.json({ message: "Todo deleted" }, { status: 200 });
}
