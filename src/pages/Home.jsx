
import axios from 'axios';
import '../css/Home.css';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Home() {

  const navigate = useNavigate();

  const [todos, setTodos] = useState([]);

 
  const getTodos = async () => {

    try {

      const result = await axios.get(
        "https://daily-task-manager-api.onrender.com/tasks"
        
      );

      setTodos(result.data);

    } catch (error) {

      console.log(error);

    }

  };



  useEffect(() => {

    getTodos();

  }, []);


  const deleteTodo = async (id) => {

    const confirmDelete = window.confirm(
      "Are you want to delete ?"
    );

    if (!confirmDelete) {
      return;
    }

    try {

      await axios.delete(
        `http://localhost:3000/tasks/${id}`
      );

      setTodos(
        todos.filter(item => item.id !== id)
      );

    } catch (error) {

      console.log(error);

    }

  };


  return (

    <div className="home">

      {/* Page Heading */}

      <div className="home-heading">

        <h1> Manage your tasks easily </h1>

       </div>

<div className="task-list">

        {todos.length > 0 ? (

          todos.map((item) => (

            <div className="task-card" key={item.id} >
             <div className="task-header">
 <h2> {item.title} </h2> </div>
<div className="todo-status">

<strong>Status:</strong>

<span>{item.status} </span>

              </div>


          

              <div className="task-actions">

              

                <button className="edit-btn" onClick={() => navigate(`/edit-todo/${item.id}`) } > Edit </button>


                <button className="delete-btn" onClick={() => deleteTodo(item.id)}>Delete </button>

              </div>

            </div>

          ))

        ) : (

          <div className="no-tasks">
             <h2>No Todos Yet</h2>

          </div>

        )}

      </div>

    </div>

  );

}

export default Home;

