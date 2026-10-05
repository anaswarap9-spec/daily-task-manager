
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../css/AddTask.css';

function AddTask() {

  const navigate = useNavigate();

  const [taskName, setTaskName] = useState("");
  const [status, setStatus] = useState("Pending");

  const addTask = async (e) => {

    e.preventDefault();

    if (taskName.trim() === "") {
      alert("Please enter task title");
      return;
    }

    
    const newTodo = {
      title: taskName,
      status: status
    };

    try {

    
      await axios.post(
        "http://localhost:3000/tasks",
        newTodo
      );

      alert("Added successfully!");

     
      setTaskName("");
      setStatus("Pending");

    
      navigate("/");

    } catch (error) {

      console.log(error);
      alert("Something went wrong!");

    }
  };

  return (

    <div className="add-task-page">

      <div className="add-task-card">

        <h1>Add a new task to your todo list</h1>

        

        <form onSubmit={addTask}>

        <label>Todo Title</label>
         <input type="text" placeholder="Enter todo title" value={taskName} onChange={(e) =>setTaskName(e.target.value)} />

          <label>Status</label>
          <select value={status} onChange={(e) => setStatus(e.target.value)}>

            <option value="Pending">Pending </option>

            <option value="Completed">Completed</option>

          </select>

  

          <button type="submit">
            + Add
          </button>

        </form>

      </div>

    </div>

  );
}

export default AddTask;

