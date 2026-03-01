// import { createSlice } from "@reduxjs/toolkit";
// //שמירת המידע בסלייס
// const projectsSlice = createSlice({
//   name: "projects",
//   initialState: {
//     list: [],
//   },
//   //פונקציות
//   reducers: {
//     //פונקצייה להוספת פרוייקט
//     addProject: (state, action) => {
//       const newProject = {
//         id: Date.now().toString(),
//         tasks: [],
//         ...action.payload,
//       };
//       state.list.push(newProject);
//     },
//     //פןנקציה לעריכת פרויקט
//     editProject:(state,action)=>{
      
//       //מחלצת את הפרויקט לעריכה
//       const projectToEdit = state.list.find(
//         (project)=>project.id===action.payload.id);
//         if(projectToEdit)
//           projectToEdit.name=action.payload.newName;
              
//     },
//     //פונקציה למחיקת פרויקט
//     deleteProject: (state, action) => {
//       //יוצר רשימה חדשה ללא הפרויקט שרוצים למחוק
//       state.list = state.list.filter(
//         (Project) => Project.id !== action.payload,
//       );
//     },
//     //הוספת משימה לפרויקט
//     addTaskToProject: (state, action) => {
//       const { ProjectId, task } = action.payload;
//       const project = state.list.find((p) => p.id === ProjectId);
//       if (project) {
//         project.tasks.push({
//           id: Date.now().toString(),
//           ...task,
//         });
//       }
//     },
//   },
  
// });
// export const { addProject,editProject, deleteProject, addTaskToProject } =
//   projectsSlice.actions;

// export default projectsSlice.reducer;


import { createSlice } from "@reduxjs/toolkit";

const projectsSlice = createSlice({
  name: "projects",
  initialState: {
    list: [],
  },
  reducers: {
    // הוספת פרויקט
    addProject: (state, action) => {
      const newProject = {
        id: Date.now().toString(),
        tasks: [], // חשוב: אתחול מערך משימות ריק
        ...action.payload,
      };
      state.list.push(newProject);
    },
    
    // עריכת פרויקט
    editProject: (state, action) => {
      const projectToEdit = state.list.find(
        (project) => project.id === action.payload.id
      );
      if (projectToEdit) {
        projectToEdit.name = action.payload.newName;
      }
    },

    // מחיקת פרויקט
    deleteProject: (state, action) => {
      state.list = state.list.filter(
        (project) => project.id !== action.payload
      );
    },

    // *** כאן התיקון הקריטי להוספת משימה ***
    addTaskToProject: (state, action) => {
      // חילוץ הנתונים שנשלחו מהקומפוננטה
      const { ProjectId, task } = action.payload;
      
      // מציאת הפרויקט המתאים ברשימה לפי ה-ID
      const project = state.list.find((p) => String(p.id) === String(ProjectId));
      
      if (project) {
        // הוספת המשימה למערך המשימות של הפרויקט שמצאנו
        project.tasks.push({
          id: Date.now().toString(), // יצירת ID ייחודי למשימה
          ...task,
        });
      }
    },
  },
});

export const { addProject, editProject, deleteProject, addTaskToProject } = projectsSlice.actions;
export default projectsSlice.reducer;