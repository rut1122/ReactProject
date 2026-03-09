

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { addProject, deleteProject, editProject } from '../store/projectsSlice';
import { useNavigate } from 'react-router-dom';
import { Box, Button, TextField, Paper, Stack, Container, Grid, Card, CardContent, CardActions, Typography, Divider, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import VisibilityIcon from '@mui/icons-material/Visibility';
import EditIcon from '@mui/icons-material/Edit';

const AddProject = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const projects = useSelector((state) => state.projects.list || []);
    const [editingId, setEditingId] = useState(null);
    const { register, handleSubmit, reset, setValue, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        if (editingId) {
            dispatch(editProject({ id: editingId, ...data }));
            setEditingId(null);
        } else {
            dispatch(addProject(data));
        }
        reset({ name: '', description: '', date: '' });
    };

    const handleEdit = (project) => {
        setEditingId(project.id);
        setValue("name", project.name);
        setValue("description", project.description);
        setValue("date", project.date);
    };

    return (
        <Container maxWidth="lg" sx={{ mt: 4, mb: 4, direction: 'rtl' }}>
            <Typography variant="h4" align="center" sx={{ color: '#b85e5e', fontWeight: 'bold', mb: 4 }}>הפרויקטים שלי</Typography>

            <Grid container spacing={3} sx={{ mb: 6 }}>
                {projects.map((project) => (
                    <Grid item xs={12} sm={6} md={4} key={project.id}>
                        <Card elevation={3} sx={{ borderRadius: '16px', borderTop: '5px solid #b85e5e' }}>
                            <CardContent>
                                <Typography variant="h6" sx={{ fontWeight: 'bold' }}>{project.name}</Typography>
                                <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>{project.description}</Typography>
                                <Divider sx={{ mb: 1 }} />
                                <Stack spacing={0.5}>
                                    <Typography variant="caption" color="gray">📅 נוצר ב: {project.createdAt}</Typography>
                                    <Typography variant="caption" sx={{ color: '#b85e5e', fontWeight: 'bold' }}>🎯 תאריך יעד: {project.date}</Typography>
                                </Stack>
                            </CardContent>
                            <CardActions sx={{ justifyContent: 'space-between' }}>
                                <Box>
                                    <IconButton onClick={() => handleEdit(project)} color="primary"><EditIcon /></IconButton>
                                    <IconButton onClick={() => dispatch(deleteProject(project.id))} color="error"><DeleteIcon /></IconButton>
                                </Box>
                                <Button size="small" startIcon={<VisibilityIcon />} onClick={() => navigate(`/Projects/${project.id}/TasksList`)} sx={{ color: '#b85e5e' }}>משימות</Button>
                            </CardActions>
                        </Card>
                    </Grid>
                ))}
            </Grid>

            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                <Paper elevation={4} sx={{ p: 4, width: '100%', maxWidth: '500px', borderRadius: '20px' }}>
                    <Typography variant="h6" align="center" sx={{ mb: 2, color: '#b85e5e' }}>{editingId ? "עריכת פרויקט" : "פרויקט חדש"}</Typography>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <Stack spacing={2}>
                            <TextField {...register("name", { required: "שדה חובה" })} label="שם הפרויקט" fullWidth error={!!errors.name} />
                            <TextField {...register("description", { required: "שדה חובה" })} label="תיאור" fullWidth multiline rows={2} error={!!errors.description} />
                            <TextField {...register("date", { required: "שדה חובה" })} label="תאריך יעד" type="date" fullWidth InputLabelProps={{ shrink: true }} error={!!errors.date} />
                            <Button variant="contained" type="submit" sx={{ bgcolor: '#b85e5e', '&:hover': { bgcolor: '#a34f4f' } }}>{editingId ? "עדכן פרויקט" : "הוסף פרויקט"}</Button>
                            {editingId && <Button onClick={() => { setEditingId(null); reset(); }}>ביטול</Button>}
                        </Stack>
                    </form>
                </Paper>
            </Box>
        </Container>
    );
};

export default AddProject;