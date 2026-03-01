import { useState } from "react";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom"; // הוסף את useLocation כאן
import { useParams } from "react-router-dom";
import { addTaskToProject } from "../store/projectsSlice";
import { useStore } from "react-redux";

const AddTask = () => {
  //     •	כותרת
  // •	תיאור
  // •	סטטוס (To Do / In Progress / Done)
  // •	עדיפות (Low / Medium / High)
  // •	תאריך יעד
 const dispatch = useDispatch();
const { ProjectId } = useParams();
const location = useLocation();
const projectFromState = location.state?.project;

  const [taskTitle, setTaskTitle] = useState("");
  const [taskDescription, setTaskDescription] = useState("");
  const [taskStatus, setTaskStatus] = useState("");
  const [taskPriority, setTaskPriority] = useState("");
  const [taskDate, setTaskDate] = useState("");
  //אובייקט משימה חדשה
  const handleSubmitTask = () => {
    const newTaskToProject = {
      ProjectId,
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
            type="text"
            placeholder="כותרת המשימה"
            value={taskTitle}
            onChange={(e)=>setTaskTitle(e.target.value)}
            />
                <input
                type="text"
            placeholder="תיאור המשימה"
            value={taskDescription}
            onChange={(e)=>setTaskDescription(e.target.value)}
            />
    <select 
  value={taskStatus} 
  onChange={(e) => setTaskStatus(e.target.value)}
  style={{ padding: '8px', marginBottom: '10px', display: 'block', width: '100%' }}
>
  <option value="" disabled>בחר סטטוס משימה</option>
  <option value="To Do">To Do (טרם בוצע)</option>
  <option value="In Progress">In Progress (בביצוע מפתח)</option>
  <option value="Testing">Testing (מוכן לבדיקות)</option>
  <option value="Done">Done (נבדקו/הושלמו)</option>
</select>
    <select 
  value={taskPriority} 
  onChange={(e) => setTaskPriority(e.target.value)}
  style={{ padding: '8px', marginBottom: '10px', display: 'block', width: '100%' }}
>
  <option value="" disabled>בחר עדיפות</option>
  <option value="Low">Low (נמוכה)</option>
  <option value="Medium">Medium (בינונית)</option>
  <option value="High">High (גבוהה)</option>
</select>
                <input
                type="date"
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
