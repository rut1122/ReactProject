import React, { useState } from 'react';
import { useDispatch } from "react-redux";
import { useParams } from 'react-router-dom';
import { deleteTask, updateTaskStatus, editTask } from "../store/projectsSlice";
import { Card, CardContent, Typography, IconButton, Stack, TextField, Button, MenuItem, Select, FormControl, InputLabel, Box } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import SaveIcon from '@mui/icons-material/Save';
//הצגת השימות של כל פרויקט
const TaskCard = ({ task }) => {
  const dispatch = useDispatch();
  const { projectId } = useParams();
  const [isEditing, setIsEditing] = useState(false);
  const [tempTask, setTempTask] = useState({ ...task });

  const handleSave = () => {
    dispatch(editTask({ projectId, taskId: task.id, updatedFields: tempTask }));
    setIsEditing(false);
  };

  const priorityColor = task.priority === 'High' ? '#ffcdd2' : task.priority === 'Medium' ? '#fff9c4' : '#c8e6c9';

  return (
    <Card sx={{ width: '100%', borderRight: `6px solid ${task.priority === 'High' ? '#d32f2f' : '#2e7d32'}`, boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
      <CardContent sx={{ p: 1.5, "&:last-child": { pb: 1.5 } }}>
        {isEditing ? (
          <Stack spacing={1}>
            <TextField size="small" fullWidth value={tempTask.title} label='כותרת' onChange={(e) => setTempTask({...tempTask, title: e.target.value})} />
            <TextField size="small" fullWidth multiline rows={2} value={tempTask.description} label='תאור' onChange={(e) => setTempTask({...tempTask, description: e.target.value})} />
            <Button size="small" variant="contained" onClick={handleSave} startIcon={<SaveIcon />} sx={{ bgcolor: '#b85e5e' }}>שמור</Button>
          </Stack>
        ) : (
          <Box>
            <Typography variant="subtitle2" sx={{ fontWeight: 'bold' }}>{task.title}</Typography>
            <Typography variant="caption" color="text.secondary" display="block" sx={{ mb: 1 }}>{task.description}</Typography>
            
            <FormControl fullWidth size="small" sx={{ my: 1 }}>
              <Select value={task.status} onChange={(e) => dispatch(updateTaskStatus({ projectId, taskId: task.id, newStatus: e.target.value }))}>
                <MenuItem value="To Do">To Do</MenuItem>
                <MenuItem value="In Progress">In Progress</MenuItem>
                <MenuItem value="Testing">Testing</MenuItem>
                <MenuItem value="Done">Done</MenuItem>
              </Select>
            </FormControl>

            <Stack direction="row" justifyContent="space-between" alignItems="center">
              <Box>
                <IconButton size="small" onClick={() => setIsEditing(true)}><EditIcon fontSize="inherit" /></IconButton>
                <IconButton size="small" color="error" onClick={() => dispatch(deleteTask({ projectId, taskId: task.id }))}><DeleteIcon fontSize="inherit" /></IconButton>
              </Box>
              <Box sx={{ bgcolor: priorityColor, px: 1, borderRadius: 1, fontSize: '10px' }}>{task.date}</Box>
            </Stack>
          </Box>
        )}
      </CardContent>
    </Card>
  );
};

export default TaskCard;