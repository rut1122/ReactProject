import React from "react";
import { useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import TaskCard from "./TaskCard";

const TasksList = () => {
  const { projectId } = useParams();
  const navigate = useNavigate();

  const projects = useSelector((state) => state.projects.list);

  const project = projects.find((p) => String(p.id) === String(projectId));
  const tasks = project?.tasks || [];

  const statuses = [
    { id: "To Do", title: "משימות לביצוע" },
    { id: "In Progress", title: "בביצוע מפתח" },
    { id: "Testing", title: "מוכן לבדיקות" },
    { id: "Done", title: "נבדקו" },
  ];

  if (!project) return <p dir="rtl">טוען פרויקט או שהפרויקט לא נמצא...</p>;

  return (
    // <div className="card-style" style={{ borderRight: `6px solid ${task.priority === 'High' ? 'red' : 'green'}` }}>
    <div className="main-container">
      <header style={{ textAlign: "center", marginBottom: "30px" }}>
        <h1>פרויקט: {project.name}</h1>
        <button
          className="add-btn"
          onClick={() => navigate(`/Projects/${projectId}/AddTask`)}
        >
          + משימה חדשה
        </button>
      </header>

      <div
        style={{
          display: "flex",
          gap: "20px",
          justifyContent: "center", // מרכוז העמודות
          alignItems: "flex-start",
          flexWrap: "wrap", // תמיכה במסכים קטנים
          width: "100%",
        }}
      >
        {statuses.map((status) => (
          <div
            key={status.id}
            style={{
              width: "280px", // רוחב קבוע לכל עמודה
              backgroundColor: "#ebedf0",
              padding: "15px",
              borderRadius: "10px",
              minHeight: "600px",
            }}
          >
            <h3 style={{ textAlign: "center" }}>{status.title}</h3>
            {tasks
              .filter((t) => t.status === status.id)

              .map((t) => (
                // במקום לכתוב כאן את כל ה-HTML של המשימה, אנחנו קוראים לכרטיס
                <TaskCard key={t.id} task={t} projectId={projectId} />
              ))}
          </div>
        ))}
      </div>
    </div>
    // </div>
  );
};
TasksList.jsx;
export default TasksList;
