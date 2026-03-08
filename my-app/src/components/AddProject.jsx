// // // // // // // // import React, { useState } from 'react';
// // // // // // // // import { useDispatch } from 'react-redux';
// // // // // // // // import { addProject } from '../store/projectsSlice';
// // // // // // // // import { useStore } from 'react-redux';
// // // // // // // // import { Button, TextField, Paper, Stack } from '@mui/material';
// // // // // // // // import { Container, Box, Paper } from '@mui/material';
// // // // // // // // import { Container, Box, Paper } from '@mui/material';

// // // // // // // // const AddProject = () => {

// // // // // // // //     const dispatch = useDispatch();
// // // // // // // //     const [projectName, setProjectName] = useState('');
// // // // // // // //     const [projectDescription, setProjectDescription] = useState('');
// // // // // // // //     const [projectDate, setProjectDate] = useState('');
// // // // // // // //   //בדיקה האם כל השדות מלאים וולידציה עוצר את הפונקצי האם חסר מידע
// // // // // // // //     const handleSubmit = () => {
// // // // // // // //       if(!projectName || !projectDescription || !projectDate) {
// // // // // // // //     alert('אנא מלא את כל השדות');
// // // // // // // //     return;
// // // // // // // //       }
  
// // // // // // // //     const newProject = {
// // // // // // // //       name: projectName,
// // // // // // // //       description: projectDescription,
// // // // // // // //       date: projectDate,
// // // // // // // //     };
      
// // // // // // // //  dispatch(addProject(newProject));

// // // // // // // //   setProjectName('');
// // // // // // // //     setProjectDescription('');
// // // // // // // //     setProjectDate('');
// // // // // // // //     };

// // // // // // // // return (
// // // // // // // //   <>
// // // // // // // //   <div className="add-project">
// // // // // // // //         <h2>הוספת פרויקט חדש</h2>
        
// // // // // // // //         <div className="form-container">
// // // // // // // //             <input 
// // // // // // // //             placeholder="שם הפרויקט"
// // // // // // // //             value={projectName}
// // // // // // // //             onChange={(e) => setProjectName(e.target.value)}
// // // // // // // //             /> 
// // // // // // // //             <input 
// // // // // // // //             placeholder="תיאור הפרויקט"
// // // // // // // //             value={projectDescription}
// // // // // // // //             onChange={(e) => setProjectDescription(e.target.value)}
// // // // // // // //             />
// // // // // // // //             <input
// // // // // // // //              placeholder="תאריך הפרויקט"
// // // // // // // //             value={projectDate}
// // // // // // // //             onChange={(e) => setProjectDate(e.target.value)}
// // // // // // // //                />
// // // // // // // //                <button onClick={handleSubmit}>הוסף פרויקט</button>  
// // // // // // // //         </div>
// // // // // // // //         </div>
        
// // // // // // // //   </>
// // // // // // // // )

// // // // // // // // }
// // // // // // // // export default AddProject;



// // // export default ProjectsPage;
// // import React, { useState } from 'react';
// // import { useDispatch, useSelector } from 'react-redux';
// // import { addProject, deleteProject } from '../store/projectsSlice';
// // import { useNavigate } from 'react-router-dom';

// // // MUI Core
// // import { 
// //   Box, Button, TextField, Paper, Stack, 
// //   Container, Grid, Card, CardContent, Typography,
// //   Divider, IconButton, CardActions
// // } from '@mui/material';
// // import DeleteIcon from '@mui/icons-material/Delete';
// // import VisibilityIcon from '@mui/icons-material/Visibility';

// // const ProjectsPage = () => {
// //     const dispatch = useDispatch();
// //     const navigate = useNavigate();
    
// //     const projects = useSelector((state) => state.projects.projectsList || []);

// //     const [projectName, setProjectName] = useState('');
// //     const [projectDescription, setProjectDescription] = useState('');
// //     const [projectDate, setProjectDate] = useState('');

// //     const handleSubmit = (e) => {
// //         if (e) e.preventDefault();
// //         if(!projectName || !projectDescription || !projectDate) return;

