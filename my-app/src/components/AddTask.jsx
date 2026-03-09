import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { addTaskToProject } from "../store/projectsSlice";

// MUI Core
import { 
  Box, InputLabel, MenuItem, FormControl, Select, 
  Button, TextField, Snackbar, Paper, Stack 
} from '@mui/material';

// MUI Date Pickers
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import dayjs from 'dayjs';

const AddTask = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
const { projectId } = useParams();

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
      projectId: projectId,
      task: {
        title: taskTitle,
        description: taskDescription,
        status: taskStatus,
        priority: taskPriority,
        date: taskDate ? taskDate.format('YYYY-MM-DD') : ""
      }
    };

    dispatch(addTaskToProject(actionPayload));
    navigate(`/Projects/${projectId}/TasksList`);
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
