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

export default getTodos;
