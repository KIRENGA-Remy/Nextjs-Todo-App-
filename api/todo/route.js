import { NextResponse } from "next/server";
import connect from "../../libs/mongodb";
import todo from "../../model/todo";

export async function POST(request) {
    const { title, description } = await request.json();
    await connect();
    await todo.create({title, description });
    return NextResponse.json({ message: "Todo created"}, { status: 201});
}