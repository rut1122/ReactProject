import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTaskToProject } from "../store/projectsSlice";
import { useStore } from "react-redux";

const AddTask = () => {
  //     •	כותרת
  // •	תיאור
  // •	סטטוס (To Do / In Progress / Done)
  // •	עדיפות (Low / Medium / High)
  // •	תאריך יעד
  // //
  const [taskTitle, setTaskTitle] = useState("");
  const [taskDescription, setTaskDescription] = useState("");
  const [taskStatus, setTaskStatus] = useState("");
  const [taskPriority, setTaskPriority] = useState("");
  const [taskDate, setTaskDate] = useState("");
  //אובייקט משימה חדשה
  const handleSubmitTask = () => {
    const newTaskToProject = {
      title: taskTitle,
      description: taskDescription,
      status: taskStatus,
      prioirity: taskPriority,
      date: taskDate,
    };
    dispatch(addTaskToProject(newTaskToProject));

    setTaskTitle("");
    setTaskStatus("");
    setTaskPriority("");
    setTaskDescription("");
    setTaskDate("");
  };
  return (
    <>
      <div className="add-task">
        <h2>הוספת משימה חדשה</h2>
        <div className="task-form-container">
            <input
            placeholder="כותרת המשימה"
            value={taskTitle}
            onChange={(e)=>setTaskTitle(e.target.value)}
            />
                <input
            placeholder="תיאור המשימה"
            value={taskDescription}
            onChange={(e)=>setTaskDescription(e.target.value)}
            />
                <input
            placeholder="סטטוס המשימה"
            value={taskStatus}
            onChange={(e)=>setTaskStatus(e.target.value)}
            />
                <input
            placeholder="עדיפות המשימה"
            value={taskPriority}
            onChange={(e)=>setTaskPriority(e.target.value)}
            />
                <input
            placeholder="תאריך יעד המשימה"
            value={taskDate}
            onChange={(e)=>setTaskDate(e.target.value)}
            />
            <button onClick={handleSubmitTask}>הוסף משימה</button>

        </div>
      </div>
    </>
  );
};
export default AddTask;
