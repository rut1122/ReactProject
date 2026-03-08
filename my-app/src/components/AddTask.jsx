
// // import React, { useState } from "react";
// // import { useDispatch } from "react-redux";
// // import { useParams, useNavigate } from "react-router-dom";
// // import { addTaskToProject } from "../store/projectsSlice";
// // import Box from '@mui/material/Box';
// // import InputLabel from '@mui/material/InputLabel';
// // import MenuItem from '@mui/material/MenuItem';
// // import FormControl from '@mui/material/FormControl';
// // import Select from '@mui/material/Select';
// // import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
// // import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
// // import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
// // import { DatePicker } from '@mui/x-date-pickers/DatePicker';
// // import * as React from 'react';
// // import Button from '@mui/material/Button';
// // import Snackbar from '@mui/material/Snackbar';
// // import IconButton from '@mui/material/IconButton';
// // import CloseIcon from '@mui/icons-material/Close';
// // import Button from '@mui/material/Button';
// // import TextField from '@mui/material/TextField';

// // const AddTask = () => {
// //   const dispatch = useDispatch();
// //   const navigate = useNavigate();
// //   const { ProjectId } = useParams();

// //   // State עבור שדות הטופס
// //   const [taskTitle, setTaskTitle] = useState("");
// //   const [taskDescription, setTaskDescription] = useState("");
// //   const [taskStatus, setTaskStatus] = useState("");
// //   const [taskPriority, setTaskPriority] = useState("");
// //   const [taskDate, setTaskDate] = useState("");

// //   const handleSubmitTask = (e) => {
// //     e.preventDefault();

// //     if (!taskTitle || !taskStatus) {
// //       alert("חובה למלא כותרת וסטטוס");
// //       return;
// //     }

// //     const actionPayload = {
// //       ProjectId: ProjectId,
// //       task: {
// //         title: taskTitle,
// //         description: taskDescription,
// //         status: taskStatus,
// //         priority: taskPriority,
// //         date: taskDate
// //       }
// //     };

// //     dispatch(addTaskToProject(actionPayload));
// //     navigate(`/Projects/${ProjectId}/TasksList`);
// //   };

// //   return (
// //     <div style={{ padding: "20px", direction: "rtl", maxWidth: "500px", margin: "auto" }}>
// //       <h2 style={{ textAlign: "center", color: "#b85e5e", marginBottom: "20px" }}>הוספת משימה חדשה</h2>

// //       <form onSubmit={handleSubmitTask} style={{ display: "flex", flexDirection: "column", gap: "20px" }}>

// //         {/* שדה כותרת מעוצב */}
// //         <TextField
// //           label="כותרת המשימה *"
// //           variant="outlined"
// //           value={taskTitle}
// //           onChange={(e) => setTaskTitle(e.target.value)}
// //           fullWidth
// //         />

// //         {/* שדה תיאור רב-שורתי מעוצב */}
// //         <TextField
// //           label="תיאור המשימה"
// //           variant="outlined"
// //           value={taskDescription}
// //           onChange={(e) => setTaskDescription(e.target.value)}
// //           fullWidth
// //           multiline
// //           rows={4}
// //         />

// //         <FormControl fullWidth>
// //           <InputLabel id="status-label">סטטוס משימה *</InputLabel>
// //           <Select
// //             labelId="status-label"
// //             id="status-select"
// //             value={taskStatus}
// //             label="סטטוס משימה *"
// //             onChange={(e) => setTaskStatus(e.target.value)}
// //           >
// //             <MenuItem value="To Do">To Do (לביצוע)</MenuItem>
// //             <MenuItem value="In Progress">In Progress (בביצוע)</MenuItem>
// //             <MenuItem value="Testing">Testing (בדיקות)</MenuItem>
// //             <MenuItem value="Done">Done (בוצע)</MenuItem>
// //           </Select>
// //         </FormControl>

// //         <div>

// //           <FormControl fullWidth>
// //             <InputLabel id="status-label">עדיפות  *</InputLabel>
// //             <Select
// //               labelId="status-label"
// //               id="status-select"
// //               value={taskStatus}
// //               label=" עדיפות *"
// //               onChange={(e) => setTaskStatus(e.target.value)}
// //             >
// //               <MenuItem value="To Do"></MenuItem>
// //               <MenuItem value="In Progress">נמוכה</MenuItem>
// //               <MenuItem value="Testing">בינונית</MenuItem>
// //               <MenuItem value="Done">גבוהה</MenuItem>
// //             </Select>
// //           </FormControl>
// //         </div>

// //         {/* תאריך יעד */}
// //         <div>
// //           <LocalizationProvider dateAdapter={AdapterDayjs}>
// //             <DemoContainer components={['DatePicker']}>
// //               <DatePicker label="Basic date picker" />
// //             </DemoContainer>
// //           </LocalizationProvider>
// //         </div>