// //         const newProject = {
// //             id: Date.now(),
// //             name: projectName,
// //             description: projectDescription,
// //             date: projectDate,
// //         };
              
// //         dispatch(addProject(newProject));
// //         setProjectName('');
// //         setProjectDescription('');
// //         setProjectDate('');
// //     };

// //     return (
// //         <Container maxWidth="md" sx={{ mt: 5, mb: 5, direction: 'rtl' }}>
            
// //             <Typography variant="h3" align="center" sx={{ color: '#2c3e50', fontWeight: 'bold', mb: 4 }}>
// //                 ניהול פרויקטים
// //             </Typography>

// //             {/* הטופס למעלה */}
// //             <Box sx={{ display: 'flex', justifyContent: 'center', mb: 4 }}>
// //                 <Paper elevation={4} sx={{ p: 4, width: '100%', maxWidth: '500px', borderRadius: '25px' }}>
// //                     <Typography variant="h6" sx={{ color: "#b85e5e", mb: 3, textAlign: 'center', fontWeight: 'bold' }}>
// //                         צור פרויקט חדש
// //                     </Typography>
// //                     <form onSubmit={handleSubmit}>
// //                         <Stack spacing={2}>
// //                             <TextField label="שם הפרויקט" fullWidth value={projectName} onChange={(e) => setProjectName(e.target.value)} />
// //                             <TextField label="תיאור הפרויקט" fullWidth multiline rows={2} value={projectDescription} onChange={(e) => setProjectDescription(e.target.value)} />
// //                             <TextField label="תאריך יעד" type="date" fullWidth InputLabelProps={{ shrink: true }} value={projectDate} onChange={(e) => setProjectDate(e.target.value)} />
// //                             <Button variant="contained" fullWidth type="submit" sx={{ py: 1.5, bgcolor: '#b85e5e', fontWeight: 'bold' }}>
// //                                 הוסף פרויקט
// //                             </Button>
// //                         </Stack>
// //                     </form>
// //                 </Paper>
// //             </Box>

// //             {/* כאן השינוי! ההודעה או הרשימה מופיעות מיד כאן */}
// //             <Divider sx={{ mb: 4 }}>הפרויקטים שלך</Divider>

// //             {projects.length === 0 ? (
// //                 /* אם אין פרויקטים - ההודעה מופיעה פה (למעלה, צמוד לטופס) */
// //                 <Box sx={{ 
// //                     textAlign: 'center', 
// //                     p: 5, 
// //                     bgcolor: '#fdf2f2', 
// //                     borderRadius: '20px',
// //                     border: '2px dashed #b85e5e',
// //                     maxWidth: '500px',
// //                     margin: '0 auto' 
// //                 }}>
// //                     <Typography variant="h6" sx={{ color: '#b85e5e', fontWeight: 'bold' }}>
// //                         הרשימה ריקה! 
// //                     </Typography>
// //                     <Typography sx={{ color: '#b85e5e' }}>
// //                         השתמשי בטופס למעלה כדי ליצור את הפרויקט הראשון שלך.
// //                     </Typography>
// //                 </Box>
// //             ) : (
// //                 /* אם יש פרויקטים - הם יופיעו כאן ויתגלגלו למטה */
// //                 <Grid container spacing={3}>
// //                     {projects.map((project) => (
// //                         <Grid item xs={12} sm={6} key={project.id}>
// //                             <Card sx={{ borderRadius: '20px', transition: '0.3s', '&:hover': { transform: 'translateY(-5px)' } }}>
// //                                 <CardContent>
// //                                     <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#b85e5e' }}>{project.name}</Typography>
// //                                     <Typography variant="body2" color="text.secondary">{project.description}</Typography>
// //                                     <Typography variant="caption" display="block" sx={{ mt: 2 }}>📅 {project.date}</Typography>
// //                                 </CardContent>
// //                                 <CardActions sx={{ justifyContent: 'space-between', bgcolor: '#fafafa' }}>
// //                                     <Button size="small" onClick={() => navigate(`/Projects/${project.id}/TasksList`)} sx={{ color: '#b85e5e' }}>משימות</Button>
// //                                     <IconButton onClick={() => dispatch(deleteProject(project.id))} color="error"><DeleteIcon /></IconButton>
// //                                 </CardActions>
// //                             </Card>
// //                         </Grid>
// //                     ))}
// //                 </Grid>
// //             )}
// //         </Container>
// //     );
// // }

