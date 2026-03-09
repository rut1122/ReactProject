// import React from "react";
// import { useSelector } from "react-redux";
// import { useParams, useNavigate } from "react-router-dom";
// import TaskCard from "./TaskCard";

// // MUI Core - כל מה שצריך לעיצוב הלוח
// import {
//   Container, Typography, Box, Grid, Button,
//   Paper, Divider, Chip, Stack
// } from '@mui/material';

// // MUI Icons
// import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
// import AddIcon from '@mui/icons-material/Add';

// const TasksList = () => {
//   const { projectId } = useParams();
//   const navigate = useNavigate();

//   const projects = useSelector((state) => state.projects.list);

//   const project = projects.find((p) => String(p.id) === String(projectId));
//   const tasks = project?.tasks || [];

//   const statuses = [
//     { id: "To Do", title: "משימות לביצוע" },
//     { id: "In Progress", title: "בביצוע מפתח" },
//     { id: "Testing", title: "מוכן לבדיקות" },
//     { id: "Done", title: "נבדקו" },
//   ];

//   if (!project) return <p dir="rtl">טוען פרויקט או שהפרויקט לא נמצא...</p>;

//   return (
//     // <div className="card-style" style={{ borderRight: `6px solid ${task.priority === 'High' ? 'red' : 'green'}` }}>
//     <div className="main-container">

//       <Button
//         onClick={() => navigate('/Projects')}
//         sx={{ color: '#b85e5e', mt: 2, fontWeight: 'bold' }}
//       >
//         ← חזרה לכל הפרויקטים
//       </Button>
//       <header style={{ textAlign: "center", marginBottom: "30px" }}>
//         <h1>פרויקט: {project.name}</h1>
//         <button
//           className="add-btn"
//           onClick={() => navigate(`/Projects/${projectId}/AddTask`)}
//         >
//           + משימה חדשה
//         </button>
//       </header>

//       <div
//         style={{
//           display: "flex",
//           gap: "20px",
//           justifyContent: "center", // מרכוז העמודות
//           alignItems: "flex-start",
//           flexWrap: "wrap", // תמיכה במסכים קטנים
//           width: "100%",
//         }}
//       >
//         {statuses.map((status) => (
//           <div
//             key={status.id}
//             style={{
//               width: "280px", // רוחב קבוע לכל עמודה
//               backgroundColor: "#ebedf0",
//               padding: "15px",
//               borderRadius: "10px",
//               minHeight: "600px",
//             }}
//           >
//             <h3 style={{ textAlign: "center" }}>{status.title}</h3>
//             {tasks
//               .filter((t) => t.status === status.id)

//               .map((t) => (
//                 // במקום לכתוב כאן את כל ה-HTML של המשימה, אנחנו קוראים לכרטיס
//                 <TaskCard key={t.id} task={t} projectId={projectId} />
//               ))}
//           </div>
//         ))}
//       </div>
//     </div>
//     // </div>
//   );
// };
// TasksList.jsx;
// export default TasksList;

import React from "react";
import { useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import TaskCard from "./TaskCard";
import {
  Typography,
  Box,
  Grid,
  Button,
  Paper,
  Stack,
  Container,
} from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import AddIcon from "@mui/icons-material/Add";

const TasksList = () => {
  const { projectId } = useParams();
  const navigate = useNavigate();
  const projects = useSelector((state) => state.projects.list);
  const project = projects.find((p) => String(p.id) === String(projectId));
  const tasks = project?.tasks || [];

  const statuses = [
    { id: "To Do", title: "משימות לביצוע", color: "#d32f2f" },
    { id: "In Progress", title: "בביצוע מפתח", color: "#ed6c02" },
    { id: "Testing", title: "מוכן לבדיקות", color: "#0288d1" },
    { id: "Done", title: "נבדקו", color: "#2e7d32" },
  ];

  if (!project)
    return (
      <>
        <Button
          startIcon={<ArrowForwardIcon sx={{ ml: 1 }} />}
          onClick={() => navigate("/Projects")}
          sx={{
            color: "#b85e5e",
            fontWeight: "bold",
            fontSize: "1.2rem",
            padding: "10px 24px",
            borderRadius: "8px",
          }}
        >
          חזרה
        </Button>
        <Typography sx={{ textAlign: "center", mt: 5 }}>
          טוען פרויקט...
        </Typography>
        ;
      </>
    );
  return (
    <Container
      maxWidth={false}
      disableGutters
      sx={{ minHeight: "100vh", bgcolor: "#f5f5f5", pb: 5 }}
    >
      <Box
        sx={{
          width: "100%",
          bgcolor: "white",
          py: 2,
          px: 4,
          mb: 4,
          boxShadow: "0 2px 10px rgba(0,0,0,0.05)",
          direction: "rtl",
        }}
      >
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
         <Button
          startIcon={<ArrowForwardIcon sx={{ ml: 1 }} />}
          onClick={() => navigate("/Projects")}
          sx={{
            color: "#b85e5e",
            fontWeight: "bold",
            fontSize: "1.2rem",
            padding: "10px 24px",
            borderRadius: "8px",
          }}
        >
          חזרה
        </Button>
          <Typography
            variant="h4"
            sx={{ fontWeight: "bold", color: "#b85e5e" }}
          >
            {project.name}
          </Typography>
          <Button
            variant="contained"
            startIcon={<AddIcon sx={{ ml: 1 }} />}
            onClick={() => navigate(`/Projects/${projectId}/AddTask`)}
            sx={{
              bgcolor: "#b85e5e",
              "&:hover": { bgcolor: "#a34f4f" },
              borderRadius: "20px",
            }}
          >
            משימה חדשה
          </Button>
        </Stack>
      </Box>

      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          gap: 3,
          flexWrap: "wrap",
          px: 3,
        }}
      >
        {statuses.map((status) => (
          <Paper
            key={status.id}
            elevation={0}
            sx={{
              p: 2,
              bgcolor: "#ebedf0",
              borderRadius: "12px",
              minHeight: "80vh",
              width: "280px",
              minWidth: "280px",
              borderTop: `5px solid ${status.color}`,
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Typography
              variant="h6"
              sx={{ fontWeight: "bold", mb: 3, textAlign: "center" }}
            >
              {status.title}
            </Typography>

            <Stack spacing={2} sx={{ flexGrow: 1 }}>
              {tasks
                .filter((t) => t.status === status.id)
                .map((t) => (
                  <TaskCard key={t.id} task={t} />
                ))}
            </Stack>
          </Paper>
        ))}
      </Box>
    </Container>
  );
};

export default TasksList;
