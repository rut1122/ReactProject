// import React from "react";
// import { useSelector } from "react-redux";
// import { useParams, useNavigate } from "react-router-dom";

// const TasksList = () => {
//   const { ProjectId } = useParams();
//   const navigate = useNavigate();

//   // שליפת הרשימה כולה כדי למנוע את אזהרת ה-Memoization
//   const projects = useSelector((state) => state.projects.list);
  
//   // מציאת הפרויקט מחוץ ל-useSelector
//   const project = projects.find((p) => String(p.id) === String(ProjectId));
//   const tasks = project?.tasks || [];

//   const statuses = [
//     { id: "To Do", title: "משימות לביצוע" },
//     { id: "In Progress", title: "בביצוע מפתח" },
//     { id: "Testing", title: "מוכן לבדיקות" },
//     { id: "Done", title: "נבדקו" }
//   ];

//   if (!project) return <p dir="rtl">טוען פרויקט או שהפרויקט לא נמצא...</p>;

//   return (
//     <div style={{ padding: "20px" }} dir="rtl">
//       <header>
//         <h1>פרויקט: {project.name}</h1>
//         <button onClick={() => navigate(`/Projects/${ProjectId}/AddTask`)}>
//           + הוסף משימה חדשה
//         </button>
//       </header>

//       <div style={{ display: "flex", gap: "15px", marginTop: "20px" }}>
//         {statuses.map((status) => (
//           <div key={status.id} style={{
//             flex: 1,
//             backgroundColor: "#f4f4f4",
//             padding: "10px",
//             borderRadius: "8px",
//             minHeight: "400px",
//             border: "1px solid #ddd"
//           }}>
//             <h3 style={{ textAlign: "center", borderBottom: "2px solid #ccc" }}>{status.title}</h3>
            
//             {tasks
//               .filter((t) => t.status === status.id)
//               .map((t) => (
//                 <div key={t.id} style={{
//                   backgroundColor: "white",
//                   margin: "10px 0",
//                   padding: "10px",
//                   borderRadius: "5px",
//                   boxShadow: "0 1px 3px rgba(0,0,0,0.1)"
//                 }}>
//                   <h4>{t.title}</h4>
//                   <p>{t.description}</p>
//                   <small style={{ color: "#666" }}>
//                     עדיפות: {t.priority} | תאריך: {t.date}
//                   </small>
//                 </div>
//               ))}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };
// {tasks
//   .filter((t) => t.status === status.id)
//   .map((t) => (
//     <TaskCard key={t.id} task={t} />
//   ))}

// export default TasksList;

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
    { id: "Done", title: "נבדקו" }
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
                <TaskCard key={t.id} task={t} />
              ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TasksList;