// // export default ProjectsPage;


// import React, { useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { addProject, deleteProject } from '../store/projectsSlice';
// import { useNavigate } from 'react-router-dom';

// // MUI Core
// import { 
//   Box, Button, TextField, Paper, Stack, 
//   Container, Grid, Card, CardContent, Typography,
//   Divider, IconButton, CardActions
// } from '@mui/material';
// import DeleteIcon from '@mui/icons-material/Delete';
// import VisibilityIcon from '@mui/icons-material/Visibility';
// import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

// const ProjectsPage = () => {
//     const dispatch = useDispatch();
//     const navigate = useNavigate();
    
//     // חשוב: וודאי שהנתיב בתוך ה-state הוא אכן projectsList
//     const projects = useSelector((state) => state.projects.projectsList || []);

//     const [projectName, setProjectName] = useState('');
//     const [projectDescription, setProjectDescription] = useState('');
//     const [projectDate, setProjectDate] = useState('');

//     const handleSubmit = (e) => {
//         if (e) e.preventDefault();
//         if(!projectName || !projectDescription || !projectDate) return;

//         const newProject = {
//             id: Date.now(),
//             name: projectName,
//             description: projectDescription,
//             date: projectDate,
//         };
              
//         dispatch(addProject(newProject));
//         setProjectName('');
//         setProjectDescription('');
//         setProjectDate('');
//     };

//     return (
//         <Box sx={{ bgcolor: '#fbfbfb', minHeight: '100vh', py: 5 }}>
//             <Container maxWidth="md" sx={{ direction: 'rtl' }}>
                
//                 {/* כותרת מרכזית אחת בלבד */}
//                 <Typography variant="h3" align="center" sx={{ color: '#2c3e50', fontWeight: '900', mb: 6 }}>
//                     ניהול פרויקטים
//                 </Typography>

//                 {/* --- חלק 1: טופס הוספה מעוצב --- */}
//                 <Box sx={{ display: 'flex', justifyContent: 'center', mb: 8 }}>
//                     <Paper elevation={8} sx={{ 
//                         p: 4, 
//                         width: '100%', 
//                         maxWidth: '550px', 
//                         borderRadius: '25px',
//                         bgcolor: '#ffffff'
//                     }}>
//                         <Stack direction="row" spacing={1} justifyContent="center" alignItems="center" sx={{ mb: 3 }}>
//                             <AddCircleOutlineIcon sx={{ color: '#b85e5e' }} />
//                             <Typography variant="h5" sx={{ color: "#b85e5e", fontWeight: 'bold' }}>
//                                 הוספת פרויקט חדש
//                             </Typography>
//                         </Stack>
                        
//                         <form onSubmit={handleSubmit}>
//                             <Stack spacing={3}>
//                                 <TextField 
//                                     label="שם הפרויקט" 
//                                     fullWidth 
//                                     value={projectName}
//                                     onChange={(e) => setProjectName(e.target.value)}
//                                     sx={{ '& .MuiOutlinedInput-root': { borderRadius: '15px' } }}
//                                 />
//                                 <TextField 
//                                     label="תיאור הפרויקט" 
//                                     fullWidth 
//                                     multiline 
//                                     rows={2}
//                                     value={projectDescription}
//                                     onChange={(e) => setProjectDescription(e.target.value)}
//                                     sx={{ '& .MuiOutlinedInput-root': { borderRadius: '15px' } }}
//                                 />
//                                 <TextField 
//                                     label="תאריך יעד" 
//                                     type="date" 
//                                     fullWidth 
//                                     InputLabelProps={{ shrink: true }}
//                                     value={projectDate}
//                                     onChange={(e) => setProjectDate(e.target.value)}
//                                     sx={{ '& .MuiOutlinedInput-root': { borderRadius: '15px' } }}
//                                 />
//                                 <Button 
//                                     variant="contained" 
//                                     fullWidth 
//                                     type="submit"
//                                     sx={{ 
//                                         py: 2, 
//                                         bgcolor: '#b85e5e', 
//                                         borderRadius: '15px',
//                                         fontWeight: 'bold',
//                                         '&:hover': { bgcolor: '#a34f4f' } 
//                                     }}
//                                 >
//                                     צור פרויקט עכשיו
//                                 </Button>
//                             </Stack>
//                         </form>
//                     </Paper>
//                 </Box>

