// import React, { useState } from 'react';
// import { useDispatch } from 'react-redux';
// import { addProject } from '../store/projectsSlice';
// import { useStore } from 'react-redux';

// const AddProject = () => {

// const dispatch = useDispatch();
//     const [projectName, setProjectName] = useState('');
//     const [projectDescription, setProjectDescription] = useState('');
//     const [projectDate, setProjectDate] = useState('');
  
//     const handleSubmit = () => {
//       if(!projectName || !projectDescription || !projectDate) {
//     alert('אנא מלא את כל השדות');
//     return;
  
//     const newProject = {
//       name: projectName,
//       description: projectDescription,
//       date: projectDate,
//     }
//       };
//   addProject(newProject);

//   setProjectName('');
//     setProjectDescription('');
//     setProjectDate('');
//     }

// return (
//   <>
//   <div className="add-project">
//         <h2>הוספת פרויקט חדש</h2>
        
//         <div className="form-contauner">
//             <input 
//             placeholder="שם הפרויקט"
//             value={projectName}
//             onChange={(e) => setProjectName(e.target.value)}
//             /> 
//             <input 
//             placeholder="תיאור הפרויקט"
//             value={projectDescription}>
//             onChange={(e) => setProjectDescription(e.target.value)}
//             </input>
//             <input
//              placeholder="תאריך הפרויקט"
//             value={projectDate}
//             onChange={(e) => setProjectDate(e.target.value)}
//                />
//                <button onClick={handleSubmit}>הוסף פרויקט</button>  
//         </div>
//         </div>     
//   </>
// )
// }
// export default AddProject;

import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addProject } from '../store/projectsSlice';

const AddProject = () => {
  const dispatch = useDispatch();
  
  // הגדרת State לכל שדה בטופס
  const [projectName, setProjectName] = useState('');
  const [projectDescription, setProjectDescription] = useState('');
  const [projectDate, setProjectDate] = useState('');

  const handleSubmit = () => {
    // בדיקה: האם כל השדות מלאים? (ולידציה)
    if (!projectName || !projectDescription || !projectDate) {
      alert('אנא מלא את כל השדות: שם, תיאור ותאריך');
      return; // עוצר את הפונקציה כאן אם חסר מידע
    }

    // יצירת אובייקט עם הנתונים מהשדות
    const newProjectData = {
      name: projectName,
      description: projectDescription,
      date: projectDate,
    };

    // שליחת האובייקט ל-Redux באמצעות dispatch
    dispatch(addProject(newProjectData));

    // איפוס השדות בטופס לאחר ההוספה להכנה לפרויקט הבא
    setProjectName('');
    setProjectDescription('');
    setProjectDate('');
  };

  return (
    <div className="add-project" style={{ marginBottom: '20px', borderBottom: '1px solid #ccc', padding: '10px' }}>
      <h2>הוספת פרויקט חדש</h2>
      <div className="form-container" style={{ display: 'flex', flexDirection: 'column', gap: '10px', maxWidth: '300px' }}>
        <input 
          placeholder="שם הפרויקט *" 
          value={projectName} 
          onChange={(e) => setProjectName(e.target.value)} 
        /> 
        {/* שינוי מ-input שנסגר לא נכון ל-input רגיל או textarea */}
        <textarea 
          placeholder="תיאור הפרויקט *" 
          value={projectDescription} 
          onChange={(e) => setProjectDescription(e.target.value)} 
        />
        <input 
          type="date" 
          value={projectDate} 
          onChange={(e) => setProjectDate(e.target.value)} 
        />
        <button onClick={handleSubmit}>הוסף פרויקט</button>  
      </div>
    </div>
  );
};

export default AddProject;