import React from "react";
import { useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";

const TasksList = () => {
  const { ProjectId } = useParams();
  const navigate = useNavigate();

  // שליפת הרשימה כולה כדי למנוע את אזהרת ה-Memoization
  const projects = useSelector((state) => state.projects.list);
  
  // מציאת הפרויקט מחוץ ל-useSelector
  const project = projects.find((p) => String(p.id) === String(ProjectId));
  const tasks = project?.tasks || [];

  const statuses = [
    { id: "To Do", title: "משימות לביצוע" },
    { id: "In Progress", title: "בביצוע מפתח" },
    { id: "Testing", title: "מוכן לבדיקות" },
    { id: "Done", title: "נבדקו" }
  ];

  if (!project) return <p dir="rtl">טוען פרויקט או שהפרויקט לא נמצא...</p>;

  return (
    <div style={{ padding: "20px" }} dir="rtl">
      <header>
        <h1>פרויקט: {project.name}</h1>
        <button onClick={() => navigate(`/Projects/${ProjectId}/AddTask`)}>
          + הוסף משימה חדשה
        </button>
      </header>

      <div style={{ display: "flex", gap: "15px", marginTop: "20px" }}>
        {statuses.map((status) => (
          <div key={status.id} style={{
            flex: 1,
            backgroundColor: "#f4f4f4",
            padding: "10px",
            borderRadius: "8px",
            minHeight: "400px",
            border: "1px solid #ddd"
          }}>
            <h3 style={{ textAlign: "center", borderBottom: "2px solid #ccc" }}>{status.title}</h3>
            
            {tasks
              .filter((t) => t.status === status.id)
              .map((t) => (
                <div key={t.id} style={{
                  backgroundColor: "white",
                  margin: "10px 0",
                  padding: "10px",
                  borderRadius: "5px",
                  boxShadow: "0 1px 3px rgba(0,0,0,0.1)"
                }}>
                  <h4>{t.title}</h4>
                  <p>{t.description}</p>
                  <small style={{ color: "#666" }}>
                    עדיפות: {t.priority} | תאריך: {t.date}
                  </small>
                </div>
              ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TasksList;