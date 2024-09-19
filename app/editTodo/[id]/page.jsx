
import React from 'react'
import EditTodoForm from '../../../components/EditTodoForm'

  const updateTodoById = async (id) => {
    try {
      const response = await fetch(`http://localhost:3000/editTodo/${id}`, {
        cache: "no-store",
      })
      if(!response.ok){
        throw new Error("Failed to fetch todo");
      }
      return response.json();
    } catch (err) {
      console.log("Error while updating todo", err);
    }
  }

  async function EditTodo({params}) {
    const { id } = params;
    console.log("id",id);
    const { todo } = await updateTodoById(id);
    const { title, description } = todo;
    
  return <EditTodoForm id={id} title={title} description={description} />
}

export default EditTodo;
