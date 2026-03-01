import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addProject } from '../store/projectsSlice';
import { useStore } from 'react-redux';

const AddProject = () => {

    const dispatch = useDispatch();
    const [projectName, setProjectName] = useState('');
    const [projectDescription, setProjectDescription] = useState('');
    const [projectDate, setProjectDate] = useState('');
  //בדיקה האם כל השדות מלאים וולידציה עוצר את הפונקצי האם חסר מידע
    const handleSubmit = () => {
      if(!projectName || !projectDescription || !projectDate) {
    alert('אנא מלא את כל השדות');
    return;
      }
  
    const newProject = {
      name: projectName,
      description: projectDescription,
      date: projectDate,
    };
      
 dispatch(addProject(newProject));

  setProjectName('');
    setProjectDescription('');
    setProjectDate('');
    };

return (
  <>
  <div className="add-project">
        <h2>הוספת פרויקט חדש</h2>
        
        <div className="form-container">
            <input 
            placeholder="שם הפרויקט"
            value={projectName}
            onChange={(e) => setProjectName(e.target.value)}
            /> 
            <input 
            placeholder="תיאור הפרויקט"
            value={projectDescription}
            onChange={(e) => setProjectDescription(e.target.value)}
            />
            <input
             placeholder="תאריך הפרויקט"
            value={projectDate}
            onChange={(e) => setProjectDate(e.target.value)}
               />
               <button onClick={handleSubmit}>הוסף פרויקט</button>  
        </div>
        </div>
        
  </>
)

}
export default AddProject;