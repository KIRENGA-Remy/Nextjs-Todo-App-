"use client";
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { FaEdit } from 'react-icons/fa';
import DeleteTodo from './DeleteTodo';
import getTodos from './GetTodos'; // Import getTodos function

function TopicsList() {
    const [todos, setTodos] = useState([]); // State to store todos
    const [loading, setLoading] = useState(true); // State to handle loading state

    useEffect(() => {
        // Fetch todos when the component mounts
        const fetchTodos = async () => {
            const response = await getTodos(); // Fetch todos from API
            
            // Assuming the response is an object with 'todos' key
            const { todos: fetchedTodos } = response; // Destructure todos from the response
            setTodos(fetchedTodos || []); // Set the todos in state
            setLoading(false); // Set loading to false
        };

        fetchTodos();
    }, []); // Empty dependency array ensures this runs once when component mounts

    if (loading) {
        return <p>Loading todos...</p>; // Show loading message while fetching
    }
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
