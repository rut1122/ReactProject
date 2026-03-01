
import React from 'react';
import{deleteTask,updateTaskStatus}from "../store/projectsSlice";
import {useDispatch} from "react-redux";
import { use } from 'react';
const TaskCard = ({ task,projectId }) => {
  // פונקציה לקבלת צבע לפי רמת העדיפות
  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'High': return '#ff4d4d';    // אדום לדחוף
      case 'Medium': return '#ffcc00';  // צהוב לבינוני
      case 'Low': return '#28a745';     // ירוק לנמוך
      default: return '#ccc';
    }
  };
const dispatch=useDispatch();
  return (
    <div style={{
      backgroundColor: "white",
      margin: "12px 0",
      padding: "15px",
      borderRadius: "10px",
      boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
      borderRight: `6px solid ${getPriorityColor(task.priority)}`, // פס צבע בצד לפי עדיפות
      transition: "transform 0.2s",
      cursor: "pointer"
    }}>
      <div style={{ marginBottom: "8px" }}>
        <h4 style={{ margin: "0", color: "#333", fontSize: "1.1rem" }}>{task.title}</h4>
      </div>
      
      <p style={{ margin: "0 0 12px 0", color: "#666", fontSize: "0.9rem", lineHeight: "1.4" }}>
        {task.description}
      </p>

      <div style={{ 
        display: "flex", 
        justifyContent: "space-between", 
        alignItems: "center",
        borderTop: "1px solid #eee",
        paddingTop: "10px",
        fontSize: "0.8rem"
      }}>
        <span style={{
          backgroundColor: "#f0f0f0",
          padding: "2px 8px",
          borderRadius: "12px",
          fontWeight: "bold",
          color: getPriorityColor(task.priority)
        }}>
          {task.priority}
        </span>
        
        <span style={{ color: "#999" }}>
           📅 {task.date}
        </span>
        <select

        value={task.status}
        onChange={(e)=> }>
          const newStatus=e.target.value
          dispatch(updateTaskStatus())
        


        </select>
        <button onClick={()=>dispatch(deleteTask({ projectId: projectId, taskId: task.id }))}>🗑️</button>
        <button onClick={()=>dispatch(updateTaskStatus({projectId:projectId,taskId:task.id,newStatus:newStatus}))}>⬆️</button>
      </div>
    </div>
  );
};

export default TaskCard;