// //         {/* כפתורי פעולה של MUI */}
// //         <div style={{ display: "flex", gap: "10px", marginTop: "10px" }}>
// //           <Button
// //             type="submit"
// //             variant="contained"
// //             disableElevation
// //             style={{ flex: 2, padding: "12px", fontWeight: "bold" }}
// //           >
// //             שמור משימה
// //           </Button>
// //           <Button
// //             type="button"
// //             onClick={() => navigate(-1)}
// //             variant="outlined"
// //             style={{ flex: 1, padding: "12px" }}
// //           >
// //             ביטול
// //           </Button>

// //         </div>
// //       </form>

// //     </div>
// //   );
// // };

// // // עיצוב משלים לשדות שעדיין אינם MUI
// // const inputStyle = {
// //   width: "100%",
// //   padding: "12px",
// //   borderRadius: "5px",
// //   border: "1px solid #de7777",
// //   fontSize: "16px",
// //   boxSizing: "border-box"
// // };

// // export default AddTask;

// import React, { useState } from "react";
// import { useDispatch } from "react-redux";
// import { useParams, useNavigate } from "react-router-dom";
// import { addTaskToProject } from "../store/projectsSlice";

// // MUI Core
// import { 
//   Box, InputLabel, MenuItem, FormControl, Select, 
//   Button, TextField, Snackbar, IconButton 
// } from '@mui/material';
// import CloseIcon from '@mui/icons-material/Close';

// // MUI Date Pickers
// import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
// import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
// import { DatePicker } from '@mui/x-date-pickers/DatePicker';
// import dayjs from 'dayjs';

// const AddTask = () => {
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const { ProjectId } = useParams();

//   // States
//   const [taskTitle, setTaskTitle] = useState("");
//   const [taskDescription, setTaskDescription] = useState("");
//   const [taskStatus, setTaskStatus] = useState("");
//   const [taskPriority, setTaskPriority] = useState("");
//   const [taskDate, setTaskDate] = useState(null);
//   const [openSnackbar, setOpenSnackbar] = useState(false);

//   const handleCloseSnackbar = (event, reason) => {
//     if (reason === 'clickaway') return;
//     setOpenSnackbar(false);
//   };

//   const handleSubmitTask = (e) => {
//     e.preventDefault();

//     if (!taskTitle || !taskStatus) {
//       setOpenSnackbar(true); // במקום alert
//       return;
//     }

//     const actionPayload = {
//       ProjectId: ProjectId,
//       task: {
//         title: taskTitle,
//         description: taskDescription,
//         status: taskStatus,
//         priority: taskPriority,
//         date: taskDate ? taskDate.format('YYYY-MM-DD') : ""
//       }
//     };

//     dispatch(addTaskToProject(actionPayload));
//     navigate(`/Projects/${ProjectId}/TasksList`);
//   };

//   return (
//     <div style={{ padding: "20px", direction: "rtl", maxWidth: "500px", margin: "auto" }}>
//       <h2 style={{ textAlign: "center", color: "#b85e5e", marginBottom: "30px" }}>הוספת משימה חדשה</h2>

//       <form onSubmit={handleSubmitTask} style={{ display: "flex", flexDirection: "column", gap: "20px" }}>

//         <TextField
//           label="כותרת המשימה *"
//           variant="outlined"
//           value={taskTitle}
//           onChange={(e) => setTaskTitle(e.target.value)}
//           fullWidth
//         />

//         <TextField
//           label="תיאור המשימה"
//           variant="outlined"
//           value={taskDescription}
//           onChange={(e) => setTaskDescription(e.target.value)}
//           fullWidth
//           multiline
//           rows={4}
//         />

//         <FormControl fullWidth>
//           <InputLabel id="status-label">סטטוס משימה *</InputLabel>
//           <Select
//             labelId="status-label"
//             value={taskStatus}
//             label="סטטוס משימה *"
//             onChange={(e) => setTaskStatus(e.target.value)}
//           >
//             <MenuItem value="To Do">To Do (לביצוע)</MenuItem>
//             <MenuItem value="In Progress">In Progress (בביצוע)</MenuItem>
//             <MenuItem value="Testing">Testing (בדיקות)</MenuItem>
//             <MenuItem value="Done">Done (בוצע)</MenuItem>
//           </Select>
//         </FormControl>

//         <FormControl fullWidth>
//           <InputLabel id="priority-label">עדיפות</InputLabel>
//           <Select
//             labelId="priority-label"
//             value={taskPriority}
//             label="עדיפות"
//             onChange={(e) => setTaskPriority(e.target.value)}
//           >
//             <MenuItem value="Low">נמוכה</MenuItem>
//             <MenuItem value="Medium">בינונית</MenuItem>
//             <MenuItem value="High">גבוהה</MenuItem>
//           </Select>
//         </FormControl>

//         <LocalizationProvider dateAdapter={AdapterDayjs}>
//           <DatePicker 
//             label="תאריך יעד" 
//             value={taskDate}
//             onChange={(newValue) => setTaskDate(newValue)}
//             slotProps={{ textField: { fullWidth: true } }}
//           />
//         </LocalizationProvider>

