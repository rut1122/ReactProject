// import { useState } from "react";
// import { useDispatch } from "react-redux";
// import { useLocation } from "react-router-dom"; // הוסף את useLocation כאן
// import { useParams } from "react-router-dom";
// import { addTaskToProject } from "../store/projectsSlice";
// import { useStore } from "react-redux";

// const AddTask = () => {
//   //     •	כותרת
//   // •	תיאור
//   // •	סטטוס (To Do / In Progress / Done)
//   // •	עדיפות (Low / Medium / High)
//   // •	תאריך יעד
//  const dispatch = useDispatch();
// const { projectId } = useParams();
// const location = useLocation();
// const projectFromState = location.state?.project;

//   const [taskTitle, setTaskTitle] = useState("");
//   const [taskDescription, setTaskDescription] = useState("");
//   const [taskStatus, setTaskStatus] = useState("");
//   const [taskPriority, setTaskPriority] = useState("");
//   const [taskDate, setTaskDate] = useState("");
//   //אובייקט משימה חדשה
//   // const handleSubmitTask = () => {
//   //   const newTaskToProject = {
//   //     projectId,
//   //     title: taskTitle,
//   //     description: taskDescription,
//   //     status: taskStatus,
//   //     prioirity: taskPriority,
//   //     date: taskDate,
//   //   };
//   //   dispatch(addTaskToProject(newTaskToProject));

//   //   setTaskTitle("");
//   //   setTaskStatus("");
//   //   setTaskPriority("");
//   //   setTaskDescription("");
//   //   setTaskDate("");
//   // };

//   const handleSubmitTask = () => {
//   // יצירת אובייקט המשימה ללא ה-ID של הפרויקט בתוכו
//   const taskData = {
//     title: taskTitle,
//     description: taskDescription,
//     status: taskStatus,
//     priority: taskPriority,
//     date: taskDate,
//   };

//   // שליחת האובייקט בדיוק כפי שה-Reducer מצפה לקבל
//   dispatch(addTaskToProject({
//     projectId: projectId,
//     task: taskData
//   }));

//   // איפוס השדות
//   setTaskTitle("");
//   setTaskStatus("");
//   setTaskPriority("");
//   setTaskDescription("");
//   setTaskDate("");

//   // בונוס: ניווט חזרה לרשימת המשימות כדי לראות את התוצאה
//   navigate(`/Projects/${projectId}/TasksList`);
// };
//   return (
//     <>
//       <div className="add-task">
//         <h2>הוספת משימה חדשה</h2>
//         <div className="task-form-container">
//             <input
//             type="text"
//             placeholder="כותרת המשימה"
//             value={taskTitle}
//             onChange={(e)=>setTaskTitle(e.target.value)}
//             />
//                 <input
//                 type="text"
//             placeholder="תיאור המשימה"
//             value={taskDescription}
//             onChange={(e)=>setTaskDescription(e.target.value)}
//             />
//     <select
//   value={taskStatus}
//   onChange={(e) => setTaskStatus(e.target.value)}
//   style={{ padding: '8px', marginBottom: '10px', display: 'block', width: '100%' }}
// >
//   <option value="" disabled>בחר סטטוס משימה</option>
//   <option value="To Do">To Do (טרם בוצע)</option>
//   <option value="In Progress">In Progress (בביצוע מפתח)</option>
//   <option value="Testing">Testing (מוכן לבדיקות)</option>
//   <option value="Done">Done (נבדקו/הושלמו)</option>
// </select>
//     <select
//   value={taskPriority}
//   onChange={(e) => setTaskPriority(e.target.value)}
//   style={{ padding: '8px', marginBottom: '10px', display: 'block', width: '100%' }}
// >
//   <option value="" disabled>בחר עדיפות</option>
//   <option value="Low">Low (נמוכה)</option>
//   <option value="Medium">Medium (בינונית)</option>
//   <option value="High">High (גבוהה)</option>
// </select>
//                 <input
//                 type="date"
//             placeholder="תאריך יעד המשימה"
//             value={taskDate}
//             onChange={(e)=>setTaskDate(e.target.value)}
//             />
//             <button onClick={handleSubmitTask}>הוסף משימה</button>

