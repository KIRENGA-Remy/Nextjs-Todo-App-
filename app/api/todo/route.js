import { NextResponse } from "next/server";
import connect from "../../../libs/mongodb";
import todo from "../../../model/todo";

export async function POST(request) {
    const { title, description } = await request.json();
    await connect();
    const todo = await todo.create({title, description });
    return NextResponse.json({ message: "Todo created"}, todo, { status: 201});
}

export async function GET(){
    await connect();
    const todos = await todo.find();
    return NextResponse.json({todos});
}

export async function DELETE(request){
    const id = request.nextUrl.searchParams.get("id");
    await connect();
    await todo.findByIdAndDelete(id);
    return NextResponse.json({ message: "Todo deleted" }, {status: 200});
}
