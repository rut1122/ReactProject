import React from "react";
import { useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import TaskCard from "./TaskCard"; 

const TasksList = () => {
  const { ProjectId } = useParams();
  const navigate = useNavigate();

  const projects = useSelector((state) => state.projects.list);
  
  const project = projects.find((p) => String(p.id) === String(ProjectId));
  const tasks = project?.tasks || [];

  const statuses = [
    { id: "To Do", title: "משימות לביצוע" },
    { id: "In Progress", title: "בביצוע מפתח" },
    { id: "Testing", title: "מוכן לבדיקות" },
    { id: "Done", title: "נבדקו" },
  ];

  if (!project) return <p dir="rtl">טוען פרויקט או שהפרויקט לא נמצא...</p>;

  return (
    <div style={{ padding: "20px" }} dir="rtl">
      <header style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <h1>פרויקט: {project.name}</h1>
        <button 
          onClick={() => navigate(`/Projects/${ProjectId}/AddTask`)}
          style={{ padding: "10px 20px", cursor: "pointer", backgroundColor: "#007bff", color: "white", border: "none", borderRadius: "5px" }}
        >
          + הוסף משימה חדשה
        </button>
      </header>

      <div style={{ display: "flex", gap: "15px", marginTop: "20px" }}>
        {statuses.map((status) => (
          <div key={status.id} style={{
            flex: 1,
            backgroundColor: "#ebedf0", // צבע רקע מעט שונה לעמודה
            padding: "10px",
            borderRadius: "8px",
            minHeight: "500px",
            border: "1px solid #ddd"
          }}>
            <h3 style={{ textAlign: "center", color: "#333" }}>{status.title}</h3>
            
            {/* 2. כאן קורה השינוי המרכזי! */}
            {tasks
              .filter((t) => t.status === status.id)
              .map((t) => (
                // במקום לכתוב כאן את כל ה-HTML של המשימה, אנחנו קוראים לכרטיס
                <TaskCard key={t.id} task={t} projectId={ProjectId} />
              ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TasksList;
