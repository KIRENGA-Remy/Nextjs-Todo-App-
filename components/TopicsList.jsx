"use client";
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { FaEdit } from 'react-icons/fa';
import DeleteTodo from './DeleteTodo';
// import getTodos from './GetTodos'; 

const getTodos = async () => {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_FRONTEND_URL}/api/todo`, {
            method: 'GET',
            headers: {
                "Content-Type": "application/json"
            },
        });

        if (!res.ok) {
            throw new Error("Failed to fetch todos");
        }

        return await res.json(); 
    } catch (err) {
        console.log("Error loading todos: ", err);
        return []; 
    }
}

function TopicsList() {
    const [todos, setTodos] = useState([]); 
    const [loading, setLoading] = useState(true); 

    useEffect(() => {
        const fetchTodos = async () => {
            const response = await getTodos(); 
            
            const { todos: fetchedTodos } = response; 
            setTodos(fetchedTodos || []); 
            setLoading(false); 
        };

        fetchTodos();
    }, []); 

    if (loading) {
        return <p>Loading todos...</p>; 
    }
    console.log(process.env.NEXT_PUBLIC_MONGODB_URL);
    
    return (
        <>
            {todos && todos.length > 0 ? (
                todos.map((t) => (
                    <div key={t._id} className='flex flex-row justify-between p-6 border border-black rounded-sm my-4'>
                        <div className='flex flex-col gap-2'>
                            <h2 className='font-bold text-3xl text-black'>{t.title}</h2>
                            <p className='text-xl text-slate-800'>{t.description}</p>
                        </div>
                        <div className='flex flex-row gap-2 font-bold items-baseline text-3xl'>
                            <Link href={`/editTodo/${t._id}`}>
                                <FaEdit className='cursor-pointer' />
                            </Link>
                            <DeleteTodo id={t._id} />
                        </div>
                    </div>
                ))
            ) : (
                <p>No todos available.</p> // Fallback if there are no todos
            )}
        </>
    );
}

export default TopicsList;
