import React from 'react';

const getTodos = async () => {
    try {
        const response = await fetch("http://localhost:3000/api/todo", { // Ensure the correct endpoint
            method: "GET",
            headers: {
                "Content-type": "application/json"
            },
            // No body is needed for GET requests
        });
        if (!response.ok) {
            throw new Error("Failed to fetch todos");
        }
        return response.json();
    } catch (err) {
        console.log("Error while fetching todos", err);
        return []; // Return an empty array in case of error to avoid further issues
    }
}

export default getTodos;
