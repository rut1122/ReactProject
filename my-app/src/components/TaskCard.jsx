import React from 'react';
import{deleteTask,updateTaskStatus,editTask}from "../store/projectsSlice";
import {useDispatch} from "react-redux";
import { useParams } from 'react-router-dom';
import { useState } from 'react';


const TaskCard = ({ task }) => {
  const dispatch = useDispatch();
  const { projectId } = useParams();

  // סטייט למצב עריכה כללית (שם, תיאור וכו')
  const [isEditing, setIsEditing] = useState(false);
  const [tempTask, setTempTask] = useState({ ...task });

  // פונקציה לשינוי סטטוס בלבד
  const handleStatusChange = (e) => {
    const newStatus = e.target.value;
    dispatch(updateTaskStatus({
      projectId,
      taskId: task.id,
      newStatus: newStatus
    }));
  };

  // פונקציה לשמירת עריכת שאר השדות
  const handleSaveEdit = () => {
    dispatch(editTask({
      projectId,
      taskId: task.id,
      updatedFields: {
        title: tempTask.title,
        description: tempTask.description,
        date: tempTask.date,
        priority: tempTask.priority
      }
    }));
    setIsEditing(false);
  };

  if (isEditing) {
    return (
      <div style={editCardStyle}>
        <input style={inputStyle} value={tempTask.title} onChange={(e) => setTempTask({...tempTask, title: e.target.value})} />
        <textarea style={inputStyle} value={tempTask.description} onChange={(e) => setTempTask({...tempTask, description: e.target.value})} />
        <select style={inputStyle} value={tempTask.priority} onChange={(e) => setTempTask({...tempTask, priority: e.target.value})}>
          <option value="Low">Low</option>
          <option value="Medium">Medium</option>
          <option value="High">High</option>
        </select>
        <button onClick={handleSaveEdit} style={btnSave}>שמור</button>
        <button onClick={() => setIsEditing(false)} style={btnCancel}>ביטול</button>
      </div>
    );
  }

  return (
    <div style={cardStyle}>
      <h4 style={{ margin: '0 0 5px 0' }}>{task.title}</h4>
      <p style={{ fontSize: '14px', color: '#666' }}>{task.description}</p>
      
      {/* בחירת סטטוס - המעבר בין העמודות */}
      <div style={{ marginTop: '10px', borderTop: '1px solid #eee', paddingTop: '10px' }}>
        <label style={{ fontSize: '11px', color: '#888' }}>סטטוס:</label>
        <select 
          value={task.status} 
          onChange={handleStatusChange}
          style={statusSelectStyle}
        >
          <option value="To Do">To Do</option>
          <option value="In Progress">In Progress</option>
          <option value="Testing">Testing</option>
          <option value="Done">Done</option>
        </select>
      </div>

      <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '10px' }}>
        <button onClick={() => setIsEditing(true)} style={btnEdit}>✎ ערוך</button>
        <small>{task.priority} | {task.date}</small>
      </div>
<button onClick={()=>dispatch(deleteTask({ projectId: projectId, taskId: task.id }))}>🗑️</button>
{/* <button onClick={()=>dispatch(updateTaskStatus({projectId:projectId,taskId:task.id,newStatus:newStatus}))}>⬆️</button> */}

    </div>
  );
};
       


// עיצובים
const cardStyle = { backgroundColor: "white", padding: "15px", borderRadius: "8px", boxShadow: "0 2px 4px rgba(0,0,0,0.1)", marginBottom: "10px" };
const editCardStyle = { ...cardStyle, border: "1px solid #007bff" };
const inputStyle = { width: "100%", marginBottom: "5px", padding: "5px" };
const statusSelectStyle = { width: "100%", padding: "4px", fontSize: "13px", cursor: "pointer", borderRadius: "4px", border: "1px solid #ddd" };
const btnEdit = { background: "none", border: "none", color: "#007bff", cursor: "pointer", fontSize: "12px" };
const btnSave = { backgroundColor: "#28a745", color: "white", border: "none", padding: "5px 10px", borderRadius: "4px", cursor: "pointer" };
const btnCancel = { backgroundColor: "#dc3545", color: "white", border: "none", padding: "5px 10px", borderRadius: "4px", cursor: "pointer", marginRight: "5px" };

export default TaskCard;