//         </div>
//       </div>
//     </>
//   );
// };
// export default AddTask;
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { addTaskToProject } from "../store/projectsSlice";

const AddTask = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // חשוב: שם המשתנה כאן חייב להיות זהה למה שכתוב ב-App.js ב-Route
  // אם ב-Route כתוב :projectId, אז כאן זה projectId
  const { projectId } = useParams();

  const [taskTitle, setTaskTitle] = useState("");
  const [taskDescription, setTaskDescription] = useState("");
  const [taskStatus, setTaskStatus] = useState("");
  const [taskPriority, setTaskPriority] = useState("");
  const [taskDate, setTaskDate] = useState("");

  const handleSubmitTask = (e) => {
    e.preventDefault();

    if (!taskTitle || !taskStatus) {
      alert("חובה למלא כותרת וסטטוס");
      return;
    }

    // יצירת האובייקט בדיוק כמו שה-Slice שלך מצפה לקבל ב-payload
    const actionPayload = {
      projectId: projectId, // המזהה של הפרויקט
      task: {
        title: taskTitle,
        description: taskDescription,
        status: taskStatus,
        priority: taskPriority,
        date: taskDate,
      },
    };

    console.log("שולח ל-Redux:", actionPayload); // לבדיקה ב-Console

    dispatch(addTaskToProject(actionPayload));

    // ניווט חזרה לרשימת המשימות
    navigate(`/Projects/${projectId}/TasksList`);
  };

  return (
    <div
      style={{
        padding: "20px",
        direction: "rtl",
        maxWidth: "500px",
        margin: "auto",
      }}
    >
      <h2 style={{ textAlign: "center", color: "#333" }}>הוספת משימה חדשה</h2>

      <form
        onSubmit={handleSubmitTask}
        style={{ display: "flex", flexDirection: "column", gap: "10px" }}
      >
        <input
          type="text"
          placeholder="כותרת המשימה *"
          value={taskTitle}
          onChange={(e) => setTaskTitle(e.target.value)}
          style={inputStyle}
        />

        <textarea
          placeholder="תיאור המשימה"
          value={taskDescription}
          onChange={(e) => setTaskDescription(e.target.value)}
          style={{ ...inputStyle, minHeight: "80px" }}
        />

        <label>סטטוס משימה: *</label>
        <select
          value={taskStatus}
          onChange={(e) => setTaskStatus(e.target.value)}
          style={inputStyle}
        >
          <option value="" disabled>
            בחר סטטוס
          </option>
          <option value="To Do">To Do (לביצוע)</option>
          <option value="In Progress">In Progress (בביצוע)</option>
          <option value="Testing">Testing (בדיקות)</option>
          <option value="Done">Done (בוצע)</option>
        </select>

        <label>עדיפות:</label>
        <select
          value={taskPriority}
          onChange={(e) => setTaskPriority(e.target.value)}
          style={inputStyle}
        >
          <option value="" disabled>
            בחר עדיפות
          </option>
          <option value="Low">נמוכה</option>
          <option value="Medium">בינונית</option>
          <option value="High">גבוהה</option>
        </select>

        <label>תאריך יעד:</label>
        <input
          type="date"
          value={taskDate}
          onChange={(e) => setTaskDate(e.target.value)}
          style={inputStyle}
        />

        <div style={{ display: "flex", gap: "10px", marginTop: "10px" }}>
          <button type="submit" style={saveButtonStyle}>
            שמור משימה
          </button>
          <button
            type="button"
            onClick={() => navigate(-1)}
            style={cancelButtonStyle}
          >
            ביטול
          </button>
        </div>
      </form>
    </div>
  );
};

// עיצוב קליל
const inputStyle = {
  padding: "10px",
  borderRadius: "5px",
  border: "1px solid #ddd",
  fontSize: "16px",
};
const saveButtonStyle = {
  flex: 2,
  padding: "12px",
  backgroundColor: "#007bff",
  color: "white",
  border: "none",
  borderRadius: "5px",
  cursor: "pointer",
  fontWeight: "bold",
};
const cancelButtonStyle = {
  flex: 1,
  padding: "12px",
  backgroundColor: "#ccc",
  color: "#333",
  border: "none",
  borderRadius: "5px",
  cursor: "pointer",
};

export default AddTask;
