import connect from '../../../../libs/mongodb'
import { NextResponse } from 'next/server';
import TODO from '../../../../model/todo';

export async function PUT(request, { params }) {
    const {id} = params;
    const {newTitle: title, newDescription: description } = await request.json();
    await connect();
    const updated = await TODO.findByIdAndUpdate(id, { title, description});
    return NextResponse.json({message: "Successfully Updated todo"}, updated, {status: 200});
}

export async function GET(request, params) {
    const {id} = params;
    await connect();
    const todo = await TODO.findOne({ _id: id})
    return NextResponse.json({todo}, {status: 200})
}
