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
        (project) => project.id === action.payload.id,
      );
      if (projectToEdit) {
        projectToEdit.name = action.payload.newName;
      }
    },

    // מחיקת פרויקט
    deleteProject: (state, action) => {
      state.list = state.list.filter(
        (project) => project.id !== action.payload,
      );
    },

    addTaskToProject: (state, action) => {
      // חילוץ הנתונים שנשלחו מהקומפוננטה
      const { projectId, task } = action.payload;

      // מציאת הפרויקט המתאים ברשימה לפי ה-ID
      const project = state.list.find(
        (p) => String(p.id) === String(projectId),
      );

      if (project) {
        // הוספת המשימה למערך המשימות של הפרויקט שמצאנו
        project.tasks.push({
          id: Date.now().toString(), // יצירת ID ייחודי למשימה
          ...task,
        });
      }
    },
    editTask: (state, action) => {
      const { projectId, taskId, updatedFields } = action.payload;

      // 1. מציאת הפרויקט
      const project = state.list.find(
        (p) => String(p.id) === String(projectId),
      );

      if (project) {
        // 2. מציאת המשימה בתוך הפרויקט
        const task = project.tasks.find((t) => String(t.id) === String(taskId));

        if (task) {
          // 3. עדכון השדות (שם, תיאור, תאריך, עדיפות)
          task.title = updatedFields.title;
          task.description = updatedFields.description;
          task.date = updatedFields.date;
          task.priority = updatedFields.priority;
        }
      }
    },
    //שנוי סטטוס המשימה
    updateTaskStatus: (state, action) => {
      const { projectId, taskId, newStatus } = action.payload;

      // מציאת הפרויקט
      const project = state.list.find(
        (p) => String(p.id) === String(projectId),
      );

      if (project) {
        // מציאת המשימה בתוך הפרויקט
        const task = project.tasks.find((t) => String(t.id) === String(taskId));

        if (task) {
          // עדכון הסטטוס בלבד
          task.status = newStatus;
        }
      }
    },
    //פונקתיה למחיקת משימה
    deleteTask: (state, action) => {
      //מחלצים את הנתונים מהאקשין
      const { projectId, taskId } = action.payload;
      //מציאת הפרויקט הספציפי אליו משייכת המשימה
      const project = state.list.find(
        (p) => String(p.id) === String(projectId),
      );

      //אם מצאנו יוצרים רשימה חדשה ללא המשימה שרצינו למחוק
      if (project)
        project.tasks = project.tasks.filter((task) => task.id !== taskId);
    },
  },
});

export const {
  addProject,
  editProject,
  deleteProject,
  addTaskToProject,
  editTask,
  deleteTask,
  updateTaskStatus,
} = projectsSlice.actions;
export default projectsSlice.reducer;
