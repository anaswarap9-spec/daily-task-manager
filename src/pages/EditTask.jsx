
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import '../css/AddTask.css';

function EditTask() {

  const { id } = useParams();
  const navigate = useNavigate();

  const [taskName, setTaskName] = useState("");
  const [status, setStatus] = useState("Pending");



  useEffect(() => {

    const getTask = async () => {

      try {

        const result = await axios.get(
          `http://localhost:3000/tasks/${id}`
        );

        const task = result.data;

        setTaskName(task.title);
        setStatus(task.status);

      } catch (error) {

        console.log(error);

      }

    };

    getTask();

  }, [id]);

  const updateTask = async (e) => {

    e.preventDefault();

    if (taskName.trim() === "") {

      alert("Please enter a task title");
      return;

    }


   
    const updatedTask = {

      title: taskName,
      status: status

    };


    try {

      await axios.patch(
        `http://localhost:3000/tasks/${id}`,
        updatedTask
      );

      alert("Task updated successfully!");

      navigate("/");

    } catch (error) {

      console.log(error);

      alert("Something went wrong!");

    }

  };


  return (

    <div className="add-task-page">

      <div className="add-task-card">

        <h1>Update Todo</h1>

        <p>
          Edit your todo details
        </p>


        <form onSubmit={updateTask}>


   
          <label>Todo Title</label>

          <input
            type="text"
            placeholder="Enter todo title"
            value={taskName}
            onChange={(e) =>
              setTaskName(e.target.value)
            }
          />


   

          <label>Status</label>

          <select
            value={status}
            onChange={(e) =>
              setStatus(e.target.value)
            }
          >

            <option value="Pending">
              Pending
            </option>

            <option value="Completed">
              Completed
            </option>

          </select>


        

          <button type="submit">

            Update 

          </button>


        </form>

      </div>

    </div>

  );

}

export default EditTask;

