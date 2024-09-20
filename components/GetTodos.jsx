import React from 'react';

const getTodos = async () => {
    try {
        const res = await fetch("http://localhost:3000/api/todo", {
            cache: "no-store",
          });
      
          if (!res.ok) {
            throw new Error("Failed to fetch topics");
          }
      
          return res.json();
    } catch (err) {
        console.log("Error loading todo: ", err);
    }
}

export default getTodos;
