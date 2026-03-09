import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { addProject, deleteProject, editProject } from '../store/projectsSlice';
import { useNavigate } from 'react-router-dom';

// MUI Core & Icons
import {
    Box, Button, TextField, Paper, Stack,
    Container, Grid, Card, CardContent, CardActions, Typography,
    Divider, IconButton
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import VisibilityIcon from '@mui/icons-material/Visibility';
import EditIcon from '@mui/icons-material/Edit';

const AddProject = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const projects = useSelector((state) => state.projects.list || []);
    
    // מצב לעריכה
    const [editingId, setEditingId] = useState(null);
    
    const { register, handleSubmit, reset, setValue, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        if (editingId) {
            // עדכון: אנחנו שולחים את ה-ID ואת השדות המעודכנים בלבד
            // ה-Reducer ידאג למזג אותם עם הנתונים הישנים
            dispatch(editProject({ 
                id: editingId, 
                name: data.name, 
                description: data.description, 
                date: data.date 
            }));
            setEditingId(null);
        } else {
            // הוספה חדשה
            dispatch(addProject({ 
                ...data, 
                id: Date.now().toString(), 
                createdAt: new Date().toLocaleDateString() 
            }));
        }
        // איפוס הטופס אחרי השליחה
        reset({ name: '', description: '', date: '' });
    };

    const handleEdit = (project) => {
        setEditingId(project.id);
        // מילוי הטופס בלי לאפס את כל הדף
        setValue("name", project.name);
        setValue("description", project.description);
        setValue("date", project.date);
    };

    return (
        <Container maxWidth="md" sx={{ mt: 4, mb: 4, direction: 'rtl' }}>
            <Typography variant="h4" align="center" sx={{ color: '#b85e5e', fontWeight: 'bold', mb: 4 }}>
                הפרויקטים שלי
            </Typography>

            <Grid container spacing={3} sx={{ mb: 6 }}>
                {projects.map((project) => (
                    <Grid item xs={12} sm={6} md={4} key={project.id}>
                        <Card elevation={3} sx={{ borderRadius: '16px' }}>
                            <CardContent>
                                <Typography variant="h6" sx={{ fontWeight: 'bold' }}>{project.name}</Typography>
                                <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>{project.description}</Typography>
                                <Typography variant="caption" color="gray">נוצר ב: {project.createdAt || project.date}</Typography>
                            </CardContent>
                            <CardActions>
                                <IconButton onClick={() => handleEdit(project)} color="primary"><EditIcon /></IconButton>
                                <IconButton onClick={() => dispatch(deleteProject(project.id))} color="error"><DeleteIcon /></IconButton>
                                <Button 
                                    size="small" 
                                    startIcon={<VisibilityIcon />} 
                                    onClick={() => navigate(`/Projects/${project.id}/TasksList`)}
                                    sx={{ color: '#b85e5e' }}
                                >
                                    צפה במשימות
                                </Button>
                            </CardActions>
                        </Card>
                    </Grid>
                ))}
            </Grid>

            <Divider sx={{ mb: 4 }} />

            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                <Paper elevation={4} sx={{ p: 4, width: '100%', maxWidth: '500px', borderRadius: '20px' }}>
                    <Typography variant="h6" align="center" sx={{ mb: 2, color: '#b85e5e' }}>
                        {editingId ? "עריכת פרויקט" : "פרויקט חדש"}
                    </Typography>
                    
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <Stack spacing={2}>
                            <TextField {...register("name", { required: "שדה חובה" })} label="שם הפרויקט" fullWidth error={!!errors.name} helperText={errors.name?.message} />
                            <TextField {...register("description", { required: "שדה חובה" })} label="תיאור" fullWidth multiline rows={2} error={!!errors.description} helperText={errors.description?.message} />
                            <TextField {...register("date", { required: "שדה חובה" })} label="תאריך יעד" type="date" fullWidth InputLabelProps={{ shrink: true }} error={!!errors.date} helperText={errors.date?.message} />
                            
                            <Button variant="contained" type="submit" sx={{ bgcolor: '#b85e5e', '&:hover': { bgcolor: '#a34f4f' } }}>
                                {editingId ? "עדכן פרויקט" : "הוסף פרויקט"}
                            </Button>
                            
                            {editingId && (
                                <Button color="inherit" onClick={() => { setEditingId(null); reset({ name: '', description: '', date: '' }); }}>
                                    ביטול עריכה
                                </Button>
                            )}
                        </Stack>
                    </form>
                </Paper>
            </Box>
        </Container>
    );
};

export default AddProject;