//                 <Divider sx={{ mb: 6 }}>
//                     <Typography variant="h6" sx={{ color: '#aaa', px: 2 }}>הפרויקטים שלי</Typography>
//                 </Divider>

//                 {/* --- חלק 2: רשימת הפרויקטים --- */}
//                 {projects.length > 0 ? (
//                     <Grid container spacing={3}>
//                         {projects.map((project) => (
//                             <Grid item xs={12} sm={6} key={project.id}>
//                                 <Card sx={{ 
//                                     borderRadius: '20px', 
//                                     boxShadow: '0 8px 20px rgba(0,0,0,0.06)',
//                                     transition: '0.3s',
//                                     '&:hover': { transform: 'translateY(-5px)', boxShadow: '0 12px 30px rgba(0,0,0,0.1)' }
//                                 }}>
//                                     <CardContent sx={{ p: 3 }}>
//                                         <Typography variant="h5" sx={{ fontWeight: 'bold', color: '#b85e5e', mb: 1 }}>
//                                             {project.name}
//                                         </Typography>
//                                         <Typography variant="body2" color="text.secondary" sx={{ minHeight: '40px' }}>
//                                             {project.description}
//                                         </Typography>
//                                         <Box sx={{ mt: 2, bgcolor: '#fdf2f2', p: 1, borderRadius: '10px', display: 'inline-block' }}>
//                                             <Typography variant="caption" sx={{ color: '#b85e5e', fontWeight: 'bold' }}>
//                                                 📅 {project.date}
//                                             </Typography>
//                                         </Box>
//                                     </CardContent>
//                                     <CardActions sx={{ justifyContent: 'space-between', px: 2, pb: 2 }}>
//                                         <Button 
//                                             variant="outlined"
//                                             size="small"
//                                             startIcon={<VisibilityIcon />}
//                                             onClick={() => navigate(`/Projects/${project.id}/TasksList`)}
//                                             sx={{ borderRadius: '10px', color: '#b85e5e', borderColor: '#b85e5e' }}
//                                         >
//                                             משימות
//                                         </Button>
//                                         <IconButton onClick={() => dispatch(deleteProject(project.id))} sx={{ color: '#ff5252' }}>
//                                             <DeleteIcon />
//                                         </IconButton>
//                                     </CardActions>
//                                 </Card>
//                             </Grid>
//                         ))}
//                     </Grid>
//                 ) : (
//                     /* הודעת אין פרויקטים - תופיע רק אם הרשימה ריקה באמת */
//                     <Box sx={{ textAlign: 'center', p: 6, bgcolor: '#ffffff', borderRadius: '25px', border: '2px dashed #eee' }}>
//                         <Typography sx={{ color: '#bbb', fontWeight: 'bold' }}>
//                             עדיין לא הוספת פרויקטים...
//                         </Typography>
//                     </Box>
//                 )}

//             </Container>
//         </Box>
//     );
// }

// export default ProjectsPage;


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
import DeleteIcon from '@mui/icons-material/Delete';
import VisibilityIcon from '@mui/icons-material/Visibility';

