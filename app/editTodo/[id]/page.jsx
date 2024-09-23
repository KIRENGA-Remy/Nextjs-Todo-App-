import EditTodoForm from '../../../components/EditTodoForm';

const fetchTodoById = async (id) => { // Renamed to reflect fetching, not updating
  try {
    const response = await fetch(`${process.env.FRONTEND_URL}/api/todo/${id}`, {
      cache: "no-store", // Ensures the latest data is fetched
    });
    if (!response.ok) {
      throw new Error("Failed to fetch todo");
    }
    return await response.json(); // Assuming the API returns the todo object directly
  } catch (err) {
    console.log("Error while fetching todo:", err);
    return null;
  }
};

export default async function EditTodo({ params }) {
  const { id } = params; // Extracting the id from params
  console.log("This is the id:", id);
  
  const todoUpdate = await fetchTodoById(id); // No destructuring as the response is likely the todo itself

  if (!todoUpdate) {
    return <p>Todo not found or error occurred.</p>; // Handle the case where the todo is not fetched
  }

  const { title, description } = todoUpdate; // Destructure the fetched todo

  return <EditTodoForm id={id} title={title} description={description} />;
}
