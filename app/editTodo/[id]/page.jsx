import EditTodoForm from '../../../components/EditTodoForm';

const updateTodoById = async (id) => {
  try {
    const response = await fetch(`http://localhost:3000/api/todo/${id}`, {
      cache: "no-store",
    });
    if (!response.ok) {
      throw new Error("Failed to fetch todo");
    }
    return response.json();
  } catch (err) {
    console.log("Error while updating todo", err);
    return null;
  }
};

export default async function EditTodo({ params }) {
  const { id } = params;
  console.log("this is id ", id);
  
  const {todoUpdate} = await updateTodoById(id);

  const { title, description } = todoUpdate;

  return <EditTodoForm id={id} title={title} description={description} />;
}
