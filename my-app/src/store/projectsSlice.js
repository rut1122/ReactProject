import { createSlice } from "@reduxjs/toolkit";
//שמירת המידע בסלייס
const projectsSlice = createSlice({
  name: "projects",
  initialState: {
    list: [],
  },
  //פונקציות
  reducers: {
    //פונקצייה להוספת פרוייקט
    addProject: (state, action) => {
      const newProject = {
        id: Date.now().toString(),
        tasks: [],
        ...action.payload,
      };
      state.list.push(newProject);
    },
    //פןנקציה לעריכת פרויקט
    editProject:(state,action)=>{
      
      //מחלצת את הפרויקט לעריכה
      const projectToEdit = state.list.find(
        (project)=>project.id===action.payload.id);
        if(projectToEdit)
          projectToEdit.name=action.payload.newName;
              
    },
    //פונקציה למחיקת פרויקט
    deleteProject: (state, action) => {
      //יוצר רשימה חדשה ללא הפרויקט שרוצים למחוק
      state.list = state.list.filter(
        (Project) => Project.id !== action.payload,
      );
    },
    //הוספת משימה לפרויקט
    addTaskToProject: (state, action) => {
      const { ProjectId, task } = action.payload;
      const project = state.list.find((p) => p.id === ProjectId);
      if (project) {
        project.tasks.push({
          id: Date.now().toString(),
          ...task,
        });
      }
    },
    //פונקתיה למחיקת משימה
    deleteTask:(state,action)=>{
      //מחלצים את הנתונים מהאקשין
      const{projectId,taskId}=action.payload
      //מציאת הפרויקט הספציפי אליו משייכת המשימה
      const project=state.list.find(p=>String(p.id)===String(ProjectId));
      
      //אם מצאנו יוצרים רשימה חדשה ללא המשימה שרצינו למחוק
      if(project)
project.tasks=project.tasks.filter(task=>task.id!==taskId)
      
    }
  },
  
});
export const { addProject,editProject, deleteProject, addTaskToProject } =
  projectsSlice.actions;

export default projectsSlice.reducer;
