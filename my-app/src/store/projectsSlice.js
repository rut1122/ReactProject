

import { createSlice } from "@reduxjs/toolkit";

const projectsSlice = createSlice({
  name: "projects",
  initialState: {
    list: [],
  },
  reducers: {
    addProject: (state, action) => {
      const newProject = {
        id: Date.now().toString(),
        createdAt: new Date().toLocaleDateString(), // תאריך יצירה אוטומטי
        tasks: [],
        ...action.payload, // מקבל name, description, date מהטופס
      };
      state.list.push(newProject);
    },

    editProject: (state, action) => {
      const { id, name, description, date } = action.payload;
      const projectToEdit = state.list.find((p) => String(p.id) === String(id));
      if (projectToEdit) {
        projectToEdit.name = name;
        projectToEdit.description = description;
        projectToEdit.date = date; // עדכון תאריך היעד
      }
    },

    deleteProject: (state, action) => {
      state.list = state.list.filter((p) => p.id !== action.payload);
    },

    addTaskToProject: (state, action) => {
      const { projectId, task } = action.payload;
      const project = state.list.find((p) => String(p.id) === String(projectId));
      if (project) {
        project.tasks.push({
          id: Date.now().toString(),
          status: "To Do", // סטטוס דיפולטיבי
          ...task,
        });
      }
    },

    editTask: (state, action) => {
      const { projectId, taskId, updatedFields } = action.payload;
      const project = state.list.find((p) => String(p.id) === String(projectId));
      if (project) {
        const task = project.tasks.find((t) => String(t.id) === String(taskId));
        if (task) {
          Object.assign(task, updatedFields);
        }
      }
    },

    updateTaskStatus: (state, action) => {
      const { projectId, taskId, newStatus } = action.payload;
      const project = state.list.find((p) => String(p.id) === String(projectId));
      if (project) {
        const task = project.tasks.find((t) => String(t.id) === String(taskId));
        if (task) task.status = newStatus;
      }
    },

    deleteTask: (state, action) => {
      const { projectId, taskId } = action.payload;
      const project = state.list.find((p) => String(p.id) === String(projectId));
      if (project) {
        project.tasks = project.tasks.filter((t) => t.id !== taskId);
      }
    },
  },
});

export const { addProject, editProject, deleteProject, addTaskToProject, editTask, deleteTask, updateTaskStatus } = projectsSlice.actions;
export default projectsSlice.reducer;
