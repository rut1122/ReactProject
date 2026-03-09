import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addProject, deleteProject } from '../store/projectsSlice';
import { useNavigate } from 'react-router-dom';

// MUI Core
import {
    Box, Button, TextField, Paper, Stack,
    Container, Grid, Card, CardContent, CardActions, Typography,
    Divider, IconButton
} from '@mui/material';

// MUI Icons
import DeleteIcon from '@mui/icons-material/Delete';
import VisibilityIcon from '@mui/icons-material/Visibility';

const AddProject = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    // קבלת הפרויקטים מהסטור
    const projects = useSelector((state) => state.projects.list || []);
    // States לטופס
    const [projectName, setProjectName] = useState('');
    const [projectDescription, setProjectDescription] = useState('');
    const [projectDate, setProjectDate] = useState('');

    const handleSubmit = (e) => {
        if (e) e.preventDefault();
        if (!projectName || !projectDescription || !projectDate) return;
        const newProject = {
            id: Date.now().toString(),
            name: projectName,
            description: projectDescription,
            date: projectDate,
            createdAt: new Date().toLocaleDateString(), // תאריך יצירה למורה
        };

        dispatch(addProject(newProject));
        setProjectName('');
        setProjectDescription('');
        setProjectDate('');
    };


    // return (
    // <Container maxWidth="md" sx={{ mt: 4, mb: 4, direction: 'rtl' }}>
    //     {/* כותרת ראשית */}
    //     <Typography variant="h4" align="center" gutterBottom sx={{ color: '#b85e5e', fontWeight: 'bold', mb: 4 }}>
    //         ניהול פרויקטים
    //     </Typography>

    //     {/* חלק עליון: טופס הוספה בלבד */}
    //     <Box sx={{ display: 'flex', justifyContent: 'center', mb: 6 }}>
    //         <Paper elevation={4} sx={{ p: 4, width: '100%', maxWidth: '500px', borderRadius: '20px' }}>
    //             <Typography variant="h6" sx={{ color: "#b85e5e", mb: 2, textAlign: 'center' }}>
    //                 פרויקט חדש
    //             </Typography>
    //             <form onSubmit={handleSubmit}>
    //                 <Stack spacing={2}>
    //                     <TextField
    //                         label="שם הפרויקט"
    //                         fullWidth
    //                         size="small"
    //                         value={projectName}
    //                         onChange={(e) => setProjectName(e.target.value)}
    //                     />
    //                     <TextField
    //                         label="תיאור הפרויקט"
    //                         fullWidth
    //                         multiline
    //                         rows={2}
    //                         size="small"
    //                         value={projectDescription}
    //                         onChange={(e) => setProjectDescription(e.target.value)}
    //                     />
    //                     <TextField
    //                         label="תאריך יעד"
    //                         type="date"
    //                         fullWidth
    //                         size="small"
    //                         InputLabelProps={{ shrink: true }}
    //                         value={projectDate}
    //                         onChange={(e) => setProjectDate(e.target.value)}
    //                     />
    //                     <Button
    //                         variant="contained"
    //                         fullWidth
    //                         type="submit"
    //                             sx={{ py: 1.2, bgcolor: '#b85e5e', fontWeight: 'bold', '&:hover': { bgcolor: '#a34f4f' } }}
    //                         >
    //                             הוסף פרויקט לרשימה
    //                         </Button>
    //                     </Stack>
    //                 </form>
    //             </Paper>
    //         </Box>
    //     </Container>
    // );

    return (
        <Container maxWidth="md" sx={{ mt: 4, mb: 4, direction: 'rtl' }}>
            <Typography variant="h4" align="center" sx={{ color: '#b85e5e', fontWeight: 'bold', mb: 4 }}>
                הפרויקטים שלי
            </Typography>

            {/* רשימת הפרויקטים בפורמט כרטיסיות (MUI) */}
            <Grid container spacing={3} sx={{ mb: 6 }}>
                {projects.map((project) => (
                    <Grid item xs={12} sm={6} md={4} key={project.id}>
                        <Card elevation={3} sx={{ borderRadius: '16px' }}>
                            <CardContent>
                                <Typography variant="h6" sx={{ fontWeight: 'bold' }}>{project.name}</Typography>
                                <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>{project.description}</Typography>
                                {/* הוספת תאריך יצירה כדרישת המורה */}
                                <Typography variant="caption" color="gray">נוצר ב: {project.createdAt || project.date}</Typography>
                            </CardContent>
                            <CardActions>
                                <Button
                                    size="small"
                                    startIcon={<VisibilityIcon />}
                                    onClick={() => navigate(`/Projects/${project.id}/TasksList`)}
                                    sx={{ color: '#b85e5e' }}
                                >
                                    צפה במשימות
                                </Button>
                                <IconButton onClick={() => dispatch(deleteProject(project.id))} color="error">
                                    <DeleteIcon />
                                </IconButton>
                            </CardActions>
                        </Card>
                    </Grid>
                ))}
            </Grid>

            <Divider sx={{ mb: 4 }} />

            {/* טופס הוספה בסוף הדף */}
            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                <Paper elevation={4} sx={{ p: 4, width: '100%', maxWidth: '500px', borderRadius: '20px' }}>
                    <Typography variant="h6" align="center" sx={{ mb: 2, color: '#b85e5e' }}>פרויקט חדש</Typography>
                    <form onSubmit={handleSubmit}>
                        <Stack spacing={2}>
                            <TextField label="שם הפרויקט" fullWidth value={projectName} onChange={(e) => setProjectName(e.target.value)} />
                            <TextField label="תיאור" fullWidth multiline rows={2} value={projectDescription} onChange={(e) => setProjectDescription(e.target.value)} />
                            <TextField label="תאריך יעד" type="date" fullWidth InputLabelProps={{ shrink: true }} value={projectDate} onChange={(e) => setProjectDate(e.target.value)} />
                            <Button variant="contained" type="submit" sx={{ bgcolor: '#b85e5e', '&:hover': { bgcolor: '#a34f4f' } }}>
                                הוסף פרויקט
                            </Button>
                        </Stack>
                    </form>
                </Paper>
            </Box>
        </Container>
    );
}

export default AddProject;