//         <div style={{ display: "flex", gap: "10px", marginTop: "10px" }}>
//           <Button
//             type="submit"
//             variant="contained"
//             disableElevation
//             style={{ flex: 2, padding: "12px", fontWeight: "bold", backgroundColor: "#b85e5e" }}
//           >
//             שמור משימה
//           </Button>
//           <Button
//             type="button"
//             onClick={() => navigate(-1)}
//             variant="outlined"
//             style={{ flex: 1, padding: "12px", color: "#b85e5e", borderColor: "#b85e5e" }}
//           >
//             ביטול
//           </Button>
//         </div>
//       </form>

//       {/* Snackbar להודעת שגיאה */}
//       <Snackbar
//         open={openSnackbar}
//         autoHideDuration={4000}
//         onClose={handleCloseSnackbar}
//         message="חובה למלא כותרת וסטטוס!"
//         action={
//           <IconButton size="small" aria-label="close" color="inherit" onClick={handleCloseSnackbar}>
//             <CloseIcon fontSize="small" />
//           </IconButton>
//         }
//       />
//     </div>
//   );
// };

// export default AddTask;


import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { addTaskToProject } from "../store/projectsSlice";

// MUI Core
import { 
  Box, InputLabel, MenuItem, FormControl, Select, 
  Button, TextField, Snackbar, IconButton, Paper, Stack 
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

// MUI Date Pickers
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import dayjs from 'dayjs';

const AddTask = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { ProjectId } = useParams();

  const [taskTitle, setTaskTitle] = useState("");
  const [taskDescription, setTaskDescription] = useState("");
  const [taskStatus, setTaskStatus] = useState("");
  const [taskPriority, setTaskPriority] = useState("");
  const [taskDate, setTaskDate] = useState(null);
  const [openSnackbar, setOpenSnackbar] = useState(false);

  const handleSubmitTask = (e) => {
    e.preventDefault();
    if (!taskTitle || !taskStatus) {
      setOpenSnackbar(true);
      return;
    }

    const actionPayload = {
      ProjectId: ProjectId,
      task: {
        title: taskTitle,
        description: taskDescription,
        status: taskStatus,
        priority: taskPriority,
        date: taskDate ? taskDate.format('YYYY-MM-DD') : ""
      }
    };

    dispatch(addTaskToProject(actionPayload));
    navigate(`/Projects/${ProjectId}/TasksList`);
  };

  return (
    <Box sx={{ 
        display: 'flex', justifyContent: 'center', alignItems: 'center', 
        minHeight: '100vh', bgcolor: '#f9f9f9', p: 2, direction: 'rtl' 
    }}>
      <Paper elevation={3} sx={{ p: 4, width: '100%', maxWidth: '450px', borderRadius: '16px' }}>
        <h2 style={{ textAlign: "center", color: "#b85e5e", marginBottom: "25px" }}>הוספת משימה חדשה</h2>

        <form onSubmit={handleSubmitTask}>
          <Stack spacing={3}>
            <TextField
              label="כותרת המשימה *"
              fullWidth
              value={taskTitle}
              onChange={(e) => setTaskTitle(e.target.value)}
            />
            <TextField
              label="תיאור המשימה"
              fullWidth
              multiline
              rows={3}
              value={taskDescription}
              onChange={(e) => setTaskDescription(e.target.value)}
            />
            <FormControl fullWidth>
              <InputLabel>סטטוס משימה *</InputLabel>
              <Select
                value={taskStatus}
                label="סטטוס משימה *"
                onChange={(e) => setTaskStatus(e.target.value)}
              >
                <MenuItem value="To Do">To Do</MenuItem>
                <MenuItem value="In Progress">In Progress</MenuItem>
                <MenuItem value="Done">Done</MenuItem>
              </Select>
            </FormControl>
            <FormControl fullWidth>
              <InputLabel>עדיפות</InputLabel>
              <Select
                value={taskPriority}
                label="עדיפות"
                onChange={(e) => setTaskPriority(e.target.value)}
              >
                <MenuItem value="Low">נמוכה</MenuItem>
                <MenuItem value="Medium">בינונית</MenuItem>
                <MenuItem value="High">גבוהה</MenuItem>
              </Select>
            </FormControl>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker 
                label="תאריך יעד" 
                value={taskDate}
                onChange={(newValue) => setTaskDate(newValue)}
                slotProps={{ textField: { fullWidth: true } }}
              />
            </LocalizationProvider>
            <Stack direction="row" spacing={2}>
              <Button
                type="submit"
                variant="contained"
                fullWidth
                sx={{ py: 1.5, bgcolor: "#b85e5e", '&:hover': { bgcolor: "#a34f4f" } }}
              >
                שמור
              </Button>
              <Button
                variant="outlined"
                fullWidth
                onClick={() => navigate(-1)}
                sx={{ color: "#b85e5e", borderColor: "#b85e5e" }}
              >
                ביטול
              </Button>
            </Stack>
          </Stack>
        </form>
      </Paper>

      <Snackbar
        open={openSnackbar}
        autoHideDuration={4000}
        onClose={() => setOpenSnackbar(false)}
        message="חובה למלא כותרת וסטטוס!"
      />
    </Box>
  );
};

export default AddTask;