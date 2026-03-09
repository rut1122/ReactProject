// import { useSelector, useDispatch } from "react-redux";
// import { Link } from "react-router-dom";
// import {
//   deleteProject,
//   editProject,
//   addProject,
//   addTaskToProject,
// } from "../store/projectsSlice";
// import AddProject from "./AddProject";
// import { useState } from "react";

// const Projects = () => {
//   // שליפת הרשימה מה-Store - שים לב ל-.list
//   const projects = useSelector((state) => state.projects.list);
//   const dispatch = useDispatch();
//   //סטייט לעריכה
//   const [tempName, setTempName] = useState("");
//   const [editingId, setEditingId] = useState(null);
//   //סטייט האם להציג את קומפו' ADDPROJECT
//   const [showAddProject, setShowAddProject] = useState(false);
//   return (
//     // <div key={p.id} className="card-style">
//       <div style={{ padding: "20px", direction: "rtl" }}>
//         <h1>רשימת פרויקטים ({projects.length})</h1>

//         <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
//           {projects.map((p) => (
//             <div
//               key={p.id}
//               style={{
//                 border: "1px solid black",
//                 padding: "10px",
//                 borderRadius: "8px",
//               }}
//             >
//               {/* /*האם הפרויקט הנוכחי במצב עריכה  */}

//               {editingId === p.id ? (
//                 <>
//                   <input
//                     value={tempName}
//                     onChange={(e) => setTempName(e.target.value)}
//                   />
//                   <button
//                     onClick={() => {
//                       dispatch(editProject({ id: p.id, newName: tempName }));
//                       setEditingId(null);
//                       setTempName("");
//                     }}
//                   >
//                     שמור
//                   </button>
//                 </>
//               ) : (
//                 <>
//                   <Link to={`/Projects/${p.id}/TasksList`}>{p.name}</Link>{" "}
//                   <p>{p.description}</p>
//                   <button
//                     onClick={() => {
//                       setEditingId(p.id);
//                       setTempName(p.name);
//                     }}
//                     style={{ backgroundColor: "blue", color: "white" }}
//                   >
//                     לעריכת פרויקט
//                   </button>
//                 </>
//               )}
//               <button
//                 onClick={() => dispatch(deleteProject(p.id))}
//                 style={{ backgroundColor: "red", color: "white" }}
//               >
//                 מחק פרויקט
//               </button>
//             </div>
//           ))}
//         </div>
//         <button onClick={() => setShowAddProject(true)}>הוספת פרויקט</button>

//         {projects.length === 0 && <p>אין פרויקטים ב-Store!</p>}
//         {showAddProject && <AddProject />}
//       </div>
//     // </div>
//   );
// };

// export default Projects;

import React from "react";
import AddProject from "./AddProject";

const Projects = () => {
  return (
    <div style={{ direction: "rtl" }}>
      {/* כאן אנחנו קוראים רק לקומפוננטה המעוצבת */}
      <AddProject />
    </div>
  );
};

export default Projects;
