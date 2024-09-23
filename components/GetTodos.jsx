
const getTodos = async () => {
    try {
        const res = await fetch(`${process.env.FRONTEND_URL}/api/todo`, {
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
