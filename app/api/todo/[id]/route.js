import { NextResponse } from 'next/server';
import connect from '../../../../libs/mongodb'
import todo from '../../../../model/todo'

export async function PUT(request, { params }) {
    const {id} = params;
    const {newTitle: title, newDescription: description } = await request.json();
    await connect();
    const updated = await todo.findByIdAndUpdate(id, { title, description});
    return NextResponse.json({message: "Successfully Updated todo", updated}, {status: 200});
}

export async function GET(request, {params}) {
    const { id } = params;
    await connect();
    const findTodo = await todo.findOne({_id: id});
    return NextResponse.json({message: "TODO is retrieved", findTodo}, { status: 200});
}
