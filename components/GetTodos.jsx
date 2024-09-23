import React from 'react';

const getTodos = async (e) => {
    try {
        const res = await fetch("/api/todo", {
            method: 'GET',
            headers: {
                "Content-Type": "application/json"
            },
        });

        if (!res.ok) {
            throw new Error("Failed to fetch todos");
        }

        return await res.json();  // Await the parsed JSON response
    } catch (err) {
        console.log("Error loading todos: ", err);
        return [];  // Return an empty array in case of error
    }
}

export default getTodos;