const ProjectsPage = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    
    // קבלת הפרויקטים מהסטור
    const projects = useSelector((state) => state.projects.projectsList || []);

    // States לטופס
    const [projectName, setProjectName] = useState('');
    const [projectDescription, setProjectDescription] = useState('');
    const [projectDate, setProjectDate] = useState('');

    const handleSubmit = (e) => {
        if (e) e.preventDefault();
        if(!projectName || !projectDescription || !projectDate) return;

        const newProject = {
            id: Date.now(),
            name: projectName,
            description: projectDescription,
            date: projectDate,
        };
              
        dispatch(addProject(newProject));
        setProjectName('');
        setProjectDescription('');
        setProjectDate('');
    };

    return (
        <Container maxWidth="md" sx={{ mt: 4, mb: 4, direction: 'rtl' }}>
            {/* כותרת ראשית */}
            <Typography variant="h4" align="center" gutterBottom sx={{ color: '#b85e5e', fontWeight: 'bold', mb: 4 }}>
                ניהול פרויקטים
            </Typography>

            {/* חלק עליון: טופס הוספה */}
            <Box sx={{ display: 'flex', justifyContent: 'center', mb: 6 }}>
                <Paper elevation={4} sx={{ p: 4, width: '100%', maxWidth: '500px', borderRadius: '20px' }}>
                    <Typography variant="h6" sx={{ color: "#b85e5e", mb: 2, textAlign: 'center' }}>
                        פרויקט חדש
                    </Typography>
                    <form onSubmit={handleSubmit}>
                        <Stack spacing={2}>
                            <TextField 
                                label="שם הפרויקט" 
                                fullWidth 
                                size="small"
                                value={projectName}
                                onChange={(e) => setProjectName(e.target.value)}
                            />
                            <TextField 
                                label="תיאור הפרויקט" 
                                fullWidth 
                                multiline 
                                rows={2}
                                size="small"
                                value={projectDescription}
                                onChange={(e) => setProjectDescription(e.target.value)}
                            />
                            <TextField 
                                label="תאריך יעד" 
                                type="date" 
                                fullWidth 
                                size="small"
                                InputLabelProps={{ shrink: true }}
                                value={projectDate}
                                onChange={(e) => setProjectDate(e.target.value)}
                            />
                            <Button 
                                variant="contained" 
                                fullWidth 
                                type="submit"
                                sx={{ py: 1.2, bgcolor: '#b85e5e', fontWeight: 'bold', '&:hover': { bgcolor: '#a34f4f' } }}
                            >
                                הוסף פרויקט לרשימה
                            </Button>
                        </Stack>
                    </form>
                </Paper>
            </Box>

            <Divider sx={{ mb: 4 }}>הפרויקטים שלי</Divider>

            {/* חלק תחתון: הצגת הפרויקטים או הודעה ריקה */}
            {projects.length > 0 ? (
                <Grid container spacing={3}>
                    {projects.map((project) => (
                        <Grid item xs={12} sm={6} key={project.id}>
                            <Card sx={{ 
                                borderRadius: '15px', 
                                transition: '0.3s', 
                                '&:hover': { transform: 'translateY(-5px)', boxShadow: 6 } 
                            }}>
                                <CardContent>
                                    <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#2c3e50' }}>
                                        {project.name}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary" sx={{ mt: 1, minHeight: '40px' }}>
                                        {project.description}
                                    </Typography>
                                    <Typography variant="caption" display="block" sx={{ mt: 2, color: '#b85e5e', fontWeight: 'bold' }}>
                                        תאריך: {project.date}
                                    </Typography>
                                </CardContent>
                                <CardActions sx={{ justifyContent: 'space-between', bgcolor: '#fdf2f2', px: 2 }}>
                                    <Button 
                                        size="small" 
                                        startIcon={<VisibilityIcon />}
                                        onClick={() => navigate(`/Projects/${project.id}/TasksList`)}
                                        sx={{ color: '#b85e5e' }}
                                    >
                                        צפה במשימות
                                    </Button>
                                    <IconButton 
                                        size="small" 
                                        color="error" 
                                        onClick={() => dispatch(deleteProject(project.id))}
                                    >
                                        <DeleteIcon />
                                    </IconButton>
                                </CardActions>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            ) : (
                /* הכיתוב שיופיע רק אם אין פרויקטים */
                <Box sx={{ 
                    p: 5, 
                    border: '1px dashed #ccc', 
                    borderRadius: '16px', 
                    textAlign: 'center',
                    bgcolor: '#fafafa'
                }}>
                    <Typography sx={{ color: 'gray' }}>
                        עדיין לא הוספת פרויקטים...
                    </Typography>
                </Box>
            )}
        </Container>
    );
}

export default ProjectsPage;